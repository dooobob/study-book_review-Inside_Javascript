function solution(numbers) {
    // var answer = '';
    // var max = Math.max(...numbers);
    // var numbersArr = [];

    // // console.log(max);
    // // console.log(max.toString().length);
    // for (var num in numbers) {
    //     var tmp = numbers[num];
    //     if (numbers[num].toString().length < max.toString().length) {
    //         // console.log("=============== " + numbers[num] + "=== =  " + numbers[num].toString().length);
    //         // console.log(max.toString().length - numbers[num].toString().length);
    //         tmp = tmp * Math.pow(10, (max.toString().length - numbers[num].toString().length));
    //     }

    //     numbersArr.push({ ori: numbers[num], tra: tmp });
    // }

    // console.log(numbersArr);

    // numbersArr.sort((a, b) => {
    //     return b.tra - a.tra;
    // });

    // console.log(numbersArr);

    // numbersArr.sort((a, b) => {
    //     return a.ori.toString().length - b.ori.toString().length;
    // });

    // console.log(numbersArr);

    // for (var num in numbersArr) {
    //     answer += numbersArr[num].ori.toString();
    // }

    // return answer;




    var answer = '';
    var nums = [];

    // for (var i in numbers) {
    //     var numLen = numbers[i].toString().length;
    //     if (nums[numLen]) {
    //         nums[numLen].push(numbers[i]);
    //     } else {
    //         nums[numLen] = [];
    //         nums[numLen].push(numbers[i]);
    //     }
    // }

    // while (nums.length > 0) {
    //     var max = [];
    //     for(var i in nums){
    //         max[i] = Math.max(...nums[i]);
    //     }
    // }
    console.log(numbers);


    numbers.sort((a, b) => {
        return (b.toString() + a.toString()) - (a.toString() + b.toString());
    });

    console.log(numbers);

    for (var i in numbers) {
        answer += numbers[i];
    }

    if (answer[0] == 0) {
        answer = 0;
    }

    return answer;
}

// console.log(solution([3, 30, 34, 5, 9, 0, 0, 3, 30, 1000, 0, 5, 5, 50, 50, 54, 540, 0, 0, 999, 991, 199, 190]));
console.log(solution([0, 0, 0, 0, 0, 1, 2, 3, 4, 1, 0]));


