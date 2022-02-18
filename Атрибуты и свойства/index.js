// const link = document.querySelector('.lesson__link');
// const input = document.querySelector('.lesson__input');

// console.log(link.href);
// console.log(input.href);

// console.log(input.value);
// console.log(link.value);

// // получить список доступных свойств

// console.log(link);

// -----------------------------



// // получить элемент 
// const lessonText = document.querySelector('.lesson__text');


// //   проверяем наличие атрибута 
// lessonText.hasAttribute('name');
// //   получаем значение атрибута
// lessonText.getAttribute('name');
// //   установливаем значени атрибута 
// lessonText.setAttribute('name', 'value');
// //   удаляем атрибут
// lessonText.removeAttribute('name');




//---------------------------------------



// const lessonText = document.querySelector('.lesson__text');

// // пример 
// // устонавливаем значение атрибута
// lessonText.setAttribute('some-attribute', 'some-value');
// // проверяем наличие атрибута

// if (lessonText.hasAttribute('some-attribute')) {
//     console.log('some-attribute сушествует!');
// }



//------------------------------------


// const input = document.querySelector('.lesson__input');

// PictureInPictureWindow.setAttribute('id', '123');
// console.log(input.id);

// input.id = '321';
// console.log(input.getAttribute('id'));


// -------------------------------------------


// const input = document.querySelector('.lesson__input');

// input.setAttribute('value', 'Привет!');
// console.log(input.value);

// input.value = "Как дела?";
// console.log(input.getAttribute('value'));


//--------------------------------------------


// const lessonText = document.querySelector('.lesson__input');
// // получаем дата-атрибут
// console.log(lessonText.dataset.size);
// // перезаписиваем дата-атрибут
// lessonText.dataset.size = "5810";
// console.log(lessonText.dataset.size);

// // дата-сайз-валуй

// console.log(lessonText.dataset.sizeValue);



// -----------------------------

// полезные свойства

const link = document.querySelector('.lesson__link');

// получаем тег элемента
console.log(link.tagName);

// скрыть\ показать элемента
link.hidden = true;
console.log(link.hidden);


