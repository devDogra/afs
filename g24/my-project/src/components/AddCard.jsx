import { useRef } from "react";

export default function AddCard({ addCard }) {
    const inputRef = useRef(null);
    

    return (
        <>
            <input ref={inputRef} placeholder="enter title"></input>
            <button className="hover:underline" 
            onClick={() => {
                const title = inputRef.current.value
                addCard(title); 
            }}>
                Add Card
            </button>
        </>
    );
}