import React from 'react';
import { useRecoilValue } from 'recoil';
import { toDoSelector, toDosState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

function ToDoList() {
  const [toDo, doing, done] = useRecoilValue(toDoSelector);

  return (
    <div>
      <CreateToDo />
      <h1>To do</h1>
      <ul>
        {toDo.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h1>Doing</h1>
      <ul>
        {doing.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
      <h1>Done</h1>
      <ul>
        {done.map((todo) => (
          <ToDo key={todo.id} {...todo} />
        ))}
      </ul>
      <hr />
    </div>
  );
}

export default ToDoList;
