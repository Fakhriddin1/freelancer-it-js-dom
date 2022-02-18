//Получение объекта

const textElement = document.querySelector('.lesson__text');

//Вставте текст, THML, элемент

textElement.insertAdjacentElement(
    'afterend',
    <p> Живи, а работай в 
        <span class="yellow">Свободное</span> время!
    </p>
)


/*

"beforebegin" - вставить html непосредственно перед textElement
"afterbegin" - вставить html в начало textElement,
"beforeend" - вставить html в конец textElement,
"afterend" - вставить html в непосредственно после html.

*/

// создание нового элемента (тега)
const newElement = document.createElement('div');

//наполняем новый элемент

newElement.insertAdjacentElement(
    'beforeend',
    newElement
)