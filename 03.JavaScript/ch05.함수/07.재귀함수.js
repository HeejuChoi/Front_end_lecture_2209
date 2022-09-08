// 재귀 함수 (Recursion)  /자기가 자기자신을 부르는 것?
// ! 정의 :    n! = n * (n-1)! <단, 0!은 1이다.>

// 재귀함수를 쓰지 않았을 때 
const num = 5;
let product = 1;
for (let i=1; i<=num; i++) {
    product *= i;
}
console.log(`${num}!은 ${product}입니다.`);

// 재귀 함수 - 자기가 자기자신을 호출하는 함수 
function factorial(n) {
    if (n == 0)
        return 1; // return이 나와서 뒤에 else안쓰고 그냥 작성함 
    return n * factorial(n-1);  
}
console.log(`10!은 ${factorial(10)}입니다.`);

// fibonacci 수열
// fibonacci 수열이란? :  f(n) = f(n-1) + f(n-2)   < f(0), f(1)의 값은 모두 1>     /     1, 1, 2, 3, 5, 8 .... 
// fibonacci 수열을 함수로 만들면?
function fibo(n) {
    if (n == 0 || n == 1)
        return 1;
    return fibo(n-1) + fibo(n-2);
}
for (let i=0; i<10; i++)
    console.log(fibo(i));
    