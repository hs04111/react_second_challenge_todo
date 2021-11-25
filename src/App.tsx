import React, { useState } from "react";

function App() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {currentTarget:{value}} = event;
    setValue(value)
  }
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Hello, ${value}`)
  }

  return (
<form onSubmit={onSubmit}>
<input type="text" placeholder="Username" onChange={onChange} value={value} />
<button>Log In</button>
</form>
  );
}

export default App;