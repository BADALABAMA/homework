

const users = [];

function promptInput(message) {
  return prompt(message);
}

// function validateEmail(email) {
//   if (!email.includes('.')|| !email.includes('@')) {
//     return false;
//   }
//   return true;
// }

function validateEmail(email) {
  while (!email.includes('.') || !email.includes('@')) {
    if (!email.includes('.')) {
      console.log("Email should contain a period (.)");
    }
    if (!email.includes('@')) {
      console.log('Email should contain an at symbol (@)');
    }
    email = prompt('Enter a valid email address:');
  }
  return true;
}

function validatePassword(password) {
  if (!/\d/.test(password)){
    return false;
  }
  return true;
}



function getUsers() {
  console.log(users);
}

function getUserInformation() {
  const user = {
    name: 'name',
    email: 'email',
    password: 'password',
  };

  const userName = promptInput('Enter your name');
  if (userName) {
    user.name = userName;
  }

  let userEmail = promptInput('Enter your email');
  while (userEmail && !validateEmail(userEmail)) {
    console.log('Invalid email! emaild shoud contain @ and .');
    userEmail = promptInput('Enter your email');
  }
  if (userEmail) {
    user.email = userEmail;
  }

  let userPassword = promptInput('Enter your password, password should include numbers and strings');
  while (userPassword && !validatePassword(userPassword)) {
    console.log('Invalid password!');
    userPassword = promptInput('Enter your password');
  }
  if (userPassword) {
    user.password = userPassword;
  }

 

  users.push(user);
}

function createNewUser(userChoice) {
  do {
    userChoice = promptInput(
      'What do you want to do?\na) Get users\nb) Enter user information\nq) Quit'
    );
    if (userChoice.toLowerCase() === 'a') {
      getUsers();
    } else if (userChoice.toLowerCase() === 'b') {
      getUserInformation();
    }
  } while (userChoice.toLowerCase() !== 'q');
}

createNewUser();
console.log(users);