import './App.css'
import { useState } from 'react';
import { TextInput } from './components/TextInput';

function App() {
  // const [name, setName] = useState('');
  const [error, setError] = useState(false);
  

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
  //}
  return (
    <>
      
      <TextInput 
      inputType="text" 
      label="Name" 
      value=""
      entryName="name"
      isError={error}
      // onChange={nameHandler()}
      placeholder="Please enter your Name."
      isDisabled={false}
      />
    </>
  )
}

export default App
