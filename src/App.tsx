import './App.css'
import Login from './Login'

// import {ChangeEvent, useState } from 'react';
import { TextInput } from './components/TextInput';

function App() {
  
  // const [name, setName] = useState('');
  // const [error, setError] = useState(false);
  

  // const nameHandler =(e: ChangeEvent<HTMLInputElement>) => {
  //   setName(e.target.value)
  // }
  // const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()

  //   if(!name.trim()){
  //     setError(true)
  //   } else {
  //     setError(false);
  //   }
  // }
  return (
    <div className='absolute top-0 right-0 w-screen h-screen bg-black'>
    <Login />
    
      
      <TextInput 
      inputType="text" 
      label="Name" 
      value={name}
      name="name"
      isError={error}
      onChange={nameHandler()}
      placeholder="Please enter your Name."
      isDisabled={false}
      />
    </div>
  )
}

export default App
