// const parent = {
//     b: 3,
//     c: 4,
// }

// const child = {
//     a: 1,
//     b: 2,
//     __proto__: parent,
// }

// console.log(child.b); 
const person = {
    name: "Dev",
    speak: function() {
        console.log("HI"); 
    }
}
// person.speak(); 

const boxPrototype = {
    getWeight: function() {
        console.log(weight);
    }
}

// function Box(weight) {
//     const box = {}
//     box.weight = weight;
//     box.__proto__ = boxPrototype;
//     return box;
// }
function Box(weight) {
    this.weight = weight; 
}

Box.prototype.getWeight = function() {
    return this.weight; 
}

const boxes = [
    new Box(100),
    new Box(300),
    new Box(200), 
]
// boxes[0].__proto__ = boxPrototype

console.log(boxes); 


// child.__proto__.c = 100; 

// // console.log(child.c); 
// console.log(c); 