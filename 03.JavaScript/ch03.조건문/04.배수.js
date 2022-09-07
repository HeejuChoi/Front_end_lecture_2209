// 어떤 숫자가 3의 배수인지, 5의 배수인지, 두 수의 공배수인지, 아닌지 확인
// 3의 배수면 Fizz, 5의 배수면 Buzz, 공배수면 FizzBuzz, 아니면 숫자 출력

const num = Math.ceil(Math.random() * 100);
if (num % 3 === 0 && num % 5 === 0) { // 순서도 잘 맞춰야함, 만약 FizzBuzz를 나중에 쓰면 안나옴 
    console.log(num, 'FizzBuzz');
} else if (num % 3 === 0) {
    console.log(num, 'Fizz');
} else if (num % 5 === 0) {
    console.log(num, 'Buzz');
} else {
    console.log(num, num);
}

for (let i=1; i <= 100; i++) {
    if (num % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
} // 줄바꿈 없이 결과 보고 싶으면 process.stdout.write (Node.js에서만 가능)