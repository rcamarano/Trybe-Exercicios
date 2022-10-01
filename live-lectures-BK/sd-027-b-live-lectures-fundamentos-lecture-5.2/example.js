
function createListItems(weekDaysList) {
  let weekDays = document.getElementById('weekDays');

  for(let index = 0; index < weekDaysList.length; index += 1){
    let weekDay = document.createElement('li');
    weekDay.innerHTML = weekDaysList[index];
    weekDay.className = 'xablau';
    weekDay.id = 'turma27' + index;
    weekDays.appendChild(weekDay);
  }
}

createListItems(['Dom', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']);
// createListItems([1, 2, 3, 4, 5]);
// createListItems([{name: 'Augusto', lastName: 'Santos'}, {name: 'Tiago', lastName: 'Tk'}], 'section');

function monthDays(day) {
  let dayOfMonth = document.getElementById('days');

  for(let index = 1; index <= day; index += 1){
    let weekDay = document.createElement('li');
    weekDay.innerHTML = index;
    dayOfMonth.appendChild(weekDay);
  }
}

monthDays(28);