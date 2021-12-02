import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// function ToDoList() {
//   const [toDo, setToDo] = useState('');

//   const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setToDo(e.currentTarget.value);
//   };

//   const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(toDo);
//   };

//   return (
// <div>
//   <form onSubmit={onSubmit}>
//     <input
//       value={toDo}
//       onChange={onChange}
//       placeholder="Write a ToDo"
//       type="text"
//     />
//     <button>Submit</button>
//   </form>
// </div>
//   );
// }

interface IForm {
  Email: string;
  toDo: string;
  FirstName: string;
  LastName?: string;
  Password: string;
  PasswordConfirm: string;
  extraErr?: string;
}

function ToDoList() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      Email: '@naver.com',
    },
  });
  const onValid = (data: IForm) => {
    if (data.Password !== data.PasswordConfirm) {
      setError(
        'PasswordConfirm',
        { message: 'Passwords are not the same' },
        { shouldFocus: true },
      );
    }
  };
  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={handleSubmit(onValid)}
      >
        <input
          {...register('Email', {
            required: 'Email required',
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@naver.com$/,
              message: 'Only naver mail',
            },
          })}
          placeholder="Email"
          type="text"
        />
        <span>{errors?.Email?.message}</span>
        <input
          {...register('toDo', {
            required: 'ToDo is required',
            minLength: {
              value: 5,
              message: 'Your ToDo is too short.',
            },
          })}
          placeholder="Write a ToDo"
          type="text"
        />
        <span>{errors?.toDo?.message}</span>
        <input
          {...register('FirstName', {
            required: 'Write here',
            minLength: {
              value: 3,
              message: 'Min length 3',
            },
            validate: {
              noNico: (value) =>
                value.includes('nico') ? 'no nico allowed' : true,
              noNick: (value) =>
                value.includes('nick') ? 'no nick allowed' : true,
            },
          })}
          placeholder="FirstName"
          type="text"
        />
        <span>{errors?.FirstName?.message}</span>
        <input
          {...register('LastName', {
            minLength: {
              value: 3,
              message: 'Min length 3',
            },
          })}
          placeholder="LastName"
          type="text"
        />
        <span>{errors?.LastName?.message}</span>

        <input
          {...register('Password', {
            minLength: {
              value: 3,
              message: 'Min length 3',
            },
          })}
          placeholder="Password"
          type="password"
        />
        <span>{errors?.Password?.message}</span>

        <input
          {...register('PasswordConfirm', {
            minLength: {
              value: 3,
              message: 'Min length 3',
            },
          })}
          placeholder="PasswordConfirm"
          type="password"
        />
        <span>{errors?.PasswordConfirm?.message}</span>
        <span>{errors?.extraErr?.message}</span>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ToDoList;
