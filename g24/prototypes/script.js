// const parent = {
//     b: 3,
//     c: 4,
// }

// const child = {
//     a: 1,
//     b: 2,
//     __proto__: parent,
// }

// child.__proto__ = parent; 

// const person = {
//     name: "Dev",
//     speak: function() {
//         console.log("Hi"); 
//     }
// }
// 
const boxPrototype = {
    getWeight: function() { return weight; }
}

// function Box(weight) {
//     const box = {};
//     box.weight = weight; 
    // box.__proto__ = boxPrototype;
//     return box; 
// }

Box.prototype.getWeight = function() {
    return this.weight; 
}

function Box(weight) {
    // let obj = {}
    // this =obj
    // 3RD STEP
    this.weight = weight; 
    // return obj
}

const boxes = [
    new Box(100),
    new Box(300),
    new Box(200),
]






