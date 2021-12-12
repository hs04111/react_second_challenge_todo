import { atom, selector } from 'recoil';

export interface IToDo {
  text: string;
  id: number;
  category: 'TO_DO' | 'DOING' | 'DONE';
}

export const toDosState = atom<IToDo[]>({
  key: 'toDoList',
  default: [],
});

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDosState);
    return [
      toDos.filter((toDo) => toDo.category === 'TO_DO'),
      toDos.filter((toDo) => toDo.category === 'DOING'),
      toDos.filter((toDo) => toDo.category === 'DONE'),
    ];
  },
});
