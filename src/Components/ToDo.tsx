import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { Categories, customCategoriesState, IToDo, toDosState } from '../atoms';

const ToDoLi = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 8px;
  border: 2px solid ${(props) => props.theme.textColor};
  border-radius: 5px;
  padding: 10px;
`;

const ToDoText = styled.span`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 20px auto;
`;

const CategoriesBtn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  button {
    margin: 0 5px;
    margin-top: 10px;
    background: transparent;
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    border: 1px solid ${(props) => props.theme.textColor};
    border-radius: 5px;
  }
`;

const DeleteBtn = styled.button`
  margin-top: 25px;
  background: transparent;
  color: ${(props) => props.theme.textColor};
  font-size: 20px;
  border: 3px solid ${(props) => props.theme.textColor};
  border-radius: 5px;
`;

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDosState);
  const customCategories = useRecoilValue(customCategoriesState);

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

  const onDeleteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setToDos((oldToDos) => {
      return oldToDos.filter(
        (toDo) => toDo.id !== Number(event.currentTarget.id),
      );
    });
  };

  return (
    <ToDoLi>
      <ToDoText>{text}</ToDoText>
      <CategoriesBtn>
        <span>카테고리 이동:</span>
        <div>
          {category !== Categories.TO_DO && (
            <button name={Categories.TO_DO} onClick={onClick}>
              To Do
            </button>
          )}
          {category !== Categories.DOING && (
            <button name={Categories.DOING} onClick={onClick}>
              Doing
            </button>
          )}
          {category !== Categories.DONE && (
            <button name={Categories.DONE} onClick={onClick}>
              Done
            </button>
          )}
          {customCategories !== [] &&
            customCategories.map((customCategory, idx) => {
              if (customCategory !== category) {
                return (
                  <button name={customCategory} onClick={onClick} key={idx}>
                    {customCategory}
                  </button>
                );
              }
            })}
        </div>
      </CategoriesBtn>
      <DeleteBtn onClick={onDeleteClick} id={`${id}`}>
        To do 지우기
      </DeleteBtn>
    </ToDoLi>
  );
}

export default ToDo;
