// // поиск по селектеру класса

// const elemsOne = document.querySelectorAll('.lesson__list');
// console.log(elemsOne);

// // поиск по селектеру мега
// const elemsTwo = document.querySelectorAll('li');
// console.log(elemsTwo);

// // поиск по смешанному селектеру мега и класа
// const elemsThree = document.querySelectorAll('li.lesson__item-list');
// console.log(elemsThree);

// // поиск по мегу первого уровня бложенности
// const elemsFour = document.querySelectorAll('.lesson__list>li');
// console.log(elemsFour);

// // поиск по бложенным классам
// const elemsFive = document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsFive);

// //поиск по бложенным классам
// const elemsSix = document.querySelectorAll('.lesson__list, .lesson__text');
// console.log(elemsSix);

// // поиск по ID
// const elemsSeven = document.querySelectorAll('#listItem');
// console.log(elemsSeven);

// // поиск по атрибуту 
// const elemsEight = document.querySelectorAll('[data-item]');
// console.log(elemsEight);

// // поиск по атрибуту со значением
// const elemsNine = document.querySelectorAll('[data-item="85"]');
// console.log(elemsNine);







// // получение конкретного элемента колекции
// const elems = document.querySelectorAll('li');
// console.log(elems[2]);

// for (const item of elems) {
//     console.log(item);
// }

// elems.forEach(item => {
//     console.log(item);
// })


// const subList = document.querySelectorAll('.lesson__sub-list');
// const subItems = subList[0].querySelectorAll('li');
// console.log(subItems);

const subList = document.querySelectorAll('.lesson__sub-list');
const listItems = 
    subList[0].querySelectorAll('.lesson__list .lesson__items-sub-list');
    console.log(listItems);




