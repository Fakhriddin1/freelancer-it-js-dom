// // получение объекта

// const textElement = document.querySelector('.lesson__text');


// // Создание нового элемента (тега)
// const newElement = document.createElement('div');

// // наполняем новый элемент

// newElement.innerHTML = 'Живи, а работай в <span class="yellow"> свободное</span> время!';


// // вставляем новый элемент


// //  ...перед объектом
// textElement.before(newElement);
// //  ...после объекта
// textElement.after(newElement);
// //  ...внутрь и в начало объекта
//  textElement.prepend(newElement);
// //  ...внутрь и в конец объекта
// textElement.appened(newElement);


//-----------------------

// // получение объекта

const textElement = document.querySelector('.lesson__text');


// Создание нового элемента (тега)
const newElement = document.createElement('div');

// наполняем новый элемент

newElement.innerHTML = 'Живи, а работай в <span class="yellow"> свободное</span> время!';

// вставка нескольких фрагментов сразу
textElement.append(newElement, "Привет")




// Можно вставить строку
textElement.append('Живи, а работай в <span class="yellow"> свободное</span> время!');






