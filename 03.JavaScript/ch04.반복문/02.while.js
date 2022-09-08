// 1에서 얼마까지 더하면 1000을 초과하는가? 

let number =1, sum = 0;
while (true) {
    sum += number;
    if (sum > 1000)
        break;
    number++;
}
console.log(sum, number);


sum = 0;
for (let i = 1; i <1000; i++) {   //에러남 , 변수 i는 { } 안에서만 유효함 (scrope rule -> 블럭안에서만 유효)
    sum+= i;
    if (sum > 1000)
        break;
}
// console.log(sum, i); // 그래서 여기에 있는 i값은 정의되지 않아서 유효하지 않음 (파이썬 지역변수 같은 느낌?)


let i;
sum = 0;
for (i = 1; i <1000; i++) {   
    sum+= i;
    if (sum > 1000)
        break;
}
console.log(sum, i);