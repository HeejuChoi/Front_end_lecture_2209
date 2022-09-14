// String 객체 
let hello = '안녕하세요?';      // literal로 부터 생성
let helloFromConsturctor = new String('안녕하세요?');   // 생성자 함수로 생성 

// 속성
console.log(hello.length);      // 6

// Methods
console.log( hello.charAt(1));              // 녕, 녕 // hello[1] 이렇게 쓰는게 더 편리함 
console.log(hello.concat(' 여러분!!'));     // 원래 가진 문자열에 추가 // hello + '여러분!!' 이 더 편리함 
console.log(hello.indexOf('하'), hello.indexOf('한'));      // '하'의 인덱스 값 => 2  // 없는 것은 -1을 리턴해줌(그 단어가 있는지 없는지 확인하기 위해 이 메소드 사용)

// 문제 
// 디지털 시계 (00:00 ~ 23:59)가 있다. 
// 디지털 시계에서 3이라는 숫자가 있는 시간은 하루에 총 몇 초 인가? 
let totalSeconds = 0;
for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute++) {
        let display = String(hour) + ':' + String(minute);
        if (display.indexOf('3') >= 0)
            totalSeconds += 60;
    }
}
console.log(totalSeconds);      //29700

// Regular Expression(정규표현식)
let sample = 'A quick brown fox 갈색의 재빠른 여우가 over the lazy dog.'
let newStr = sample.replace(/[A-Z]/, ' ');      // 대문자는 공백으로 
console.log(newStr);
const newStr2 = sample.replace(/r/g, 'R');       // r문자는 대문자로 / g 옵션은 가지고 있는 모든 r을 대문자로? 
console.log(newStr2);
newStr = sample.replace(/[ㄱ-ㅎㅏ-ㅣ가-힣]/g, '');      // 한글을 제거 
console.log(newStr);

// 문자열의 일부분을 추출 
let str = 'Apple, Banana, Kiwi';
console.log(str.slice(7,13));       // Banana (시작 인덱스,끝 인덱스) (Python) [시작:끝] 
console.log(str.slice(7));          // Banana, Kiwi (7부터 끝까지)
console.log(str.substring(7, 13));  // Banana / slice랑 별 차이가 없음 
console.log(str.substr(7, 6));      // Banana (시작 인덱스, 갯수), deprecated(다음 버전에서는 사용할 수 없다)

// 문자열을 특정 문자열을 기준으로 배열로 만들기 /(Python) split 
const fruits = str.split(',');      
console.log(fruits);

// 문제
// 1에서부터 1000까지 숫자가 있다. 
// 0은 몇 번 나오고, 1은 몇 번, ..., 9는 몇 번 나오는가?
let numbers = '';       // numbers를 빈 string으로 만들기
for (let i=1; i<=1000; i++) 
    numbers += String(i);

let obj = {};
for (let i=0; i<10; i++) {
    obj[String(i)] = numbers.split(String(i)).length -1;        // key = value / 키값을 주고 value를 줌  
}
console.log(obj);