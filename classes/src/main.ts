export {};
// ! Producing Hero
// class Hero {
//   name: string;
//   HP: number;
//   damage: number;

//   constructor(name: string, HP: number, damage: number) {
//     this.name = name;
//     this.HP = HP;
//     this.damage = damage;
//   }

//   kick() {
//     return -23;
//   }

//   skill() {
//     return -33;
//   }
// }
// const player1 = new Hero('medusa', 100, 25);

// console.log(player1);
// console.log(player1.kick());
// console.log(player1.skill());

// ! FIGHT
// function fight(player1: Hero, player2: Hero): void {
//   console.log(player1, player2);
//   decorator();
//   while (player1.HP > 0 && player2.HP > 0) {
//     console.log(
//       `${player1.name} dealt ${player1.damage} damage to ${player2.name}`
//     );

//     player2.HP -= player1.damage;
//     decorator();

//     if (player2.HP <= 0) {
//       endOfGame(player2);
//       break;
//     }

//     console.log(
//       `${player2.name} dealt ${player2.damage} damage to ${player1.name}`
//     );
//     player1.HP -= player2.damage;
//     decorator();

//     if (player1.HP <= 0) {
//       endOfGame(player1);
//       break;
//     }
//   }
// }

// function endOfGame(loser: Hero): void {
//   console.log(`${loser.name} defeated`);
// }

// function decorator() {
//   console.log('-----------------');
// }

// function randomNumber() {
//   const randomiseNumber: number = Math.floor(Math.random() * 100);
//   return randomiseNumber;
// }

// const player1 = new Hero(
//   'Achilles son of Pylea',
//   randomNumber(),
//   randomNumber()
// );
// const player2 = new Hero(
//   'Hector a Trojan Prince',
//   randomNumber(),
//   randomNumber()
// );

// fight(player1, player2);

// ! producing user
// class User {
//   name: string;
//   email: string | number;
//   password: string | number;

//   constructor(name: string, email: string | number, password: string | number) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//   }
//   getPassword(): number | string {
//     return this.password;
//   }
//   getEmail(): number | string {
//     return this.email;
//   }
//   getName(): string {
//     return this.name;
//   }
// }

// const newUser = new User('PhillipMoris', 'edsefrfr2334@dad.ds', 4532267766);
// console.log(newUser);
// console.log('Email:', newUser.getEmail());
// console.log('Name:', newUser.getName());
// console.log('Password:', newUser.getPassword());

// ! User login and Registration
// const users: any[] = [];
// function validateEmail(email: string) {
//   if (!email.includes('.') || !email.includes('@')) {
//     return false;
//   }
//   return true;
// }

// function validatePassword(password: string) {
//   if (!/\d/.test(password)) {
//     return false;
//   }
//   return true;
// }

// function promptInput(message: string) {
//   return prompt(message);
// }

// function createNewUser() {
//   class User {
//     login: string;
//     email: string;
//     password: string;

//     constructor(login: string, email: string, password: string) {
//       this.login = login;
//       this.email = email;
//       this.password = password;
//     }
//   }
//   let newUser: User | null;
//   let userLogin = promptInput('Enter your name');
//   if (userLogin) {
//     let userEmail = promptInput('Enter your email');
//     while (userEmail && !validateEmail(userEmail)) {
//       console.log('Invalid email! Email should contain @ and .');
//       userEmail = promptInput('Enter your email');
//     }

//     let userPassword = promptInput(
//       'Enter your password, password should include numbers and strings'
//     );
//     while (userPassword && !validatePassword(userPassword)) {
//       console.log('Invalid password!');
//       userPassword = promptInput('Enter correct  password');
//     }

//     newUser = new User(userLogin, userEmail, userPassword);
//     users.push(newUser);
//     console.log(users);
//   }
// }
// function userLogin() {
//   let isRunning = true;

//   while (isRunning) {
//     const userChoice = promptInput('Enter your login');
//     const foundUser = users.find((user) => user.login === userChoice);

//     if (foundUser) {
//       const userPassword = promptInput('Enter your password');
//       if (userPassword === foundUser.password) {
//         console.log(`Hello ${foundUser.login}`);
//         isRunning = false;
//       } else {
//         console.log('Invalid password');
//       }
//     } else {
//       console.log('User not found');
//     }
//   }
// }

// function getUserInformation() {
//   let userChoice: string;
//   do {
//     userChoice = promptInput(
//       'What do you want to do?\na)  Register \nb)Login \nq) Quit'
//     );
//     if (userChoice.toLowerCase() === 'a') {
//       createNewUser();
//     }
//     if (userChoice.toLowerCase() === 'b') {
//       userLogin();
//     }
//   } while (userChoice.toLowerCase() !== 'q');
// }
// getUserInformation();
