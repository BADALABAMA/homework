// function getUserInformation() {
//     const userMisha = {
//       name: 'misha',
//       nickName: 'misha228',
//       sex: 'male',
//     };

//     const userName = promptInput('Enter your name');
//     while (!userMisha.name.toLowerCase(userName) === 'misha') {
//       console.log('Hello you are not Misha!!!')
//     }
//     if (userMisha.name.toLowerCase(userName)) {
//         console.log()
//     }

//     let userEmail = promptInput('Enter your email');
//     while (userEmail && !validateEmail(userEmail)) {
//       console.log('Invalid email! emaild shoud contain @ and .');
//       userEmail = promptInput('Enter your email');
//     }
//     if (userEmail) {
//       user.email = userEmail;
//     }

//     let userPassword = promptInput('Enter your password, password should include numbers and strings');
//     while (userPassword && !validatePassword(userPassword)) {
//       console.log('Invalid password!');
//       userPassword = promptInput('Enter your password');
//     }
//     if (userPassword) {
//       user.password = userPassword;
//     }

//     users.push(user);
//   }

Store = [];
const myStore = {
  grocerieStore: [
    {
      title: 'Bread',
    },
    {
      title: 'Banana',
    },
  ],
  techniqueStore: [
    {
      title: 'Phone',
    },
    {
      title: 'Laptop',
    },
  ],
};

// ...
const roles = ['admin', 'guest'];

function main() {
  while (true) {
    const isChoiceExit = isExit('Do you wanna get out of here ? ');

    if (isChoiceExit) break;

    const role = prompt(`Enter ur role:${roles}`).toLowerCase();

    const roleId = getRoleId(role, roles);

    if (roles[roleId] !== roles[roles.indexOf('admin')]) return;

    const choicedOption = isExit(
      "Enter 'ok' if u wanna add product , or 'cancel' which oposite and close ur programm"
    );

    if (!choicedOption) break;

    const productTitle = prompt('Enter the title of product : ');
    addProduct(myStore.grocerieStore, productTitle);

    console.log('[myStore.grocerieStore]', myStore.grocerieStore);
  }
}
function createProduct(productTitle) {
  return {
    title: productTitle,
  };
}

function addProduct(arr, productTitle) {
  const newProduct = createProduct(productTitle);

  if (isArray(arr)) return false;

  arr.push(newProduct);
  console.log('here');
}

function isArray(arr) {
  if (!Array.isArray(arr)) return true;

  return false;
}

function getRoleId(role, arr) {
  if (isArray(arr)) return;

  if (arr.includes(role)) {
    const roleIndex = arr.indexOf(role);

    return roleIndex;
  }
}

function showProducts(arr) {
  if (isArray(arr)) return;

  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    console.log('[el]', el);
  }
}

function isExit(msg) {
  return confirm(msg);
}

main();
