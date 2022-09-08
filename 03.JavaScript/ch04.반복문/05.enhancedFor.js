const array = [52, 273.1, '아침밥', '점심밥', true, false];

// for-of     / 잘 기억해두기
for (let item of array) {
    console.log(item, typeof(item));
}

// for-in, (Python) enumerate 와 유사
for (let i in array) {
    console.log(i, array[i]);
}
