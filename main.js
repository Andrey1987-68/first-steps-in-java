

let names = ['andrey', 'max', 'ilija'];
let object = [
    {
        name: 'Andry',
        age: 32,
        skill: 'ST'
    },
    {
        name: 'Max',
        age: 40,
        skill: 'Milwauke'
    },
    {
        name: 'Ivan',
        age: 31,
        skill: 'Nihuya'
    }
]

/*
 * Пример добавления элементов li на страницу 
 * <ui> это список, в него можно добавлять элементы li это надо 
 * еще посмотреть.
 * Обнуление скроки ввода делаем простым спобом value_text.value=''
 */
document.querySelector('.li_button').onclick=function(e){
    e.preventDefault();
    let list=document.querySelector('.list2');
    let value_text=document.querySelector('.li_input');
    let li=document.createElement('li');
    li.innerText=value_text.value;
    list.appendChild(li);
    value_text.value='';
}
/*
 * Пример работы с DOM будем менять цвет блока , перемещать его 
 * будем менять содержимое текстовой части 
 * toggle метод проверяет если класс есть он его удаляет, если 
 * класса нет он его добавляет.
 * this обращение к событию которое его вызвало
 * classlist работа с классом в css добавление, удаление , заменя и прочее
 * так же есть изменение цвета элемента через style
 * нужно обратить внимание на innerHTML если нужно вывести текст с элементами 
 * HTML , если нужно вывести просто текст , то используем innetText
 */
document.querySelector('.block').onclick = function () {
    this.classList.toggle('blue');
    this.classList.toggle('position-x');
    document.querySelector('.text').innerHTML = '<h2 class="text">This is work!</h2>';
    document.querySelector('.text').style.color = '#6C8784';
}

/*
 * Пример оформления функции, в примере returne возвращает 
 * Объект похожий на структуру
 */
function myFunc(a, b, c) {
    let D = null,
        x1 = null,
        x2 = null
    D = (b * b) - (4 * a * c);
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    return {
        D: D,
        x1: x1,
        x2: x2
    }
}
/*
 * Пример обращения к элементу html , на форме есть элемент 
 * кнопка, button у этой кнопки есть класс, вот через этот класс мы 
 * к ней и обращаемся. onclick отслеживает нажатие на кнопку. далее 
 * выполняется какая либо фукнция. в нашем примере выполняется расчет
 * по формуле которая описана ниже. 
 * e.preventDefault(); вот эта штука.. до конца не понял, но вроде как 
 * отменяет действие которое должно совешиться по нажатию кнопки.
 * конкретно здесь обнавляется вся форма. вот этой функцией мы и не даем
 * всей форме обновиться. про это надо еще почитать.
 * Объект похожий на структуру
 */
document.querySelector('.push').onclick = function (e) {
    e.preventDefault();
    let a = document.querySelector('.a').value;
    b = document.querySelector('.b').value;
    c = document.querySelector('.c').value;
    let result = myFunc(a, b, c);
    document.querySelector('.D').innerText = result.D;
    document.querySelector('.x1').innerText = result.x1;
    document.querySelector('.x2').innerText = result.x2;
}
/*
 * Вывод в консоль , она находится в инструментах разработчика
 */
console.log(names);

/*
 * Цикл в котором добавляются дополнительные элементы в html код
 * нужно обратить внимание на += это что бы не происходила полная
 * замена html кода а добавлялись новые пункты. код выше:
 */
for (let i = 0; i < names.length; i++) {
    document.querySelector('.list').innerHTML += `<li>${names[i]}</li>`;
}
/*
 * Еще один вид записи цикла for . перебор всех ключей key
 */
for (let key in names) {
    document.querySelector('.list').innerHTML += `<li>${names[key]}</li>`;
}
/*
 * Через цикл выводим сложный массив с объектом внутри
 */
for (let key2 in object) {
    document.querySelector('.list').innerHTML += `<li>Имя: ${object[key2].name}, Возраст: ${object[key2].age}</li>`;
}