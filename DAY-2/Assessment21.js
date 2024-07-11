// Task 1: High-Value Transactions in 2023
// Description: Given an array of transactions, identify transactions
// that are above $5000, occurred in 2023, and belong to the
// 'Business' category. Transform this filtered
// array into an array of strings formatted as "Transaction [id]: $[amount] on [date]".
// Data:
const transactions = [
    { id: "T1", category: "Personal", amount: 3000, date: "2023-01-15" },
    { id: "T2", category: "Business", amount: 6500, date: "2023-02-20" },
    { id: "T3", category: "Business", amount: 4500, date: "2023-03-05" },
    // more transactions...
];
// Expected Output:
// ["Transaction T2: $6500 on 2023-02-20"]
console.log(
    transactions
        .filter(
            (x) =>
                x.category == "Business" &&
                x.amount > 5000 &&
                x.date.slice(0, 4) == "2023"
        )
        .map((y) => `Transaction ${y.id}: $${y.amount} on ${y.date}`)
);

// Task 2: Departmental Salary Expenditure
// Description: Calculate the total salary expenditure for each department
//  from an array of departments, each with an array of employees.
// Data:
const departments = [
    { name: "Engineering", employees: [{ salary: 80000 }, { salary: 90000 }] },
    { name: "Marketing", employees: [{ salary: 60000 }, { salary: 65000 }] },
    // more departments...
];
// Expected Output:
// [{ "Engineering": 170000 }, { "Marketing": 125000 }]

// console.log(
//   departments.reduce((accumulator,department) =>
//     departments.employees.reduce((acc, employ) => acc + employ.salary, 0)
//   return accumulator ,0
//   )

// );
const result = departments.reduce((accumulator, department) => {
    const departmentName = department.name;
    const departmentSalary = department.employees.reduce(
        (acc, employee) => acc + employee.salary,
        0
    );
    accumulator[departmentName] = departmentSalary;
    return accumulator;
}, {});

console.log(result);

//   Task 3: Weather Data Sorting and Structuring
// Description: Sort an array of weather data objects in descending order of
// temperature and restructure the data into an object with dates as
// keys and temperatures as values.
// Data:
const weatherData = [
    { date: "2023-03-01", temperature: 16 },
    { date: "2023-03-02", temperature: 20 },
    { date: "2023-03-03", temperature: 18 },
    // more data...
];
// Expected Output:
// { "2023-03-02": 20, "2023-03-03": 18, "2023-03-01": 16 }

const weather = weatherData.reduce((acc, curr) => {
    acc[curr.date] = curr.temperature;

    return acc.temperature - curr.temperature < 0 ? curr : acc;
}, {});
const sortedWeather = Object.entries(weather)
    .sort(([, a], [, b]) => b - a)
    .reduce((acc, [date, temp]) => {
        acc[date] = temp;
        return acc;
    });
console.log(sortedWeather);

// Task 4: Analyzing Electronics Products
// Description: From an array of products, find products in the 'Electronics' category
// with more than 50 reviews and a rating of at least 4.0. Calculate the average price of
// these products.
// Data:
const products = [
    { category: "Electronics", price: 199.99, reviews: 120, rating: 4.5 },
    { category: "Electronics", price: 89.99, reviews: 80, rating: 3.9 },
    { category: "Home", price: 49.99, reviews: 30, rating: 4.2 },
    // more products...
];
// Expected Output:
// 199.99 // Assuming only one product meets the criteria

console.log(
    products.reduce((acc, curr) => {
        if (
            curr.category == "Electronics" &&
            curr.reviews > 50 &&
            curr.rating > 4.0
        ) {
            acc += curr.price;
        }
        return acc;
    }, 0)
);

// Task 5: Merging User and Order Data
// Description: Merge two arrays of objects based on a common key ( userId )
// to create a new array of objects that includes each user's name and their corresponding
// order details.
// Data:
const users = [
    { userId: "U1", name: "Alice" },
    { userId: "U2", name: "Bob" },
    // more users...
];
const orders = [
    { userId: "U1", orderDetails: "Order 1 Details" },
    { userId: "U2", orderDetails: "Order 2 Details" },
    // more orders...
];
// Expected Output:
// [
// { name: 'Alice', orderDetails: 'Order 1 Details' },
// { name: 'Bob', orderDetails: 'Order 2 Details' }
// ]

console.log(
    users.reduce((acc, user) => {
        const order = orders.find((order) => user.id == orders.id);
        if (order) {
            acc.push({
                name: user.name,
                orderDetails: order.orderDetails,
            });
        }
        return acc;
    }, [])
);

console.log("\n\nUsing Reduce as Map And Filter\n");
console.log(
    [1, 7, 3, 10, 5].reduce((acc, curr) => acc.concat(`${curr} -> `), "")
); // converted to string

console.log(
    [1, 7, 151, 3, 10, 5, 4].reduce(
        (acc, curr) => (curr % 2 == 0 ? acc.concat(curr) : acc),
        []
    )
); // Filtering even numbers