// 1
function triangle() {
  let symbol = '#';
  for (let i = 0; i < 7; i++) {
    console.log(symbol);
    symbol += '#';
  }
}

triangle();

// 2
function fizzBuzz() {
  for (let i = 1; i < 101; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();

// 3
function chess_1() {
  let e1 = '#   #   #   #  ';
  let e2 = '  #   #   #   #';

  console.log('----------Перший варіант----------');

  for (let i = 0; i < 4; i++) {
    console.log(e1);
    console.log(e2);
  }
}

chess_1();

function chess_2() {
  let symbol = '#';

  console.log('----------Другий варіант----------');

  for (let i = 0; i < 4; i++) {
    while (symbol.split('   ').length < 4) {
      symbol += '   #';
    }
    console.log(`  ${symbol}`);
    console.log(`${symbol}  `);
  }
}

chess_2()