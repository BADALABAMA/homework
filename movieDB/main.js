// moviesDB

// Register => user should be a guest

// Auth => user might be a guest or admin / if user in arrOfAdmins - is admin / guest

// admin permissions :

// - add new film

// - remove film

// - update film

// - read film

// CRUD

// Our program :

// admin and guest might read info about film

// admin might add new film

// admin might remove  film

// admin might update  film

class Movie {
  constructor(title, genre, descr, cover) {
    this.title = title;
    this.genre = genre;
    this.descr = descr;
    this.cover = cover;
  }
  getTitle() {
    console.log(this.title);
  }
}

const spiderMan = new Movie({
  title: 'Spider-man',
  genre: 'action',
  descr: 'Story about good neighbourhood',
  cover:
    'https://static.wikia.nocookie.net/wiki-doblaje-espana/images/5/58/Spider-Man_Portada.jpg/revision/latest/thumbnail/width/360/height/360?cb=20220406105425&path-prefix=es',
});

const app = document.getElementById('app');
const constainter = document.createElement('div');
constainter.className = ' film';

console.log(constainter);
// {/* <div class="film">

// <h2>{genre}</h2>

// <img src= ... />

// </div> */}
