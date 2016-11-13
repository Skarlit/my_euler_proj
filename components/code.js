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
      var codeClassName = (languages[this.props.language] && languages[this.props.language].className) || ''
      return <div className="code">
        <a href={fullUrl} title={`${this.props.language} - ${filename}`}><i>{filename}</i></a>
         <pre className="prettyprint linenums code-pre">
          <code className={codeClassName}>{this.props.text}</code>
        </pre>
      </div>
    }
})
