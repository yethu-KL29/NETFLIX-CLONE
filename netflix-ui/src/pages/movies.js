const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game '},
  headers: {
    'X-RapidAPI-Key': '0af0492f1amsh023f4fbcdbf0208p1cd8dcjsnb738c6721a73',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});