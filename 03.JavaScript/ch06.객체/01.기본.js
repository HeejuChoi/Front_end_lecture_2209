// 배열
let fruits = ['사과','배','감'];

let arrayPersonInfo = ['제임스', 28, '남자'];

// 객체 - (Python) 딕셔너리
let personInfo = {
    'name': '제임스', 'age': 28, 'gender': '남자'  // key : value
};
console.log(personInfo['name']);  //key값 뽑아내는 방법 

// js에서 표현하는 방법
let maria = {name:'마리아', age:24, gender:'여자'}; // key에 '' 빼도 됨 / key값에 한글로 써도 되긴함 
console.log(maria.age);

// key 값을 변수 (문자열)로 받는 경우 
const key = 'age'; 
// maria.key - 이와 같이 사용하면 안됨 
console.log(maria[key], maria['gen'+'der']);


// ES-6
const name = '홍길동';
const age = 25;
const gender = '남자';
const hong = {name:name, age:age, gender:gender};
const hongEs6 = {name, age, gender};  // react에서 많이 사용됨 / 이렇게 해도 똑같이 나옴 
console.log(hong, hongEs6);