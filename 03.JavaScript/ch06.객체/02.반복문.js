const maria = {name:'마리아', age:24, gender:'여자'};
const james = {'name': '제임스', 'age': 28, 'gender': '남자'};

// for 반복문에서 in을 사용해야함
for (let key in maria) {
    console.log(key, maria[key]);
}

const persons = [maria, james];
for (let person of persons) {                // persons는 배열이므로 for .. of
    for (let key in person) {                // person은 객체이므로 for .. in  
        console.log(key, person[key]);
    }
}

console.clear();
console.log(persons, typeof(persons));     // Array 객체
console.log('--------------');

// 외부와 데이터를 주고 받는 경우 -> json으로 변환을 한다. / 파이썬에서도 활용 가능 
const externalForm = JSON.stringify(persons);
console.log(externalForm);

const internalForm = JSON.parse(externalForm);  // internal에서 쓰게 하기 
console.log(internalForm);