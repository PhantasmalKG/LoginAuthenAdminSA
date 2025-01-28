import { ChangeEvent, FC } from 'react'

interface TextInputProps{
    inputType: 'text' | 'number' | 'email' | 'password'; //Different types of input
    label: string; //Label of the input component
    value: string | number; //The value of the input component
    placeholder: string; //Predefined message
    entryName: string; //Form data entry name
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    isDisabled: boolean; //Input is disabled or not.
    isError: boolean; //Error Handling

}

export const TextInput: FC<TextInputProps> = ({
  inputType,
  label,
  value,
  entryName,
  placeholder,
  onChange,
  isDisabled,
  isError
  }) => {
  return (
    <div className="wrapper">
        <label htmlFor={label}>{label}</label>
        <input 
        type={inputType}
        id ={label}
        value={value}
        name={entryName}
        placeholder={placeholder}
        onChange={onChange}
        disabled={isDisabled}
        />
        {isError && <p className="isError">Error: Entry field for ${label} is not filled!</p>}
    </div>
  )
}