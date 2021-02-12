const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(apiURL, function(error, response, body) {
    
    const data = JSON.parse(body);
    if (data.length === 0) {
      return callback(error, null);
    } else {
      callback(error, data[0].description);
    }
  });
};
  
module.exports = { fetchBreedDescription };