import { atom, selector } from 'recoil';

const TODO_KEY = 'toDos';

export enum Categories {
  'TO_DO' = 'TO_DO',
  'DOING' = 'DOING',
  'DONE' = 'DONE',
}

export interface IToDo {
  text: string;
  id: number;
  category: Categories;
}

export const categoryState = atom<Categories>({
  key: 'category',
  default: Categories.TO_DO,
});

export const toDosState = atom<IToDo[]>({
  key: 'toDoList',
  default: JSON.parse(localStorage.getItem(TODO_KEY) || '[]'),
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDosState);
    const category = get(categoryState);
    return toDos.filter((toDo) => toDo.category === category);
  },
});
