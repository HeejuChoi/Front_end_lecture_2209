// 매개변수가 지정되지 않은 경우 대처 방법 
function print(name, count) {
    // if (!count)     // count가 없다면 0으로 나타내라 ?
    //     count = 0;
    count = count ? count : 0; // count를 물어봤을 때 있으면 count, 없으면 0으로 나타내라  / 3항 연산자 
    //count = count || 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 10);
print('감');   //하나만 쓰면 개수 부분에는 undefined뜸 