// получаем объект
const textElement = document.querySelector('.lesson__text');

// Клонирование юез дочерных элементов
const cloneTextElement = textElement.cloneNode();

// глубокое клонирование вместе с содержимым
// const cloneTextElement = textElement.cloneNode(true);

const lessonBlock = document.querySelector('.lesson');
lessonBlock.append(cloneTextElement);
