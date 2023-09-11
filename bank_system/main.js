const users = [];

function promptInput(message) {
  return prompt(message);
}

// function validateCardNumber(cardNumber) {

//   return true;
// }

// function validateCardDate(cardDate) {

//   return true; /
// }

// function validateCVV(cvv) {

//   return true
// }

function getUsers() {
  console.log(users);
}

function performScamOperation() {
  const user = {
    name: 'name',
    card_number: 'cardNumber',
    date: 'date',
    cvv: 'cvv',
  };

  const userCardName = promptInput('Enter your name');
  if (userCardName) {
    user.name = userCardName;
  }

  const userCardNumber = promptInput('Enter your card number');
  if (userCardNumber) {
    user.card_number = parseInt(userCardNumber);
  }

  const userCardDate = promptInput('Enter your card date mm.yy');
  if (userCardDate) {
    user.date = parseFloat(userCardDate);
  }

  const userCardCvv = promptInput('Enter your cvv');
  if (userCardCvv) {
    user.cvv = parseInt(userCardCvv);
  }

  console.log('Updated object:', user);
  users.push(user);
}

function createNewUser() {
  let userChoice;
  do {
    userChoice = promptInput(
      'What do you want to do?\na) Get users\nb) Perform a new scam operation\nq) Quit'
    );
    if (userChoice.toLowerCase() === 'a') {
      getUsers();
    } else if (userChoice.toLowerCase() === 'b') {
      performScamOperation();
    }
  } while (userChoice.toLowerCase() !== 'q');
}

createNewUser();
console.log(users);
