import * as React from 'react'
import * as ReactDOM from 'react-dom'

const Greetings = (props) => {
  console.log(props);
   return (
   <div>
      <h1>{props.message}</h1>
   </div>
   )
};

export default Greetings;