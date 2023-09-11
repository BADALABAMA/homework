const userFirstSum = parseInt(prompt('Enter first sum'));
const userSecondSum = parseInt(prompt('Enter second sum'));
const userSymbol = prompt('Enter what you want to do \n "+", "-", "*", "/"');

function calculate(x, y) {
  if (userSymbol === '+') {
    return alert(x + y);
  }
  if (userSymbol === '-') {
    return alert(x - y);
  }
  if (userSymbol === '/') {
    return alert(x / y);
  }

  if (userSymbol === '*') {
    return alert(x * y);
  } else {
    return alert('this is wrong value, try again ');
  }
}

calculate(userFirstSum, userSecondSum);
