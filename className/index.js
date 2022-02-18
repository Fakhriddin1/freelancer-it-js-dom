// получение элемента
const element = document.querySelector('.lesson__item-list_red');

//получаем имена классов
const elemtClassNames = element.className;
console.log(elemtClassNames);

// перезаписиваем имя класса 
element.className = "red";