import { connect } from 'react-redux'
import { UPDATE_PROBLEM_INDICES, LOAD_PROBLEM } from "../actions.js";
import { getIndex } from "../util.js"
import { ProblemLink } from "../components/problem_link.js"
import { fetchProblem } from "../util.js"
import Description from "../components/description.js"
import Code from "../components/code.js"
import React from "react";

const mapStateToProps = (state, ownProps) => {
  return {
    problem: state.euler.getIn(['problems', ownProps.params.id])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    loadProblem: (id) => {
      fetchProblem(id, (problem)=> {
        dispatch({type: LOAD_PROBLEM, problem: problem, id: id})
      })
    }
  }
}

const Content = React.createClass({
    componentDidMount() {
      this.fetch();
    },
    componentDidUpdate() {
      this.fetch();
    },
    fetch() {
      if (!this.props.problem) {
        this.props.loadProblem(this.props.params.id)
      }
    },
    render() {
      var codes = [];
      if (this.props.problem) {
        this.props.problem.get('codes').forEach((code, i) => {
          codes.push(<Code
            key={`${code.get('filename')}-${i}-${this.props.params.id}`}
            language={code.get('language')} text={code.get('text')}
            filename={code.get('filename')}
            url={code.get('url')} />)
        })
      }
      var link = `https://projecteuler.net/problem=${this.props.params.id}`;
      return <div>
        <div>
           {"Link to the problem: "}<a href={link} target="_"><i>{link}</i></a>
        </div>
        <Description key={"desc-" + this.props.params.id} text={this.props.problem ? this.props.problem.getIn(['description', 'text']) : ""} />
        {codes}
      </div>
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Content)
