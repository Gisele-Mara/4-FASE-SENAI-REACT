import React from 'react'



function Title(props) {
  return (
    <div>
        <h1>Page's title</h1>
        <p> {props.text}</p>
    </div>
  )
}

export default Title
