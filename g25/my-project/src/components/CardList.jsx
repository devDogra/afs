import Card from "./Card"

export default function CardList({ names, deleteCard}) {
    return (
        <div>
            {
                names.map(p => {
                return (
                    <Card key={p} title={p}
                    deleteCard={deleteCard}
                    />
                )
                })
            }
        </div>
    )
}