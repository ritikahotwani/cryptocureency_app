import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://crypto-news34.p.rapidapi.com/news',
  headers: {
    'X-RapidAPI-Key': '439c26f6a8mshe5720aa5eef71c2p1532f5jsnae65400b4bf8',
    'X-RapidAPI-Host': 'crypto-news34.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});