let args = process.argv.slice(2);
const request = require('request');

const dynamicBreedName = args[0];
const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${dynamicBreedName}`;
request(apiURL, function(error, response, body) {

  if (error !== undefined)  {
    console.log('Breed not found');
    
  } else {
    const data = JSON.parse(body);
    console.log(data[0].description);
  }
});
  
// module.exports = { fetchBreedDescription };