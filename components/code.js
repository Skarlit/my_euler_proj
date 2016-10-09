import React from 'react'
import {languages} from "../config.js"
export default React.createClass({
    componentDidMount() {
      window.PR.prettyPrint();
    },
    componentDidUpdate() {
      window.PR.prettyPrint();
    },
    render() {
      var fullUrl = `https://github.com/Skarlit/my_euler_proj/tree/gh-pages${this.props.url.replace(/^\./, '')}`;
      var filename = this.props.url.split('/').pop();
      return <div className="code">
        <a href={fullUrl} title={`${this.props.language} - ${filename}`}><i>{filename}</i></a>
         <pre className="prettyprint linenums">
          <code className={languages[this.props.language]}>{this.props.text}</code>
        </pre>
      </div>
    }
})
