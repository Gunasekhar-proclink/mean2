// class name should be pascal case

class Car {
    constructor(name, engine, doors, wheels) {
        // this.name -> member variable , instance variable
        this.name = name;
        this.engine = engine;
        this.doors = doors;
        this.wheels = wheels;
    }
    // (member/ instance)  funciton / method
    sound() {
        return "Vroom Vroom "
    }
}

// Blueprint of the object 
// this is pointing to the ferrari 
// But there is context pointing over here . But this is the work of new to point to the new context 


const ferrari = new Car("Ferrari", "v8", 2, 4);
const lambo = new Car("lambo", "v8", 2, 4)
const ford = new Car("ford", "v12", 2, 4)
const hyundai = new Car("hyundai", "v6", 4, 4)

console.log(ferrari);
console.log(lambo)
console.log(ford)
console.log(hyundai)

// calling a method 
console.log(ferrari.sound())

console.log(typeof (Car));
// type of class is function. 
// so whatever you can do it in class you can do it in function 

// -------------------------------------------------------------------

// Bank - Class 
// accNo 
// name 
// balance 

class Bank {
    constructor(AccNo, Name, Balance) {
        this.AccNo = AccNo;
        this.Name = Name;
        this.Balance = Balance;
    }
}


const Nikhil = new Bank(1299, "Nikhil Raj Ganta", 1000);
const Phani = new Bank(1305, "Phanidhar", 1000);
const Guna = new Bank(1304, "Guna", 1000);

console.log(Nikhil);
console.log(Phani);
console.log(Guna);



