// Timeout 설정
setTimeout(function() { //괄호 안에는 callback함수 들어와야함 
    console.log('Timeout 발생(3초 후)');
}, 3000);     // ms로 작성

// 시간 간격 (interval) - 주기적으로 실행하는 함수 
const si = setInterval(() => {          //화살표 함수  // 무조건 안에 쓸 때 중괄호 엔터치고 쓰기 (생략하면 헷갈리게 됨)
    console.log(new Date());
}, 1000);

// 주기적으로 실행되는 것을 멈춤 
setTimeout(() => {
    clearInterval(si);
}, 5000);    // 5초뒤에 멈춰라 