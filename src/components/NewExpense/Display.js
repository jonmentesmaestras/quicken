import React from 'react'

const Display = (props) => {
  return (
    <div>
      <h1>Display Results</h1>
      <p>Connections {props.result[0] } </p>
      <p>Settlements {props.result[1]} </p>
      
    </div>
  )

  


}

export default Display