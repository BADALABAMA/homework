const admin = { nick: admin, password: 228 };

let guest;
const product = ['Iphone', 'Macbook Air', 'iPad'];

function validateName(name) {
  if (!name.toLowerCase === admin.nick) {
    return false;
  }
  return true;
}
function validatePassword(password) {
  if (!password === admin.password) {
    x;
    return false;
  }
  return true;
}

function getUserInformation() {
  const userName = promptInput('Enter your name');
  if (userName && !validateName(userName)) {
    console.log('Invalid name!');
    userName = promptInput('Enter your name');
  }

  let userPassword = promptInput('Enter your password');
  while (userPassword && !validatePassword(userPassword)) {
    console.log('Invalid password!');
    userPassword = promptInput('Enter your password');
  }
  if (userPassword) {
  }
}

function userRoleChoice(userChoice) {
  while (userChoice.toLowerCase() !== 'q');
  {
    userChoice = promptInput(
      'What do you want to do?\na) Enter as Admin\nb) Enter as Guest\nq) Quit'
    );
    if (userChoice.toLowerCase() === 'a') {
      getProducts();
    }
    if (userChoice.toLowerCase() === 'b') {
      getUserInformation();
    }
  }
}
function promptInput(message) {
  return prompt(message);
}

function getProducts() {
  console.log(product);
}
