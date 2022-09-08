const array = [52, 273.1, '아침밥', '점심밥', true, false];
console.log(array[0], array[2]);
console.log(array.length, array[array.length-1]);
console.log(typeof array);

// Element 추가
// Python에서는 append, js에서는 push

//array[6] = 6;       // 제일 마지막 인덱스 번호 다음껄로 하면 추가가 됨 / 마지막 자리 번호로 안하면 중간에 비게 됨
array[array.length] = 6;      // 이렇게 쓰면 헷갈리지 않고 쓸 수 있음  
array.push('push');         // 맨마지막에 'push'가 들어감 
console.log(array);
console.log(array.toString());     // toString() -> 일렬로 길게 보임 

// 기본 for-loop
for (let i = 0; i < array.length; i++) { // 초기값, 조건, 증감분 
    console.log(i, array[i]);
} 

//Enhanced for-loop
for (let item of array) {
    console.log(item)
}