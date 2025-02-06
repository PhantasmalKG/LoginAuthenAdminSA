import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    title?: string;
    loading?: boolean
    disabled?: boolean;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({title, loading, disabled, onClick}) => {
    return(
        <button disabled={disabled} onClick={onClick}>
            {loading ? 'Loading...' : title}
        </button>
    );
};

export default Button;