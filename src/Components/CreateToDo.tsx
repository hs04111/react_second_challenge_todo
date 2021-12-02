import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDosState } from '../atoms';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const setToDos = useSetRecoilState(toDosState);
  const handleValid = ({ toDo }: IForm) => {
    setValue('toDo', '');
    setToDos((oldToDos) => [
      { text: toDo, id: Date.now(), category: 'TO_DO' },
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
