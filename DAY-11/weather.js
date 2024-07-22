// // 1
// function getTempOfCity(cityname) {
//     fetch(
//       `http://api.weatherapi.com/v1/current.json?key=7ca58932b97a48138df71037241907&q=${cityname}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(
//           `Temperature in ${data.location.name} is ${data.current.temp_c}`
//         );
//       });
//   }
//   getTempOfCity("hyderabad");
   
//   // 1.2
//   var cityName = ["chennai", "Hyderabad", "mumbai"];
//   const cityInfo = [];
//   cityName.forEach((elements) => {
//     fetch(
//       `http://api.weatherapi.com/v1/current.json?key=7ca58932b97a48138df71037241907&q=${elements}`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         cityInfo.push(`${data.location.name} : ${data.current.temp_c}`);
//       });
//   });
//   console.log(cityInfo);
 
// const API_KEY = "7ca58932b97a48138df71037241907"
// var cities = [ "chennai" , "madurai" , "erode"]
// const urls = cities.map((x) => `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${x}&aqi=no`) ; 
// async function fetchData(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
// }

// const answer = Promise.all(urls.map(fetchData));
// answer
//     .then(values => {
//         const temperatures = values.reduce((acc, curr) => {
//             acc[curr?.location?.name] = curr?.current?.temp_c;
//             return acc; 
//         }, {});
//         console.log(temperatures);
//     })


// fetch("https://669a424b9ba098ed61fef5da.mockapi.io/Users")
// .then(res => res.json())
// .then(data => console.log(data))