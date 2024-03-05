const products = [
    { id: 100, title: "Eraser", price: 10 },
    { id: 101, title: "Pencil", price: 5 },
]

// products[0].title

const productNames = products.map(p => p.title); 
// const productNames = [ "Eraser", "Pencil" ]