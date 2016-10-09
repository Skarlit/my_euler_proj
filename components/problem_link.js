import React from "react"
import { Link } from 'react-router'

export default (props) => {
  return <div className={props.active ? 'problem-link active-link' : 'problem-link'}>
     <Link to={`/problem/${props.idx}`} key={`problem-${props.idx}`}>{props.idx}</Link>
  </div>
}
