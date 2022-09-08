// 10보다 큰 정수를 입력으로 받아 약수를 모두 배열로 만들어서 출력하세요.

let input = 12;
let divisors = [];    // divisors: 약수 / 들어가기 전에 배열 만들어두기  / (Python) [i for i in range(1,input+1) if input % i == 0]
for (let i=1; i<=input; i++) {
    if (input % i == 0)
        divisors.push(i);
}
console.log(divisors);