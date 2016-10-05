import React from 'react'
import Latex  from "react-latex"
import { Link } from 'react-router'
import { languages } from "./config.js"
import { fetchProblem, getIndex} from "./util.js"

export const Index = React.createClass({
    getInitialState() {
      return {index: []}
    },
    componentDidMount() {
      getIndex().then((res) => {
        this.setState({index: res.data.index})
      })
    },
    render() {
      var indices = [];
      for(var i = 0; i <= this.state.index.length; i++) {
        var idx = this.state.index[i];
        indices.push(<Link className="problem-link" to={`/problem/${idx}`} key={`problem-${idx}`}>{idx}</Link>)
      }
      return <div className="index">
        <div className="index-wrapper">
          {indices}
        </div>
        <div className="content-wrapper">
          {this.props.children}
        </div>
        <div className="index-wrapper">
          {indices}
        </div>
      </div>
    }
})

export const Home = React.createClass({
    render() {
      return <div className="home">
          My solution to Project Euler
      </div>
    }
})

export const Content = React.createClass({
    getInitialState() {
      return {problem: null};
    },
    shouldComponentUpdate(nextProp) {
      return nextProp.params.id != this.props.params.id || !this.state.problem;
    },
    componentDidMount() {
      this.fetch();
    },
    componentDidUpdate() {
      this.fetch();
    },
    fetch() {
      fetchProblem(this.props.params.id, (problem)=> {
        this.setState({problem: problem});
      })
    },
    render() {
      var codes = [];
      if (this.state.problem) {
        this.state.problem.getCodes().forEach((code) => {
          codes.push(<Code language={code.language} text={code.text} filename={code.filename} url={code.url} />)
        })
      }
      return <div>
        <Description text={this.state.problem ? this.state.problem.getDescription().text : ""} />
        {codes}
      </div>
    }
})

export const NoMatch = React.createClass({
    render() {
        return <h1>Invalid URL</h1>
    }
});

export const Description = React.createClass({
    render() {
      return <div className="description">
        <Latex>{this.props.text}</Latex>
      </div>
    }
})

export const Code = React.createClass({
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
