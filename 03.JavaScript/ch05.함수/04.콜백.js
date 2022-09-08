// 일단은 있다는 것만 알고 있기, Nodejs에서 많이 할 예정
function callFiveTimes(callback) {
    for (let i=0; i<5; i++) {
        callback();
    }
}

const cb = function() {
    console.log('함수가 호출되었음.');
}
//cb();
//callFiveTimes(cb);    //이렇게 친절하게 잘 안써줌 


// 이해못하면 Nodejs못함

// callFiveTimes(function() {
//     console.log('함수가 호출되었음.');
// });

callFiveTimes(() => {
    console.log('함수가 호출되었음.');
});