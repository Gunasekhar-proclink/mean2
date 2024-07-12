// class name should be pascal case

// class Car {
//     constructor(name, engine, doors, wheels) {
//         // this.name -> member variable , instance variable
//         this.name = name;
//         this.engine = engine;
//         this.doors = doors;
//         this.wheels = wheels;
//     }
//     // (member/ instance)  funciton / method
//     sound() {
//         return "Vroom Vroom "
//     }
// }

// Blueprint of the object 
// this is pointing to the ferrari 
// But there is context pointing over here . But this is the work of new to point to the new context 


// const ferrari = new Car("Ferrari", "v8", 2, 4);
// const lambo = new Car("lambo", "v8", 2, 4)
// const ford = new Car("ford", "v12", 2, 4)
// const hyundai = new Car("hyundai", "v6", 4, 4)

// console.log(ferrari);
// console.log(lambo)
// console.log(ford)
// console.log(hyundai)

// calling a method 
// console.log(ferrari.sound())

// console.log(typeof (Car));
// type of class is function. 
// so whatever you can do it in class you can do it in function 

// -------------------------------------------------------------------

// Bank - Class 
// accNo 
// name 
// balance 

// class Bank {
//     static transactionCount = 1;
//     static interest = 0.03;
//     static accountCount = 0;

//     constructor(accNo, name, balance) {
//         (this.accNo = accNo), (this.name = name), (this.balance = balance);
//         this.transactions = [], Bank.accountCount++;
//     }

//     currencyFormat(amount) {
//         const formatter = new Intl.NumberFormat("en-IN", {
//             style: "currency",
//             currency: "INR",
//         });
//         return formatter.format(amount);
//     }

//     displayBalance() {
//         return `${this.name} your account balance is : ${this.currencyFormat(
//             this.balance
//         )}`;
//     }
//     updateTransactions(type, amount) {
//         this.transactions.push(this.transaction(type, amount));
//     }
//     withDraw(amt) {
//         if (amt > this.balance) return `decline`;
//         else {
//             this.balance = this.balance - amt;
//             this.updateTransactions("withdraw", amt);
//             return `${this.name} you account got debited ${this.currencyFormat(
//                 amt
//             )} 😭`;
//         }
//     }
//     depositAmount(amount) {
//         this.balance = amount + this.balance;
//         const data = `${this.name} , ${this.accNo}, ${this.balance}`;
//         this.updateTransactions("deposit", amount);
//         return `Your new balance is ${this.currencyFormat(this.balance)}`;
//     }
//     transaction(type, amount) {
//         const tId = Bank.transactionCount++;
//         return {
//             transactionId: tId,
//             name: this.name,
//             type: type,
//             amount: this.currencyFormat(amount),
//             balance: this.currencyFormat(this.balance),
//         };
//     }
//     printTransactions() {
//         console.log(this.transactions);
//     }

//     amountAfterIntrest() {
//         return this.balance += (this.balance * Bank.interest)
//     }

//     // Whenever we want to use static variables we use static methods
//     static accountCount() {
//         return Bank.accountCount;
//     }


// }



// const Nikhil = new Bank(1299, "Nikhil Raj Ganta", 1000);
// const Phani = new Bank(1305, "Phanidhar", 1000);
// const Guna = new Bank(1304, "Guna", 10_00_000);

// console.log(Nikhil);
// console.log(Phani);
// console.log(Guna);

// console.log(Guna.withDraw(1000))
// console.log(Guna.depositAmount(10))
// console.log(Guna.displayBalance())
// Guna.printTransactions();

// // Guna.transactions() -- Id , Name , Type(Deposite/Withdrawal) , Amount 
// // Should return array of objects 
// // Seprate array with objects along with increments each time 


// console.log(Guna.amountAfterIntrest())
// console.log(Bank.accountCount)

class CurrentAccount {
    static transactionCount = 1;
    static interest = 0.06;
    static accountCount = 0;

    constructor(accNo, name, balance) {
        (this.accNo = accNo), (this.name = name), (this.balance = balance);
        this.transactions = [];// Bank.accountCount++;
    }

    currencyFormat(amount) {
        const formatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        });
        return formatter.format(amount);
    }

    displayBalance() {
        return `${this.name} your account balance is : ${this.currencyFormat(
            this.balance
        )}`;
    }
    updateTransactions(type, amount) {
        this.transactions.push(this.transaction(type, amount));
    }

    withDraw(amt) {
        if (amt > this.balance) return `decline`;
        else {
            this.balance = (this.balance - (amt + 10));
            this.updateTransactions("withdraw", amt);
            return `${this.name} you account got debited ${this.currencyFormat(
                amt
            )} 😭`;
        }
    }
    depositAmount(amount) {
        this.balance = amount + this.balance;
        const data = `${this.name} , ${this.accNo}, ${this.balance}`;
        this.updateTransactions("deposit", amount);
        return `Your new balance is ${this.currencyFormat(this.balance)}`;
    }
    transaction(type, amount) {
        const tId = Bank.transactionCount++;
        return {
            transactionId: tId,
            name: this.name,
            type: type,
            amount: this.currencyFormat(amount),
            balance: this.currencyFormat(this.balance),
        };
    }
    printTransactions() {
        console.log(this.transactions);
    }

    amountAfterIntrest() {
        return this.balance += (this.balance * Bank.interest)
    }

    // Whenever we want to use static variables we use static methods
    // static accountCount() {
    //     return Bank.accountCount;
    // }
}


class SavingsAccount {
    static transactionCount = 1;
    static interest = 0.03;
    static accountCount = 0;

    constructor(accNo, name, balance) {
        (this.accNo = accNo), (this.name = name), (this.balance = balance);
        this.transactions = [];// Bank.accountCount++;
    }

    currencyFormat(amount) {
        const formatter = new Intl.NumberFormat("en-IN", {
            style: "currency",
            currency: "INR",
        });
        return formatter.format(amount);
    }

    displayBalance() {
        return `${this.name} your account balance is : ${this.currencyFormat(
            this.balance
        )}`;
    }
    updateTransactions(type, amount) {
        this.transactions.push(this.transaction(type, amount));
    }

    withDraw(amt) {
        if (amt > this.balance) return `decline`;
        else {
            this.balance = this.balance - amt;
            this.updateTransactions("withdraw", amt);
            return `${this.name} you account got debited ${this.currencyFormat(
                amt
            )} 😭`;
        }
    }
    depositAmount(amount) {
        this.balance = amount + this.balance;
        const data = `${this.name} , ${this.accNo}, ${this.balance}`;
        this.updateTransactions("deposit", amount);
        return `Your new balance is ${this.currencyFormat(this.balance)}`;
    }
    transaction(type, amount) {
        const tId = Bank.transactionCount++;
        return {
            transactionId: tId,
            name: this.name,
            type: type,
            amount: this.currencyFormat(amount),
            balance: this.currencyFormat(this.balance),
        };
    }
    printTransactions() {
        console.log(this.transactions);
    }

    amountAfterIntrest() {
        return this.balance += (this.balance * Bank.interest)
    }

    // Whenever we want to use static variables we use static methods
    // static accountCount() {
    //     return Bank.accountCount;
    // }
}

const nikhil = new CurrentAccount(1299, "Nikhil Raj Ganta", 1000);
const phani = new CurrentAccount(1305, "Phanidhar", 1000);
const guna = new CurrentAccount(1304, "Guna", 1000);

console.log(nikhil);
console.log(phani);
console.log(guna);

console.log(guna.CurrentAccount.displayBalance())
// console.log(guna.CurrentAccount.withDraw(10))
// console.log(guna.CurrentAccount.depositAmount(100))
// console.log(guna.CurrentAccount.printTransactions())
// console.log(guna.CurrentAccount.amountAfterIntrest())

const nithin = new SavingsAccount(1297, "Nitin Kumar", 2000);
const pavan = new SavingsAccount(1306, "Pavan", 3000)

console.log(nithin)
console.log(pavan)