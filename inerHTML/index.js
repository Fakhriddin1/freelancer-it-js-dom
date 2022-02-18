// // получаем объект
// const textElement = document.querySelector('.lesson__text');

// // получаем содержимое объекта "как есть" вместе с HTML
// const textElementContent = textElement.innerHTML; 
// console.log(textElementContent);

// // перезаписываем содержимое объекта
//  textElement.innerHTML = 'Живи а работай в свободное время!';
 


//-------------------------------

// // Получаем объект
// const textElement = document.querySelector('.lesson__text');


// // Получаем содержимое объекта "как есть" вместе с HTML
// const textElementContent = textElement.innerHTML;
// console.log(textElementContent);

// // Дописиваем содержимое объекта
// textElement.innerHTML = `<p>${textElementContent} </p> <p>Живи, а работай в <span class = "yellow"> свободное </span> время! </p>`;

// console.log(textElement.innerHTML);


//-------------------------------

// // Получаем объект
// const textElement = document.querySelector('.lesson__text');

// // Получаем водержимое объекта "Как есть"
// // вместе c HTML а также сам элемент 
// const textElementContent = textElement.outerHTML;
// console.log(textElementContent);

// textElement.outerHTML = `<p>Живи, а работай в <span class = "yellow">Свободное</span> время! </p>`;

// console.log(textElement.outerHTML);


//--------------------------------------


// Получаем объект
const textElement = document.querySelector('.lesson__text');
const textElementContent = textElement.textContent;
console.log(textElementContent);

// // Полезная возмиожность textContent - записывать текст "Безопасном способом"

// textElement.textContent = `<p>  Живи, а работай в <span class = "yellow">Свободное</span> время! </p>`;

// console.log(textElement.textContent);




//--------------------------------------------

// Получаем объект
const textElement = document.querySelector('.lesson_text');
const getcomment = textElement.nextSibling;

console.log(getcomment);
confirm.log(getcomment.data);

// ИЗменение текстового узла/коментария
getcomment.data = 'Привет';
console.log(getcomment.data);