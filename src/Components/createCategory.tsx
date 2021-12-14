import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilState, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { categoryState, customCategoriesState } from '../atoms';

const CATEGORIES_KEY = 'additional_categories';

interface IForm {
  customCategory: string;
}

export const CustomForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  input {
    margin-top: 15px;
    width: 60%;
    background: transparent;
    color: ${(props) => props.theme.textColor};
    font-size: 16px;
    border: none;
    text-align: center;
  }
  button {
    margin-top: 15px;
    background: transparent;
    color: ${(props) => props.theme.textColor};
    font-size: 20px;
    border: 3px solid ${(props) => props.theme.textColor};
    border-radius: 5px;
  }
  span {
    margin-top: 8px;
  }
`;

function CreateCategory() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IForm>();
  const [customCategories, setCustomCategories] = useRecoilState(
    customCategoriesState,
  );
  const setCategory = useSetRecoilState(categoryState);

  const handleValid = ({ customCategory }: IForm) => {
    setValue('customCategory', '');
    setCategory(customCategory as any);
    setCustomCategories((oldCategories) => {
      return [...oldCategories, customCategory];
    });
  };

  useEffect(() => {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(customCategories));
  }, [customCategories]);

  return (
    <CustomForm onSubmit={handleSubmit(handleValid)}>
      <input
        {...register('customCategory', {
          required: '카테고리를 입력 후 생성을 클릭하세요.',
        })}
        placeholder="여기에 새 카테고리를 쓰세요"
        type="text"
      />
      <button>생성</button>
      <span>{errors.customCategory?.message}</span>
    </CustomForm>
  );
}

export default CreateCategory;
