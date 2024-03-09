import CardImg from "../assets/desert.jpeg"
import { useState, useRef } from "react";

function Card({ title, width, children, deleteCard }) {

    // if (children) {
    //     return (
    //         <div className=" inline-block  border-4 border-red-600">
    //             { children }
    //         </div>
    //     )
    // }

    // let count = 0; 
    const [count, setCount] = useState(0)
    const titleRef = useRef(null); 


    function handleClick() {
        // count++; 
        setCount(count + 1)
    }

    function deleteTitle() {
        const p = titleRef.current
        p.remove(); 
    }

    return (
        <div className=" inline-block  border-4 border-red-600">
           { 
            children || (
                <>
                    <img 
                        className="aspect-square"
                        width={width || 100}
                        src={CardImg}
                    />
                    <p ref={titleRef}> { title } </p>
                </>
                )
            }
            <button onClick={handleClick} className="bg-green-300 hover:bg-red-300">
                CLICKS {count}
            </button>
            <button onClick={deleteTitle} className="bg-green-300 hover:bg-blue-300">
                Delete title 
            </button>

            <button onClick={() => {
                deleteCard(title); 
            }} className="bg-green-300 hover:bg-blue-300">
                Delete Card
            </button>
        </div>
    )
}

export default Card; 
// tailwind css intellisense
