
const rocketInterval = setInterval(() => {
    console.log("time") ; 
} , 2000); 

const rockettimeout = setTimeout(() => {
    clearInterval(rocketInterval)
} , 7000)