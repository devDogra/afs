import desertImg from "../assets/desert.jpeg"

// extension: tailwind css intellisense
function Card({title, width}) {
    return (
        <div className="inline-block border-4 border-red-400">
            <img 
                // src="src/assets/desert.jpeg" 
                src={desertImg}
                width={width || 50}
            />
            <p className="text-red-600">
                {title}
            </p>
        </div>
    )
}
export default Card; 