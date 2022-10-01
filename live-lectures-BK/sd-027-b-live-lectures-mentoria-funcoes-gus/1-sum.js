//DESENVOLVA UMA FUNÇÃO QUE SOMA TODOS OS VALORES DE UM ARRAY
function sumFunction(array){
  let result = 0;
  for(let index = 0; index < array.length; index += 1){
    result += array[index];
  }
  return result;
}

console.log(sumFunction([20, 50]));