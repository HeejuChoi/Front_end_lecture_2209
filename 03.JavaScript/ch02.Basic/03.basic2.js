// 복합 대입 연산자
let a = 10;
a += 10; // a = a + 10; 이 방법은 잘 안씀 
console.log(a);

let hello = 'Hello';
hello += ' World!!';
console.log(hello);

// 증감 연산자 (각 연산자에서 변수 값이 1만큼 변경됨)
let b = 1
console.log(a++, ++b);  // 20 , 2
console.log(a, b);  // 21, 2

// 자료형 변환 
console.log(Number('101'), String(101)); // Number는 노란색, String은 검정색으로 나옴 
console.log(Boolean(0), Boolean(1), Boolean(''), Boolean(undefined)); // 0은 false, 1은 true (0, NaN, "", null, undefined 이외에는 모두 true로 변환)
console.log(Boolean(0.0), Boolean(2), Boolean('str'));

console.log(Number('String')); // NaN (Not a Number)
console.log(Number('0o123'),Number('0x123'), Number('0b101'));

// 자동 자료형 변환
console.log(52+'37', 21+31+'37');
console.log(1+true, true+'bool'); // 2, truebool (true가 1이 되어 2, true를 문자로 해서 truebool)

// 일치 연산자 (===)
console.log(1 == 1.0, 1 === 1.0);
console.log(1 == '1', 1 === '1', 1 !== '1'); // true, false(자료형과 값이 같은지 비교), true
