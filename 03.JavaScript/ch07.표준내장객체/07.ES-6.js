// ES-6(2015년)에 추가된 사항

// 1. Destructuring assignmnet
const fruits = ['apple', 'banana', 'cherry', 'grape'];
const [a, b, c, g] = fruits;
console.log(a, b, c, g);

const product = {name:'mouse', price:20000};
const {name, price} = product;
console.log(name, price);

// 2. Spread syntax
const fruits1 = ['grape', 'mango'];
const fruits2 = [fruits, fruits1];
console.log(fruits2);
const fruits3 = [...fruits, ...fruits1];    // ...은 풀어헤쳐주는 효과가 있음 
console.log(fruits3);

const numbers = [4, 16, 9, 35, 36];
console.log(Math.max(numbers));         // 결과가 NaN
console.log(Math.max(...numbers));      // Math.max(4, 16, 9, 35, 36) 와 같은 효과 // 36

// 3. let, const
// 4. template literals     ` `
// 5. 3항 연산자            ? :
// 6. 화살표 함수    
// 7. default parapmeters   함수의 인자의 default 값을 설정할 수 있음 
// 8. object shorthand property     {name:name, price:price} => {name, price}
// 9. class

// 10. Set 
const mySet = new Set();
mySet.add(1);
mySet.add(3);
mySet.add(1);
console.log(mySet);         // Set(2) { 1, 3 }  / set에 2개의 element가 있고, 중복은 빠진다. 
console.log(mySet.has(3));  // true             / 3을 가지고 있는지 확인함 
console.log(mySet.size);    // 2                / length대신 size 사용 