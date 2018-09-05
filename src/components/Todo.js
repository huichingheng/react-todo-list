import React from 'react';

const Todo = props => {
    // console.log("props in todo ", props);
    return <li>{props.todo}</li>;
  };
  
  export default Todo