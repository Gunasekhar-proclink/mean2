// Q1. Implement getUserAge function

const userData = {
    user: {
        profile: {
            name: "Alice",
            age: null,
        },
    },
};

function getUserAge(userData) {
    const checkAge = userData?.user?.profile?.age ?? "Age not provided";
    return checkAge;
}

console.log(getUserAge(userData)); // Should print: Age not provided
console.log(getUserAge({ user: { profile: { age: 25 } } })); // Should print: 25
console.log(getUserAge({ user: {} })); // Should print: Age not provided


// Q2. Write a function that returns a new array with an additional skill for each employee

const employees = [
    { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React"] },
    { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication"] },
    { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision"] },
];


function addSkill(employees, newSkill) {
    return employees.map(employee => ({
        ...employee,
        skills: [...employee.skills, newSkill]
    }));
}

console.log(addSkill(employees, "Problem Solving"));

[
    { id: 1, name: "Alice", position: "Developer", skills: ["JavaScript", "React", "Problem Solving"] },
    { id: 2, name: "Bob", position: "Manager", skills: ["Leadership", "Communication", "Problem Solving"] },
    { id: 3, name: "Charlie", position: "CEO", skills: ["Strategy", "Vision", "Problem Solving"] }
]


// Q3. Find the total price of all products using arrow functions and array methods - Implement getTotalPrice
const products = [
    { id: 1, name: "Laptop", price: 1000 },
    { id: 2, name: "Phone", price: 500 },
    { id: 3, name: "Tablet", price: 700 },
];
const getTotalPrice = products.reduce((total, product) => total + product.price, 0);
console.log(getTotalPrice);

// Q4: Write a function that extracts the user's name and theme, providing default values if they are missing
const userProfile = {
    id: 1,
    name: "Eve",
    settings: {
        theme: "dark",
    },
};

function getUserSettings(userProfile) {
    const { id, name, settings } = userProfile;
    return `${name ?? "user"} prefers the ${settings?.theme ?? "light"} theme`;
}

function getUserSettings1(userProfile) {
    const { id, name = 'user', settings = { theme: "light" } } = userProfile;
    return `${name} prefers the ${settings.theme} theme `;
}

console.log(getUserSettings1(userProfile)); // Should print: Eve prefers the dark theme
console.log(getUserSettings1({ id: 2, name: "Adam" })); // Should print: Adam prefers the light theme


// Q5: Write a function that takes a user object and returns a message indicating if the user is active or not

const user1 = { name: "Jane", active: true };
const user2 = { name: "John", active: false };

function getUserStatus(user) {
    return `${user.name} is currently ${user.active ? 'active' : 'inactive'} `;
}

console.log(getUserStatus(user1)); // Should print: Jane is currently active
console.log(getUserStatus(user2)); // Should print: John is currently inactive  


// Q6: Write a function that returns the user's age if available, or a default message if not, using nullish coalescing and optional chaining
const userWithFullProfile = {
    id: 1,
    name: "Alice",
    profile: {
        age: 25,
        address: {
            city: "Wonderland",
            zip: "12345",
        },
    },
};

const userWithPartialProfile = {
    id: 2,
    name: "Bob",
    profile: {
        age: null,
    },
};

function getUserAge(userprofile1) {
    return `${userprofile1?.profile?.age ?? 'Age not provided'} `
}

console.log(getUserAge(userWithFullProfile)); // Should print: 25
console.log(getUserAge(userWithPartialProfile)); // Should print: Age not provided
console.log(getUserAge({ id: 3, name: "Charlie" })); // Should print: Age not provided


// Q7: Write a function that generates a summary string for the top scorer using template literals and array methods
const scores = [
    { name: "Alice", score: 90 },
    { name: "Bob", score: 85 },
    { name: "Charlie", score: 92 },
];

function getTopScorer(scores) {
    const topScorer = scores.reduce((a, b) => (a.score > b.score ? a : b));
    return `${topScorer.name} is the top scorer with a score of ${topScorer.score}`;
}
console.log(getTopScorer(scores)); // Should print: Charlie is the top scorer with a score of 92. 


//Q8: Create a function that returns a greeting message based on the time of day

console.log(greet("Alice")); // Good morning, Alice! (If the time 10am)
console.log(greet("Alice")); // Good afternoon, Alice! (If the time 1pm)
console.log(greet("Alice")); // Good evening, Alice! (If the time 7pm)


// Q9: Write a function that returns the name of a user's first friend using nested destructuring
const users = [
    { id: 1, name: "Alice", friends: [{ name: "Bob" }, { name: "Charlie" }] },
    { id: 2, name: "David", friends: [{ name: "Eve" }, { name: "Frank" }] },
    { id: 4, name: "Deepak", friends: [] },
];

function getFirstFriendName(userId) {
    const user = users.find(u => u.id === userId);
    if (!user) {
        return "User not found";
    }
    if (user.friends.length === 0) {
        return `${user.name} has no friends 🥲`;
    }
    const { friends: [{ name }] } = user;
    return name;
}


console.log(getFirstFriendName(1)); // Should print: Bob
console.log(getFirstFriendName(2)); // Should print: Eve
console.log(getFirstFriendName(3)); // Should print: User not found
console.log(getFirstFriendName(4)); // Should print: Deepak has no friends 🥲
