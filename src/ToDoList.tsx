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

function ToDoList() {
  const { register, handleSubmit, formState } = useForm();
  const onValid = (data: any) => {
    console.log(data);
  };
  console.log(formState.errors);
  return (
    <div>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          {...register('toTo', {
            required: 'ToDo is required',
            minLength: {
              value: 5,
              message: 'Your ToDo is too short.',
            },
          })}
          placeholder="Write a ToDo"
          type="text"
        />
        <input {...register('FirstName')} placeholder="FirstName" type="text" />
        <input {...register('LastName')} placeholder="LastName" type="text" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default ToDoList;
