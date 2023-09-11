const arr = ['John', 'Bob', 'Mike', 'Don'];
console.log(arr);
const addElement = function (arr, el) {
  arr.push(el);

  console.log(arr);
};
addElement(arr, 'Ruslan');

function deleteElement(arr) {
  arr.pop();

  console.log(arr);
}

deleteElement(arr);

const showIndexAndValue = () => {
  for (let index = 0; index < arr.length; index++) {
    console.log('index: ', index, 'Value: ', arr[index]);
  }
};

showIndexAndValue();

const str = 'HelloworDimaldMishaNeRuslanDota2';
console.log(str);

function findAndReplaceStr() {
  const indexOfMisha = str.indexOf('Misha');
  console.log(indexOfMisha);
  const indexOfDima = str.indexOf('Dima');
  console.log(indexOfDima);
  const newStr = str.slice(0, 8) + 'Ruslan2' + str.slice(12);

  console.log(newStr);
}

findAndReplaceStr();
