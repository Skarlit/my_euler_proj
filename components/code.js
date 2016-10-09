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
      return <div className="code">
         <pre className="prettyprint">
          <code className={languages[this.props.language]}>{this.props.text}</code>
        </pre>
      </div>
    }
})
