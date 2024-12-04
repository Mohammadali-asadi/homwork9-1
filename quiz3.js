//? 3. Write a code to implement search on array items and returns the answers in an array
// hint: the search is only based on the first letters of the word
// Example:
const brands = [
  'dell',
  'hp',
  'asus',
  'lenovo',
  'apple',
  'acer',
  'samsung',
  'sony',
];
function brandsSearch(arr, query) {
  const brands=[];
  arr.forEach((obj) => {
    for (const key in obj) {
      if (obj[key].includes(searchString)){
        matches.push(obj[key]);
      }
    }
  });

  return brands;
}
const arr = [
  {name: 'a'},
  {name:'s'},
];
  return; //  to be completed


console.log(brandsSearch(brands, 'a')); // result : [ 'asus', 'apple', 'acer' ]
console.log(brandsSearch(brands, 'sa')); // result : [ 'samsung' ]
console.log(brandsSearch(brands, 'son')); // result : [ 'sony' ]
