import { useState, useRef } from "react";
import CardImg from "../assets/desert.jpeg"

function Card({title,width, children, deleteCard}){
    // let clicks = 0; 
    const [clicks, setClicks] = useState(0)
    const titleRef = useRef(null)
    //  titleRef -----> null 
    // titleRef -----> <p>title</p>
    function handleClick() {
        // clicks++; 
        setClicks(clicks + 1)
    }

    function deleteTitle() {
        const p = titleRef.current;
        p.remove(); 
    }

    if (children) {
        return (
            <div className="inline-block border-4 border-red-300">
                { children }
            </div>
        )
    }
    
    return(
        <div className="inline-block border-4 border-red-300">
            <img 
                src={CardImg} 
                width={ width || 100} 
              />
            <p ref={titleRef}>{title}</p>
            <button 
                className="bg-green-300 hover:bg-green-600"
                onClick={handleClick}
            >
                CLICKS: { clicks }
            </button>

            <button
                className="bg-red-300 hover:bg-blue-300"
                onClick={deleteTitle}
            >
                Delete Title
            </button>
            <button
                className="bg-red-300 hover:bg-blue-300"
                onClick={() => {
                    deleteCard(title); 
                }}
            >
                Delete Card
            </button>
        </div>
    )
}

export default Card;
