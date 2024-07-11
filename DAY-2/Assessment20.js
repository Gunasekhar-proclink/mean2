// optional Chaining 
//  null coaliation --- ?? , null ---> undefined
//  || - 8 values as falsy 

// object shorthand 
// No of lines == no of statements 

// EX-1

const person1 = {
    name: {
        first: "Alice",
        last: "Johnson",
    },
    age: 28,
    favoriteColors: ["blue", "green"],
};

let getPersonInfo = ({ name: { first: firstname, last: lastname }, age: personAge, favoriteColors: [primaryColor, secondaryColor] }) => {
    return `${firstname} ${lastname} is ${personAge} years old. Her favorite colors are ${primaryColor} and ${secondaryColor}.`;
}

console.log(getPersonInfo(person1));


// Ex2:
function createBook(title, author, year) {
    return {
        title: title,
        author: author,
        year: year,
        getSummary: function () {
            return `${title} by ${author}, published in ${year}.`;
        },
    };
}

const book = createBook("1984", "George Orwell", 1949);
console.log(book.getSummary(), book);


// Ex3:
const users = [
    {
        id: 1,
        name: "Alice",
        profile: {
            age: 25,
            address: {
                city: "Wonderland",
                zip: "12345",
            },
        },
    },
    {
        id: 2,
        name: "Bob",
    },
];

function displayUserProfile(userId) {
    const user = users.find((u) => u.id === userId);

    if (!user) {
        console.log(`User with ID ${userId} not found.`);
        return;
    }

    const age = user.profile?.age;
    const city = user.profile?.address?.city;

    if (age === undefined || city === undefined) {
        console.log(`Unable to display profile for user ${user.name}.`);
        return;
    }

    console.log(`User ${user.name} is ${age} years old and lives in ${city}.`);
}

displayUserProfile(1); // Output: User Alice is 25 years old and lives in Wonderland.
displayUserProfile(2); // Output: Unable to display profile for user Bob.
displayUserProfile(3); // Output: User with ID 3 not found.

// Ex 4
const library = [
    { title: "The Great Gatsby", authors: ["F. Scott Fitzgerald"], borrowed: true, },
    { title: "To Kill a Mockingbird", authors: ["Harper Lee"], borrowed: true },
    { title: "1984", authors: ["George Orwell"], borrowed: true },
    { title: "The Hobbit", authors: ["J.R.R. Tolkien"], borrowed: true },
    { title: "Brave New World", authors: ["Aldous Huxley"], borrowed: true },
];

// Task 4.1: Determine if all books in the library have been borrowed.

if (library.filter(i => i.borrowed = 'false')) {
    console.log('Not borrowed')
}
else {
    console.log('All books are borrowed')
}

// Task 4.2: Determine if there are books in the library written by multiple authors

// Output
// "No, there are no multiple authors"


const person2 = []

if (library.filter(i => i.authors[0] in person2)) {
    console.log('multiple actor')
}

else {
    person1.push(library.authors)
}




const max = [10, 1, 7, 3, 5,].reduce((acc, curr) => {
    if (curr > acc) {
        return curr
    }
    else {
        return acc
    }
})

console.log(max)


const max1 = [10, 1, 7, 3, 5].reduce((acc, curr) => acc + curr, [])
console.log(max1)