// console.log("Hi ")
// console.log("Hi ")

// setTimeout(function timeout(){
//     console.log("Lorry Wins"); 
// }, 5000); 


// setTimeout(function timeout(){
//     console.log("ferrarai Wins"); 
// }, 2000); 




// console.log("Hi ")
// console.log("Hi ")
// console.log("Hi ")
// console.log("Hi ")

// function add(num){
//     var sum = num + 5
//     return sum 
// }


// function add5(a , bum){
//     var c = add5(a) + add5(b) ; 
//     return c 
// }

// add( 4 , 10)

// console.log("f")


// setInterval(() => {
//     console.log ("Third"); }, 0) ; 


// console.log("s")


fetch("https://restcountries.com/v3.1/all")
    .then(response => response.json())
    .then(data => {
        const countries = data.map((x) => x.name.common) ; 
        console.log(countries);
    }) 
    
// fetch("https://restcountries.com/v3.1/all")
//     .then(response =>response.json() )
//     .then(data => {
//         const population = data.filter((n) => n.population > 1_00_00_000)
//         const final = names.}
//     )


//   Task 2 -> Population more than 1_00_00_000 & Sorted by population
//         Output
//        ["India", "China", "Russia" ... ]
 










// Task 3 -> Population more than 1_00_00_000
//   Output
//  1. India - 150000000
//  2. China - 120000000
//  3. Russia - 80000000
// ....

fetch("https://restcountries.com/v3.1/all")
  .then((res) => res.json())
  .then((data) => {
    var arr = [];
    const names = data.filter((n) => n.population > 1_00_00_000);
    const final = names.sort((a, b) => b.population - a.population);
    const arrData = arr.push(final);
  
  });