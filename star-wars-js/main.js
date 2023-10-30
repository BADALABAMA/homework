// Lead every promise to async/await syntax

import {
  App,
  Header,
  Main,
  Footer,
  Form,
  Button,
  Input,
  Spinner,
} from './components';
import { Component, createButton } from './core';

import './public/style.scss';

const header = new Header({}).toHTML();
const main = new Main({}).toHTML();
const footer = new Footer({}).toHTML();

const app = new App({
  children: [header, main, footer],
}).toHTML();

const portal = new Component({
  tagName: 'div',
  className: 'portal--active',
}).toHTML();

const spiner = new Spinner({}).toHTML();

portal.append(spiner);

document.body.append(portal, app);

fetch('https://swapi.dev/api/')
  .then((res) => {
    const json = res.json();
    portal.className = 'portal';
    return json;
  })
  .then((res) => {
    // decrease nested lvls

    for (const key in res) {
      header.append(createButton(key, main));
    }
  });
