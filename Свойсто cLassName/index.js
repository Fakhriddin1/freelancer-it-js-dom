// получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// добавить класс
element.classList.add('active');
// удалить класс
element.classList.remove('active');
// добавить класс если его нет а если есть удалить.
element.classList.toggle('active');
// проверка наличия класса возврашает true/false
element.classList.contains('active');


// получаем элемент
const element = document.querySelector('.lesson__item-list_red');

// добавить класс
element.classList.add('active');


// // проверяем наличие класса 
// if (element.classList.contains('active')) {
//     console.log('У element усть класс active');
// }

// clasList является перебираемым поэтому можно
// перечислить все классы при помоши for..of

for ( let className of element.classList) {
    console.log(className);
}
