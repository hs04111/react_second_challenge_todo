import { useForm } from 'react-hook-form';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { categoryState, toDosState } from '../atoms';
import { CustomForm } from './createCategory';

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
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
    <CustomForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('toDo', {
          required: 'To do를 입력 후 등록을 클릭하세요.',
        })}
        placeholder="오늘의 To do는?"
        type="text"
      />
      <button>등록</button>
      <span>{errors.toDo?.message}</span>
    </CustomForm>
  );
}

export default CreateToDo;
