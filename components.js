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
        <div className="content-wrapper">
          {this.props.children}
        </div>
        <TableOfContent currentId={this.props.params.id}/>
      </div>
    }
})

export const Default = React.createClass({
    render() {
      return <div className="default-text">
        <div>My Friend key is the following:</div>
        <div>1036920_EoINn2FsiHsVzrrZKpGfc1Mk5X54VGRU</div>
        <div>Feel Free to add : )</div>
      </div>
    }
})

export const NoMatch = React.createClass({
    render() {
        return <h1>Invalid URL</h1>
    }
});
