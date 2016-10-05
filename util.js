import $ from 'jquery'
import axios from "axios"

//http://stackoverflow.com/questions/17604071/parse-xml-using-javascript
function getParser() {
    return new DOMParser();
}

function parseXML(parser, xml) {
   return parser.parseFromString(xml, "text/xml");
}

export function getIndex() {
  return axios.get('./problems/index.json');
}

class XML {
  constructor(xmlTree) {
    this._xml = xmlTree;
  }
  getManifest(id) {
    var descriptFile = this._xml.getElementsByTagName("description")[0].childNodes[0].nodeValue;
    var codes = this._xml.getElementsByTagName("code");
    var manifest = {
      description: {
        filename: descriptFile,
        url: `./problems/${id}/${descriptFile}`,
        text: ""
      },
      codes: []
    };
    for(var i = 0; i < codes.length; i++) {
      var language = codes[i].getAttribute('type');
      var source  = codes[i].childNodes[0].nodeValue;
      manifest.codes.push({
        language: language,
        source: source,
        url: `./problems/${id}/${source}`,
        text: ""
      });
    }
    return manifest
  }
}

export function fetchProblem(id, cb) {
    var problemId;
    try {
      problemId = parseInt(id);
      if (id <= 0) throw "Invalid"
    } catch(e) {
      throw e;
    }
  axios.get(`./problems/${problemId}/manifest.xml`)
  .then(function (res) {
    var parser = getParser();
    var xmlTree = parseXML(parser, res.data);
    var xml = new XML(xmlTree);
    var manifest = xml.getManifest(problemId);
    var problem = new Problem(manifest);
    problem.fetch(cb);
  })
}

class Problem {
  constructor(manifest) {
    this.manifest = manifest;
  }
  fetch(cb) {
    var promises = [];
    promises.push(axios.get(this.manifest.description.url));
    this.manifest.codes.forEach((code) => {
      promises.push(axios.get(code.url));
    })

    var self = this;

    axios.all(promises)
    .then(axios.spread(function() {
      var promises = Array.prototype.slice.call(arguments);
      self.manifest.description.text = promises.shift().data;

      for(var i = 0; i < promises.length; i++) {
        self.manifest.codes[i].text = promises[i].data;
      }
      cb(self);
    }));
  }
  getDescription() {
    return this.manifest.description;
  }
  getCodes() {
    return this.manifest.codes;
  }
}
