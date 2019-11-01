var faker = require('faker');


const referenceGenerator = function() {
  let words = faker.random.words();
  words = words.split(" ").join("").toLowerCase();
  return words

}


export default referenceGenerator