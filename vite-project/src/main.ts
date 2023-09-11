export{}


function promptInput(message:string) {
  return prompt(message);
}

function getUserInformation() {
  const user = {
    name:string : 'name',
    card_number:Number;
    date: 'cardDate',
    cvv: 'cvv',
  };

  const userCardName = promptInput('Enter your name');
  if (userCardName) {
    user.name = userCardName;
  }

  let userCardNumber = promptInput('Enter your card number');
  while (userCardNumber && !validateCardNumber(userCardNumber)) {
    console.log('Invalid card number!');
    userCardNumber = promptInput('Enter your card number');
  }
  if (userCardNumber) {
    user.card_number = parseInt(userCardNumber);
  }

  let userCardDate = promptInput('Enter your card date mm/yy');
  while (userCardDate && !validateCardDate(userCardDate)) {
    console.log('Invalid card date!');
    userCardDate = promptInput('Enter your card date mm.yy');
  }
  if (userCardDate) {
    user.date = parseFloat(userCardDate);
  }

  let userCardCvv = promptInput('Enter your cvv');
  while (userCardCvv && !validateCVV(userCardCvv)) {
    console.log('Invalid CVV!');
    userCardCvv = promptInput('Enter your cvv');
  }
  if (userCardCvv) {
    user.cvv = parseInt(userCardCvv);
  }

  users.push(user);
}