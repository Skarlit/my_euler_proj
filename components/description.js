import React from 'react'

export default React.createClass({
    componentDidMount() {
      this.renderLatex();
    },
    componentDidUpdate() {
      this.renderLatex();
    },
    renderLatex() {
      if (this.props.text.length > 0) {
        this.refs.description.innerHTML = this.props.text;
        MathJax.Hub.Typeset();
      }
    },
    render() {
      return <div ref="description" className="description">
      </div>
    }
})
