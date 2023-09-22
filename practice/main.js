// Cash function

// Write function which will get last visit of user

// history("I've seen 'YouTube'")

// history("I've seen 'Netflix'")

// history("I've seen 'Harry Potter'")

// history("I've seen 'Lord of the Rings'")

// history :

// 1.I've seen 'YouTube'

// 2.I've seen 'Netflix'

// 3.I've seen 'Harry Potter'

// 4.I've seen 'Lord of the Rings'

// function closure(num) {

//   return function () {

//     console.log("[prev]", num);

//     num++;

//     return num;

//   };

// }

// const data = closure(1);

// const result1 = data();

// const data2 = closure(22);

// data2();

// data2();

// data2();

// data2();

// data2();

// data2();

// const result = data2();

// console.log("[data2]", result);

// function history(num) {
//   return function (movie) {
//     const string = `${num}.I,ve seen ${movie}`;
//     num++;
//     return string;
//   };
// }

const movies = history(1);
const result = movies('Harry Potter');
const result2 = movies('Mad Max');
const result3 = movies('Spider-man');
const result4 = movies('Lord of the rings');
const results = `${result}.
${result2}.
${result3}.
${result4}.`;

console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log('_______________________');
console.log(results);
