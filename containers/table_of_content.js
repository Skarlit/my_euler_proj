import { connect } from 'react-redux'
import { SELECT_PROBLEM, UPDATE_PROBLEM_INDICES } from "../actions.js";
import { getIndex } from "../util.js"
import ProblemLink from "../components/problem_link.js"
import React from "react";

const mapStateToProps = (state, ownProps) => {
  return {
    availableIndices: state.euler.get('indices'),
    currentId: ownProps.currentId
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onProblemSelect: (id) => {
      dispatch({type: SELECT_PROBLEM, currentProblemId: id})
    },
    fetchProblemIndices: () => {
      getIndex().then((res) => {
        dispatch({type: UPDATE_PROBLEM_INDICES, payload: res.data.index});
      })
    }
  }
}

class TableOfContent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.availableIndices.size == 0) {
      this.props.fetchProblemIndices();
    }
  }
  render() {
    var indices = [];
    // var currentId = this.props.params ? this.props.params.id : null;
    this.props.availableIndices.forEach(idx => {
      return indices.push(<ProblemLink active={this.props.currentId == idx} idx={idx} key={'link-' + idx} />)
    });
   return <div>
      <div className="index-wrapper">
        {indices}
      </div>
      <a href="http://ranxie.us" className="back-btn">Back</a>
    </div>
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TableOfContent)
