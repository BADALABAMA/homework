const app = document.querySelector('#app');

const history = {
  events: [],
};

app.addEventListener('click', (e) => {
  memorize(e.target);
  console.log(history.events);
});

function memorize(event) {
  history.events.push(event);
}
