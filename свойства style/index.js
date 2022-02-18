// получаем элемент

const element = document.querySelector('.lesson__item-list-red');

// задаем стиль с помошью CSS свойства
element.style.color = "red";

// margin-bottom
element.style.marginBottom = "30px";
// z-index
element.style.zIndex = "10";


// получение значение свойства
// толбко если оно записано в атрибуте style

console.log(element.style.marginBottom);

// сброс стиля
element.style.marginBottom

// получение элемента 
const element = document.querySelector('.lesson__item-list_red');

element.style.cssText = `
    margin-botom: 30px;
    color:red;
    `;