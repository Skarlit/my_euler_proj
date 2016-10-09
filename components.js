import React from 'react'
import { Link } from 'react-router'
import { fetchProblem, getIndex} from "./util.js"
import TableOfContent from "./containers/table_of_content.js";

export const Index = React.createClass({
    render() {
      return <div className="index">
        <div className="home">
            My solution to Project Euler
        </div>
        <a href="http://ranxie.us" className="back-btn">Back</a>
        <div className="content-wrapper">
          {this.props.children}
        </div>
        <TableOfContent currentId={this.props.params.id}/>
      </div>
    }
})

export const Home = React.createClass({
    render() {
      return
    }
})

export const NoMatch = React.createClass({
    render() {
        return <h1>Invalid URL</h1>
    }
});
