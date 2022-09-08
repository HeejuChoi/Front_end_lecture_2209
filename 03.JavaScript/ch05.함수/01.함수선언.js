// 함수 이름을 갖는 기본 함수  -  Web
function funcName() {
    console.log('함수 이름을 갖는 함수');
}
funcName();

// 익명(Anonymous) 함수 - NodeJS  / (Python) ramda함수 라고 생각하면 됨  
const fn = function() {
    console.log('익명 함수');
} 
fn();
console.log(fn, typeof fn);    // type이 function이라고 나옴 

// 화살표 함수(Arrow function) 
const arrowFunc = () => {
    console.log('화살표 함수');
}
arrowFunc();
console.log(arrowFunc, typeof arrowFunc);

const square2 = (x, y) => {  // 변수가 두 개 이상이면 괄호 써줘야 함 
    return x*x + y*y;
}
console.log(square2(3,4));

// 매개변수가 하나면 ()를 생략할 수 있음
const square = x => {  
    return x*x;    
}
console.log(square(5));

// 함수 안의 내용이 return문 하나만 있으면 { }와 return을 생략할 수 있음 
const sq = x => x*x;   
console.log(sq(10));

// 짝수면 제곱수를, 홀수면 세제곱수를 반환하는 함수

const myFunc = x => x%2==0 ? x*x : x*x*x;   //★★★★★★★ 3항 연산자 중요하니까 꼭 공부하기 
console.log(myFunc(2), myFunc(3));

// 한 줄로 쓰면 가독성이 떨어지니까 이렇게 쓰지말기? 