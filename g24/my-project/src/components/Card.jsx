import desertImg from "../assets/desert.jpeg"
import { useState, useRef } from "react";

// extension: tailwind css intellisense
function Card({title, width, children, deleteCard}) {

    // let clicks = 0; 
    const [clicks, setClicks] = useState(0)
    const titleRef = useRef(null);
    
    function handleClick() {
        // clicks++; 
        setClicks(clicks + 1);
    }
    
    function deleteTitle() {
        const p = titleRef.current
        p.remove();
    }
    
    if (children) {
        return (
            <div className="inline-block border-4 border-red-400">
                { children }
            </div>
        )
    }
    
    return (
        <div className="inline-block border-4 border-red-400">
            <img 
                src={desertImg}
                width={width || 50}
            />
            <p ref={titleRef} className="text-red-600">
                {title}
            </p>
            <button 
            className="hover:bg-red-200" 
            onClick={handleClick}>
                CLICKS: {clicks}
            </button>

            <button 
            onClick={deleteTitle}
            className="hover:bg-green-300">
                Delete Title
            </button>

            <button 
            onClick={() => deleteCard(title)}
            className="hover:bg-green-300">
                Delete Card
            </button>

        </div>
    )
}
export default Card; 