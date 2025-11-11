// const user = {
//     name: "Антон",
//     lastname: 'Гетун',
//     age: 13,
//     friends: [
//         'Артем',
//         'Давід',
//         'Тимофій',
//         'Катерина'
//     ]
// };
// console.log(user);

// // Перший варіант

// const json = JSON.stringify(user);
// console.log(json);

// const jsonParse = JSON.parse(json);
// console.log(jsonParse);

// // Другий варіант (фігня)

// const jsonTwo = JSON.parse(JSON.stringify(user));
// console.log(jsonTwo);



// Створіть об'єкт JSON з інформацією про книгу. Книга повинна мати наступні поля:
// назва книги
// автор книги
// рік видання
// жанр
// Перевірте, що ваш JSON є коректним за допомогою методу JSON.parse().

// const book = '{"name":"Книга","author":"qwerty","age":32,"genre":"fantasy"}'
// const parseBook = JSON.parse(book);
// console.log(parseBook);



const colors = JSON.parse('[{ "hex": "#f44336", "rgb": "244,67,54" },{ "hex": "#e91e63", "rgb": "233,30,99" },{ "hex": "#9c27b0", "rgb": "156,39,176" },{ "hex": "#673ab7", "rgb": "103,58,183" },{ "hex": "#3f51b5", "rgb": "63,81,181" },{ "hex": "#2196f3", "rgb": "33,150,243" },{ "hex": "#00bcd4", "rgb": "0,188,212" },{ "hex": "#009688", "rgb": "0,150,136" },{ "hex": "#4caf50", "rgb": "76,175,80" },{ "hex": "#ffeb3b", "rgb": "255,235,59" },{ "hex": "#ff9800", "rgb": "255,152,0" },{ "hex": "#795548", "rgb": "121,85,72" },{ "hex": "#607d8b", "rgb": "96,125,139" }]');

// console.log(colors);

// Написати скрипт colorpicker.js. Кожна карточка повинна бути забарвлена відповідним кольором. Фон сторінки повинен змінюватися відповідно кольору картки на яку натиснув користувач.

const boxEl = document.querySelector('.box');
const itemEl = document.querySelector('.item');

const colorPicker = (array) => {

    boxEl.innerHTML = array.map(({ hex, rgb }) => {
        return `<li class="item" style="background-color: ${hex}; width: 100px; height: 100px;">
                    <p>HEX: ${hex}</p>
                    <p>RGB: ${rgb}</p>
                </li>`;
    }).join("");
};

boxEl.addEventListener('click', (event) => {
    if (event.target.nodeName !== "LI") {
        return;
    }

    const color = event.target.style.backgroundColor;

    document.body.style.backgroundColor = color;
    
});
    
colorPicker(colors);