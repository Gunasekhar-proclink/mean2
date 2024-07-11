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
    numformatter(amt1) {
        const formatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        });
        const formattedNumber = formatter.format(amt1);
        return formattedNumber
    }
    displayBalance() {
        return `${this.Name} you have ${this.numformatter(this.Balance)}`;
    }
    //Withdraw Balance 
    //withdraw if amt is less than balance 
    //Display if amt is greater than balance 
    //should reflect in displayBalance 
    withdrawBal(amt) {
        return this.Balance > amt ? (this.Balance -= amt, `Successfully withdrawed ${this.numformatter(amt)}`) : "Sorry Your Balance is lower";
    }

    depositeBal(amt) {
        this.Balance += amt;
        return `Successfully Deposited ${this.numformatter(amt)}`
    }
}

const Nikhil = new Bank(1299, "Nikhil Raj Ganta", 1000);
const Phani = new Bank(1305, "Phanidhar", 1000);
const Guna = new Bank(1304, "Guna", 10_00_000);

console.log(Nikhil);
console.log(Phani);
console.log(Guna);

console.log(Guna.displayBalance())
console.log(Guna.withdrawBal(1000))
console.log(Guna.displayBalance())
console.log(Guna.depositeBal(10))
console.log(Guna.displayBalance())



