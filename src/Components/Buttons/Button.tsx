import { FunctionComponent } from 'react';
import './style.css'

interface ButtonProps {
    text: string,
    addClass?: string,
    clicked: Function
}

const Button: FunctionComponent<ButtonProps> = ({ text, addClass, clicked }) => {
    return (
        <button onClick={() => clicked()} className={`transition duration-300 ease-in-out relative button flex overflow-hidden rounded-md md:px-7 sm:px-2 ${addClass} focus:outline-none`}>
            <p className="z-10"> {text}</p>
        </button>
    );
}

export default Button;