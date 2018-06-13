import React from 'react';
import {Title} from "./Title.js"
import Todo from "./Todo.js"

const TodoList = props => {
    console.log(props.title);
    return (
      <div>
        <Title name={props.title} />
        <ul>
          {props.todos.map((todo, i) => {
            return <Todo key={i} todo={todo} />;
          })}
        </ul>
      </div>
    );
  };
  
  export default TodoList 