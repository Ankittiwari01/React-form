import React, { useState } from 'react';
//import './App.css';
import './Form.css';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  function handleSubmit(event) {
    event.preventDefault(); 
  }

  function handleSubmit(event) {
    event.preventDefault(); 
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
  
   
    const formData = { name, age, email, password };
    console.log(formData);

    alert("Form submitted successfully!");
  }
  return (
    
    <form className='form' onSubmit={handleSubmit}>
    <label className='form'>
      Name:
      <input className='form' type="text" value={name} onChange={(event) => setName(event.target.value)} />
    </label>
    <label className='form'>
      Age:
      <input className='form' type="number" value={age} onChange={(event) => setAge(event.target.value)} />
    </label>
    <label className='form'>
      Email:
      <input className='form' type="email" value={email} onChange={(event) => setEmail(event.target.value)} />
    </label>
    <label className='form'>
      Password:
      <input className='form' type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
    </label>
    <label className='form'>
      Confirm Password:
      <input className='form' type="password" value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)} />
    </label>
    <button className='form' type="submit">Submit</button>
  </form>
    
  );
}



export default App;
