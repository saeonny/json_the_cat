const request = require("request");
let breed = process.argv[2];
let breedshort = breed.substring(0,3);
const url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedshort;
// const fakeurl = 'https://apppppi.thecatapi.com/v1/breeds/search?q=' + breedshort;



request(url, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  //  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.
  
  // console.log("responseee", response);
  if (error) {
    throw new Error("failed to request url");
  }


  const data = JSON.parse(body);
  
  if (findBreed(data,breed)) {
    console.log(findBreed(data,breed).description);
  }
 
});



const findBreed = function(obj,breed) {
  const keys = Object.keys(obj);
  for (let key of keys) {
    if (obj[key].name === breed) {
      return obj[key];
    }
  }
  throw new Error("no such breed exists");
};
