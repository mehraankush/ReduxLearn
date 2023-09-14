import { useState } from "react";


export default function Input() {
    const [input, setInput] = useState("");
    

    const onChange = (event
    ) => {
        setInput(event.target.value);
    }
    
    return <>
        <input onChange={onChange}/>
        <div>{input}</div>
    </>;
}