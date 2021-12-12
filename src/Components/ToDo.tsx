import React from 'react';
import { useSetRecoilState } from 'recoil';
import { Categories, IToDo, toDosState } from '../atoms';

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDosState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const newToDo = {
        text,
        id,
        category: name as any,
      };
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  const onDeleteClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    setToDos((oldToDos) => {
      return oldToDos.filter(
        (toDo) => toDo.id !== Number(event.currentTarget.id),
      );
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && (
        <button name={Categories.DOING} onClick={onClick}>
          Doing
        </button>
      )}
      {category !== Categories.TO_DO && (
        <button name={Categories.TO_DO} onClick={onClick}>
          To Do
        </button>
      )}
      {category !== Categories.DONE && (
        <button name={Categories.DONE} onClick={onClick}>
          Done
        </button>
      )}
      <span onClick={onDeleteClick} id={`${id}`}>
        ❌
      </span>
    </li>
  );
}

export default ToDo;
