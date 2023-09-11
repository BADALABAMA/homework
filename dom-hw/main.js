const app = document.getElementById('app');

// console.log(app.children[0]);

// for (let i = 0; i < app.children.length; i++) {
//   console.log(app.children[i]);
// }
const styles = ['red', 'green'];

const form = document.getElementById('form');

const firstName = document.querySelector('.firstName');
const lastName = document.querySelector('.lastName');
const btn = document.querySelector('.submit-btn');
const side = document.querySelector('#side');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  // if (
  //   firstName.value.length < 4 &&
  //   lastName.value.length < 5 &&
  //   side.value !== 'Dark'
  // ) {
  //   firstName.style.background = 'red';
  //   lastName.style.background = 'red';
  // }
  if (
    firstName.value.length >= 4 &&
    lastName.value.length >= 5 &&
    side.value == 'Dark'
  ) {
    firstName.style.background = 'green';
    lastName.style.background = 'green';
    alert('Welcome to the dark side!');
  } else {
    firstName.style.background = 'red';
    lastName.style.background = 'red';
    alert('something went wrong! Side must be Dark');
  }
});
