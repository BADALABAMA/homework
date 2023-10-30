import { Button } from '../components';

export function createButton(key, node) {
  const button = new Button({
    textContent: key,
    events: {
      click: () => {
        getData(key, node);
      },
    },
  });

  return button.toHTML();
}

async function getData(key, node) {
  const data = await fetch(`https://swapi.dev/api/${key}`);
  const parsedData = await data.json();

  displayData(parsedData.results, node);
  console.log(parsedData);
}

function displayData(data, node) {
  data = Array.from(data);
  node.innerHTML = ' ';
  data.forEach((data) => {
    const h3 = document.createElement('h3');
    h3.textContent = `${data.name || data.title}`;
    node.appendChild(h3);
  });
}
