Car.prototype.drive = function() {
    console.log("Driving at " + this.speed); 
}

function Car(color, speed) {
    this.color = color; 
    this.speed = speed; 
    
}

const car = new Car("red", 100); 
car.drive(); 