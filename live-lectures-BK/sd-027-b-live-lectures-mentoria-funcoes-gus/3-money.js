// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário. Como saída mostre se sobrou dinheiro, se gastou tudo ou se estourou o orçamento.

let salario = 5000;

let expensesPessoa1 = {
  'Aluguel' : 800,
  'Luz' : 80,
  'Água' : 30,
  'Internet' : 90,
  'Cartão de crédito' : 5001,
  'Mercado' : 1000,
};

let expensesPessoa2 = {
  'Aluguel' : 800,
  'Luz' : 80,
  'Água' : 30,
  'Internet' : 90,
  'Cartão de crédito' : 2000,
  'Mercado' : 1000,
};

function expenses(gastos){
  let sum = 0;
  for(let key in gastos){
    sum += gastos[key];
  }

  if(sum > salario){
    return 'Estourou o orçamento.';
  } else if(sum === salario){
    return 'Gastou tudo o que ganhou.';
  } else {
    return 'Uhuul, sobrou ' + (salario - sum);
  }
}

console.log(expenses(expensesPessoa1));