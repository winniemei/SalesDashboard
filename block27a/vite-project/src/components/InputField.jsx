import { useRef } from 'react';

export default function InputField() {
    const inputRef = useRef(null);
    const handleClick = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    return(
        <>
        <input type="text" ref={inputRef}/>
        <button onClick={handleClick}>Clear</button>
        </>
    )
}
