import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Categories, categoryState, toDoSelector, toDosState } from '../atoms';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const TODO_KEY = 'toDos';

function ToDoList() {
  const rawToDos = useRecoilValue(toDosState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(rawToDos));
  }, [rawToDos]);

  return (
    <div>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
      </select>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      {toDos.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}

export default ToDoList;
