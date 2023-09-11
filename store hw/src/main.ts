export {};

interface MovieItem {
  category: string;
  movie: string[];
}

const streamBerry: MovieItem[] = [
  { category: 'drama', movie: ['Barbie', 'Spartacass'] },
  { category: 'comedy', movie: ['Funshit', 'Funshit2'] },
];

const userChoice: string = promptInput(
  `Enter category of film u want watch "Drama" or "Comedy"`
);
switch (userChoice.toLowerCase()) {
  case 'drama':
    findMoviesByCategory('drama');
    break;
  case 'comedy':
    findMoviesByCategory('comedy');
    break;
  default:
    break;
}

function findMoviesByCategory(category: string) {
  let foundObject = streamBerry.find((obj) => obj.category === category);
  let movies: string[] = foundObject ? foundObject.movie : [];
  console.log(movies);
}
function promptInput(message: string) {
  return prompt(message);
}
