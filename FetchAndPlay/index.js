// // //console.log("alright hi")
// // 'use strict'
// // // fetch('')
// // //   
// // const url = "https://metals-api.com/api/symbols";
// // fetch(url, {
// //   method: "GET",
// //    "kuwppk0kf2l5hiia9s723357ewmoo5xvmqrj29yjohnex28axxpu35kxykr7":API_KEY
// // //   headers: {
// // //     "X-Auth-Token":
// //   }
// // ).then(response => response.json())
// //   .then(data => console.log(data));
  
// // const endpoint = "latest";
// // const access_key = "kuwppk0kf2l5hiia9s723357ewmoo5xvmqrj29yjohnex28axxpu35kxykr7";
// // const url = `https://metals-api.com/api/ + ${endpoint} + '?access_key=' + ${access_key}`;   
// // fetch(url,{

// // })
// // // set endpoint and your access key
// endpoint = 'latest'
// access_key = 'API_KEY';

// // get the most recent exchange rates via the "latest" endpoint:
// $.ajax({
// url: 'https://metals-api.com/api/' + endpoint + '?access_key=' + access_key,   
// dataType: 'jsonp',
// success: function(json) {

// // exchange rata data is stored in json.rates
// alert(json.rates.GBP);

// // base currency is stored in json.base
// alert(json.base);

// // timestamp can be accessed in json.timestamp
// alert(json.timestamp);

// }
// });
// //Convert currencies: Here is how to convert currencies using jQuery.ajax.

// // set endpoint and your API key
// endpoint = 'convert';
// access_key = 'API_KEY';

// // define from currency, to currency, and amount
// from = 'EUR';
// to = 'GBP';
// amount = '10';

// // execute the conversion using the "convert" endpoint:
// $.ajax({
// url: 'https://metals-api.com/api/' + endpoint + '?access_key=' + access_key +'&from=' + from + '&to=' + to + '&amount=' + amount,   
// dataType: 'jsonp',
// success: function(json) {

// // access the conversion result in json.result
// alert(json.result);

// }
// // });
// fetch("https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
// 		"x-rapidapi-key": "b1222459f4msha49f2cde96ef8a3p102891jsn90b640ff800e"
// 	}
// })
// .then(response => {
// 	console.log(response);
// })
// .catch(err => {
// 	console.error(err);
// });
////javascript
// fetch("https://yh-finance.p.rapidapi.com/auto-complete?q=tesla&region=US", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
// 		"x-rapidapi-key": "b1222459f4msha49f2cde96ef8a3p102891jsn90b640ff800e"
// 	}
// })
// .then(response => {response.json()})
// .then(data => console.log(data));
// ////node js///metal
// const http = require("https");
// const options = {
// 	"method": "GET",
// 	"hostname": "yh-finance.p.rapidapi.com",
// 	"port": null,
// 	"path": "/auto-complete?q=tesla&region=US",
// 	"headers": {
// 		"x-rapidapi-host": "yh-finance.p.rapidapi.com",
// 		"x-rapidapi-key": "b1222459f4msha49f2cde96ef8a3p102891jsn90b640ff800e",
// 		"useQueryString": true
// 	}
// };

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();
// ////node js bitxcoin
// // This is node.js example code for making requests with an API key using the stdlib.
// require("https")
//   .request(
//     {
//       host: "data.messari.io",
//       path: "/api/v1/assets/btc",
//       // replace YOUR-SECRET-KEY with your actual key
//       // from https://messari.io/account/api (create messari account first)
//       headers: { "x-messari-api-key": "YOUR-SECRET-KEY" },
//     },
//     function (response) {
//       let str = "";
//       response.on("data", (chunk) => (str += chunk));
//       response.on("end", () => console.log(JSON.parse(str)));
//     }
// 	 )
//   .end();https://data.messari.io/api/v1/assets/eth/market_data/price_usd
///real
//const dd = document.querySelector('.try');
//let Bitcoin_usd;


function Play() {
let Bitcoin_INR_present;
let Bitcoin_INR_after;
let actual="";
let bet="";
const fetchingPrice = function() {
	
 return	(fetch("https://data.messari.io/api/v1/assets/bitcoin/metrics", {
	"method": "GET",
	"headers": {
		"x-messari-api-key": "4d629471-755e-426b-969b-de636fdfed88"
	}
}
).then(response => response.json()));

}
/// current price
const bitcoin_fetch = function() {
fetchingPrice()
.then((info) => {
const Bitcoin_usd=info.data.market_data.price_usd;
current(Bitcoin_usd);
})
.catch(err=> console.log(err));
}
bitcoin_fetch();
function current (price)
{
	Bitcoin_INR_present=price*75;
console.log(Bitcoin_INR_present);
return Bitcoin_INR_present;
}

setTimeout(() => {
	 bet = prompt("bet for high or low");
}, 1000);

//feting after 10sec
setTimeout(function after() {
	fetchingPrice()
	.then((info)=>{
	after10((info.data.market_data.price_usd));
	})
}
	
, 10000);
function after10(price)
{
Bitcoin_INR_after=price*75;
console.log(Bitcoin_INR_after);
}


setTimeout(() => {
	if(Bitcoin_INR_present>Bitcoin_INR_after)
{
	 actual="low";
}
else{
	actual ="high";
}
if(actual==bet)
console.log("you win");
else
console.log("you lose")
},12000);
}
Play();


///price after 10 sec

// setTimeout(() => {
//   bitcoin_fetch();
// }, 10000);

// const foodApi = function() {
//    fetch("https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/mealplans/generate?targetCalories=2000&timeFrame=day", {
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
// 		"x-rapidapi-key": "b1222459f4msha49f2cde96ef8a3p102891jsn90b640ff800e"
// 	}
// })
// .then(response => {
// 	//console.log(response);
// }).then(data=> 
// {
// console.log(data);
// })
// .catch(err => {
// 	console.error(err);
// });
// }
// foodApi();