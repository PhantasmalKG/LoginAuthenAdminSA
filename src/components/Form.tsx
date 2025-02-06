export type FormProps = {
   onSubmit: () => void,
   children?: React.ReactNode,
}

const Form:React.FC<FormProps> = ({onSubmit, children}) => 
(
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(); }}>
         {children}
    </form>
);

export default Form; 