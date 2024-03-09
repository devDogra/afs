import React from 'react'
import Card from './Card'

export default function CardList({names, deleteCard}) {
  return (
    <div>
        {
            names.map(name => {
            return <Card 
                title={name} 
                width={100} 
                key={name} 
                deleteCard={deleteCard}
            />
            })
        }
    </div>
  )
}
