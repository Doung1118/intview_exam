function fib(num) {

  const arr = [0, 1]

  for (let i = 2; i <= num; i++) {

    let a = arr[i - 1];
    let b = arr[i - 2];
    arr.push(a + b);

  }
  return arr[num];

};



console.log(fib(6));


// node main.js ,,, you will be see 8 // 