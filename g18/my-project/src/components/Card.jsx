import CardImg from "../assets/desert.jpeg"

function Card({ title, width, children }) {

    // if (children) {
    //     return (
    //         <div className=" inline-block  border-4 border-red-600">
    //             { children }
    //         </div>
    //     )
    // }

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
                    <p> { title } </p>
                </>
                )
            }
            <button className="bg-green-300 ">
                CLICK ME 
            </button>
        </div>
    )
}

export default Card; 
// tailwind css intellisense
