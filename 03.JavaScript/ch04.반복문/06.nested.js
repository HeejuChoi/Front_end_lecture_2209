// 중첩반복문 / for문 안에 for문

// 별로 직각삼각형 그리기
// 1사분면
for (let i=1; i<=5; i++){
    let stars = '';
    for (let k=1; k<=i; k++) {      //원래 여기서 j 많이 쓰는데 헷갈리니까 되도록이면 j쓰지말기
        stars += '*';
    }  
    console.log(stars);
}
// 4사분면
for (let i=5; i>=1; i--) {
    let stars = '';
    for (let k=1; k<=i; k++) {      
        stars += '*';
    }  
    console.log(stars);
}
// 2사분면
for (let i=1; i<=5; i++) {
    let stars = '';
    for (let k=1; k<=5-i; k++)
        stars += ' ';        // 공백에 대한 문장
    for (let k=1; k<=i; k++)     
        stars += '*';        // *에 대한 문장
    console.log(stars);  
}
// 3사분면 
for (let i=5; i>=1; i--) {
    let stars = '';
    for (let k=1; k<=5-i; k++)  // 공백에 대한 문장
        stars += ' ';
    for (let k=1; k<=i; k++)    // *에 대한 문장  
        stars += '*'; 
    console.log(stars);  
}