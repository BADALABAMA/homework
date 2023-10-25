const people = document.querySelector('#people');
const starshipsBtn = document.querySelector('#starships');
const vehicles = document.querySelector('#vehicles');
const planets = document.querySelector('#planets');
const dataCard = document.querySelector('.card');
let cardExist = false;
let dataCategory = ' ';
let isCardPeople = false;
let isCardPlanets = false;
let isCardVehicle = false;
// Re-write function (more efficient way)
async function getData(url) {
  // promise

  //   fetch
  const data = await fetch(`https://swapi.dev/api/${url}/`);
  const parseData = await data.json();

  displayData(parseData.results);
}

function displayData(data) {
  const dataContainer = document.querySelector('.card-container');
  data = Array.from(data);
  dataContainer.innerHTML = '';
  if (!cardExist) {
    data.forEach((data) => {
      const dataCard = document.createElement('div');
      dataCard.className = 'card';
      if (isCardVehicle) {
        dataCard.innerHTML = `<h2>Name:${data.name}</h2>
      <h3>manufacturer:${data.manufacturer}</h3>
      <h3>cost in credits:${data.cost_in_credits}</h3>
   `;
      }
      if (isCardPeople) {
        dataCard.innerHTML = `<h2>Name:${data.name}</h2>
      <h3>gender:${data.gender}</h3>
      <h3>birth_year:${data.birth_year}</h3>
   `;
      }
      if (isCardPlanets) {
        dataCard.innerHTML = `<h2>Name:${data.name}</h2>
        <h3>population:${data.population}</h3>
        <h3>created:${data.orbital_period}</h3>
     `;
      }
      dataContainer.appendChild(dataCard);
      console.log(data);
      cardExist = true;
    });
  }
}

people.addEventListener('click', () => {
  dataCategory = 'people';
  isCardPeople = true;
  getData(dataCategory);
  cardExist = false;
});

starshipsBtn.addEventListener('click', () => {
  dataCategory = 'starships';
  isCardVehicle = true;
  getData(dataCategory);
  cardExist = false;
});
// // Get vehicles
vehicles.addEventListener('click', () => {
  dataCategory = 'vehicles';
  isCardVehicle = true;
  getData(dataCategory);
  cardExist = false;
});
// Get planets
planets.addEventListener('click', () => {
  dataCategory = 'planets';
  isCardPlanets = true;
  getData(dataCategory);
  cardExist = false;
});

// ***
// If button is clicked it returns data ,
// then lead data to HTML and append on the screen
