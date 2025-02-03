import { FC } from 'react'

interface TextInputProps{
    label: string; //Label of the input component
    type: string;
    value: string; //The value of the input component
    placeholder: string; //Predefined message
    onChange: (value: string) => void;
    

}

export const TextInput: FC<TextInputProps> = ({
  label,
  type,
  value,
  placeholder,
  onChange,
  }) => {
  return (
    <div className="wrapper">
        <label htmlFor={label} className='block text-sm font-medium text-gray-700 mb-2'>{label}</label>
        <input 
        type={type}
        id ={label}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        
        />
        {/* {isError && <p className="isError">Error: Entry field for ${label} is not filled!</p>} */}
    </div>
  )
}