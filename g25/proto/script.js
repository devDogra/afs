// const parent = {
//     b: 3,
//     c: 4,
// }

// const child = {
//     a: 1,
//     b: 2,
//     __proto__: parent,
// }
// // child.__proto__  = parent; 
// // child.age = 100
// const person = {
//     name: "Dev",
//     speak: function() {
//         console.log("HI"); 
//     }
// }
// person.speak(); 

const boxPrototype = {
    getWeight: function() {
        console.log(weight); 
    }
}

// function Box(weight) {
//     let box = {}
//     box.weight = weight; 
//     box.__proto__ = boxPrototype;
//     return box;  
// }

Box.prototype.getWeight = function() {
    return this.weight; 
}
function Box(weight) {
    // let box = {}
    // this = box;
    // 3 
    this.weight = weight; 
    // return box; 
}

const boxes = [
    new Box(100),
    new Box(300),
    new Box(200),
]