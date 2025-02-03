import { useState } from "react";
import { TextInput } from "./TextInput";

interface FormProps {
    name: string;
    email: string;
    password: string;
}

const Form:React.FC = () => {
    const [parameters, setParameters] = useState<FormProps>({name:'', email:'', password:''});

    return(
        <form onSubmit={}></form>
    );

};

export default Form; 