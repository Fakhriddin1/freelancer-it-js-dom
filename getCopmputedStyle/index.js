// получение элемента
const element = document.querySelector('.lesson__item-list_red');

// // получение значения свойства
// // только если оно записано в атрибуте style
// console.log(element.style.fontSize);

// // стиль элемента 
// const elementStyle = getComputedStyle(element);
// console.log(elementStyle.fontSize);

// // стиль псевдоэлемента 
// const elementBeforeStyle = getComputedStyle(element, "::before");
// console.log(elementBeforeStyle.backgroundColor)


// стиль элемента 
const elementStyle = getComputedStyle(element);


// получаем точное значение 
console.log(elementStyle.paddingBlock);
// получаемне предзапускаемую запись
console.log(elementStyle.padding); // B FF <empty string>