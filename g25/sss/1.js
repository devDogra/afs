
// console.log(this); 

function speak() {
    console.log(this.name); 
} 


// speak()
speak.call(person, arg1, arg2..)

const person = {
    name: "Dev", 
    speak,
}

person.speak(); 