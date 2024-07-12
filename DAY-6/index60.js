
const fullName2 = () => {
    return `${this.lastName} , ${this.firstName}`;
};

const student5 = {
    firstName: "Aisha",
    lastName: "polla",
}

console.log(fullName2.call(student5))
console.log(fullName2.apply(student5))


//

const fullName3 = () => {
    return `${this.lastName}, ${this.firstName}`;
};

const student6 = {
    firstName: "Aisha",
    lastName: "polla",
};

console.log(fullName3.call(student6));
console.log(fullName3.apply(student6));


// 

const fullName4 = function () {
    return `${this.lastName}, ${this.firstName}`;
};

const student7 = {
    firstName: "Aisha",
    lastName: "polla",
};

const boundFullName2 = fullName4.bind(student7);
console.log(boundFullName2());


// 1 => => 
// 2 () () 
// 3 => () 

// recommended

// () => 