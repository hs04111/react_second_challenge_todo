import { useForm } from 'react-hook-form';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { json } from 'stream/consumers';
import { categoryState, toDosState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDosState);
  const category = useRecoilValue(categoryState);
  const handleValid = ({ toDo }: IForm) => {
    setValue('toDo', '');
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category },
      ...oldToDos,
    ]);
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', { required: 'Please write a to do' })}
        placeholder="Write a ToDo"
        type="text"
      />
      <button>Submit</button>;
    </form>
  );
}

export default CreateToDo;
