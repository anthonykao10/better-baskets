const referenceGenerator = function() {
  let result = [];
  let arrayString = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p","q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  for (let i = 0; i < 13; i++) {
    let x = Math.floor(Math.random() * 35);
    result.push(arrayString[x]);
  }
  return result.join('');
}

export default referenceGenerator;
