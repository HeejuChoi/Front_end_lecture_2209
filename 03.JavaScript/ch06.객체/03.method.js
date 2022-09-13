// 객체 안에서 사용되는 함수 = method
// 객체 = 속성(property, attribute) - 형용사 
//        + 메소드(method) - 동사

const maria = {
    name: '마리아',         // 속성
    age: 24, 
    gender: '여자',
    intro: function() {         // 메소드
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`);  // this 중요! (Python)에서는 self를 썼음 
    } 
};
console.log(maria);
maria.intro();

const james = {
    name: '제임스',         // 속성 
    age: 28, 
    gender: '남자',
    intro: function() {         // 메소드
        console.log(`저는 ${this.name}이고, 나이는 ${this.age}이며, ${this.gender}입니다.`);  // this 중요! (Python)에서는 self를 썼음 
    } 
};
james.intro();