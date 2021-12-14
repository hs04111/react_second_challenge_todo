import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import styled from 'styled-components';
import {
  Categories,
  categoryState,
  customCategoriesState,
  toDoSelector,
  toDosState,
} from '../atoms';
import CreateCategory from './createCategory';
import CreateToDo from './CreateToDo';
import ToDo from './ToDo';

const TODO_KEY = 'toDos';

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  select {
    margin-top: 15px;
    width: 30%;
    background: transparent;
    color: ${(props) => props.theme.textColor};
    font-size: 20px;
    border: 2px solid ${(props) => props.theme.textColor};
    border-radius: 5px;
    option {
      background-color: ${(props) => props.theme.bgColor};
    }
  }
  ul {
    width: 100%;
    margin: 30px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  footer {
    width: 100%;
    text-align: center;
    position: fixed;
    bottom: 0px;
    padding: 5px 0px;
    background-color: ${(props) => props.theme.bgColor};
    border-top: 0.5px solid ${(props) => props.theme.textColor};
  }
`;

const Title = styled.h1`
  width: 95%;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
  padding: 14px;
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
`;

const Subtitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 50px;
`;

function ToDoList() {
  const rawToDos = useRecoilValue(toDosState);
  const toDos = useRecoilValue(toDoSelector);
  const [category, setCategory] = useRecoilState(categoryState);
  const customCategories = useRecoilValue(customCategoriesState);

  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    setCategory(event.currentTarget.value as any);
  };

  useEffect(() => {
    localStorage.setItem(TODO_KEY, JSON.stringify(rawToDos));
  }, [rawToDos]);

  return (
    <Container>
      <Title>오늘의 To Do</Title>
      <Subtitle>카테고리를 선택하세요</Subtitle>
      <select value={category} onInput={onInput}>
        <option value={Categories.TO_DO}>To Do</option>
        <option value={Categories.DOING}>Doing</option>
        <option value={Categories.DONE}>Done</option>
        {customCategories !== [] &&
          customCategories.map((customCategory, idx) => (
            <option value={customCategory} key={idx}>
              {customCategory}
            </option>
          ))}
      </select>
      <Subtitle>새 카테고리를 생성할 수 있습니다</Subtitle>
      <CreateCategory />
      <Subtitle>To do를 입력하세요</Subtitle>
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
        ))}
      </ul>
      <footer>Blueschist, NomadCoders</footer>
    </Container>
  );
}

export default ToDoList;
