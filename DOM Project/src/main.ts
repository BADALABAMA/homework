export {};

// const app = document.getElementById('app');

// console.log(app?.children[0]);

// for (let i = 0; i < app?.children.length; i++) {
//   console.log(app?.children[i]);
// }
const styles = ['red', 'green'];

// const firstName = document.querySelector(['.first__name']);
// const lastName = document.querySelector(['.last__name']);
// console.log(firstName);
// console.log(lastName);

// while (firstName <= 4 && lastName <= 5) {
//   alert('incorect data');

//   if (firstName >= 4) {
//     firstName.addEventListener('change', (e) => {
//       e.target.value;
//       e.preventDefault;
//     });
//   }
// }

// firstName.addEventListener('change', (e) => {
//   e.target.value;
//   e.preventDefault;
// });
// console.log(firstName.value;);

const form = document.getElementById('form');

const inputFields = document.querySelectorAll('.inputField');
inputFields.addEventListener('input', () => {
  inputFields.classList.add('styles[0]');
});

console.error('Form element not found.');
