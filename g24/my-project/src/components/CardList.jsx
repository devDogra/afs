import Card from "./Card"

export default function CardList({ cards, deleteCard }) {
    return (
    <div>
        {
          cards.map(el => {
            return (
              <Card 
                key={el.id} 
                title={el.title} 
                width={el.width}
                deleteCard={deleteCard}
              >
              </Card>
            )
          })
        }
      </div>
    )
}