import CardImg from "../assets/desert.jpeg"

function Card({title,width, children}){
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
                alt="card"
                width={ width || 100} 
                height="150"
              />
            <p>{title}</p>
        </div>
    )
}

export default Card;
