// - є масив
let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв ' +
            'мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. ' +
            'У нього також є дві молодші сестри — Ліса і Меґґі.' +
            ' Барт є втіленням образу бешкетника та посереднього учня у школі. ' +
            'Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». ' +
            'Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. ' +
            'Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — ' +
            'постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. ' +
            'Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ' +
            'ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает ' +
            'в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, ' +
            'большую часть времени проводит в заботе о доме, детях и Гомере. ' +
            'Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. ' +
            'Мардж — единственный член семьи, посещающий церковь добровольно. ' +
            'Старается поддерживать нравственность не только своей семьи, но и всего города. ' +
            'Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны».' +
            ' Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов ' +
            'прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.

for(const simpson of simpsons){
    // let member=document.getElementsByClassName('member')[0];
    // let h2=document.createElement('h2')
    // let img=document.createElement('img')
    // h2.innerText=simpson.name
    // h2.innerText=simpson.surname
    //  h2.innerText=simpson.age
    //  h2.innerText=simpson.info
    //  img.src=simpson.photo
    //  h2.style.background='silver'
    // member.appendChild(h2)
    // member.appendChild(img)

    let div=document.createElement('div')
    div.className='member'
    let h2=document.createElement('h2')
    let img=document.createElement('img')
    h2.innerText=simpson.name
    h2.innerText=simpson.surname
     h2.innerText=simpson.age
     h2.innerText=simpson.info
     img.src=simpson.photo
    div.style.background='silver'
    div.style.width=`700px`
    document.body.appendChild(div)
    div.appendChild(h2)
    div.appendChild(img)

}
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту
//
// Цикл в циклі
// - Є масив

// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих
// властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png
// ------------------
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for(let course of coursesArray) {
    let divMain = document.createElement('div')
    divMain.className = 'mainTable'
    divMain.style.width = `1000px`
    divMain.style.height = `900px`
    divMain.style.border = `4px solid red`
    let divTitle = document.createElement(`div`)
    divTitle.className = 'titleTable'
    divTitle.style.width = `900px`
    divTitle.style.height = `100px`
    divTitle.style.border = `4px solid blue`
    divTitle.style.margin = `30px`
    divTitle.innerText = `${course.title}`
    divTitle.style.display = `flex`
    divTitle.style.justifyContent = `center`
    divTitle.style.alignItems = `center`
    divTitle.style.fontSize = `40px`
    let divForMonthAndHour = document.createElement('div')
    divForMonthAndHour.className = 'divForMonthAndHour'
    divForMonthAndHour.style.display = `flex`
    divForMonthAndHour.style.gap = `10px`
    divForMonthAndHour.style.margin = `30px`
    let divMonth = document.createElement('div')
    divMonth.className = 'divMonth'
    divMonth.style.width = `300px`
    divMonth.style.height = `70px`
    divMonth.style.border = `4px solid blue`
    divMonth.innerText = `${course.monthDuration} month`
    divMonth.style.display = `flex`
    divMonth.style.justifyContent = `center`
    divMonth.style.alignItems = `center`
    divMonth.style.fontSize = `40px`
    let divHour = document.createElement('div')
    divHour.className = 'divHour'
    divHour.style.width = `600px`
    divHour.style.height = `70px`
    divHour.style.border = `4px solid blue`
    divHour.innerText = `${course.hourDuration} hours`
    divHour.style.display = `flex`
    divHour.style.justifyContent = `center`
    divHour.style.alignItems = `center`
    divHour.style.fontSize = `40px`
    let divForModules = document.createElement('div')
    divForModules.className = 'divForModules'
    divForModules.style.width = '900px'
    divForModules.style.height = '500px'
    divForModules.style.border = `4px solid blue`
    divForModules.style.margin = `30px`
    let divFirstModule = document.createElement('div')
    divFirstModule.style.width = '800px'
    divFirstModule.style.height = '30px'
    divFirstModule.style.margin = '30px'
    divFirstModule.style.border = `4px solid blue`
    divFirstModule.innerText = `${course.modules[0]}`
    divFirstModule.style.display = `flex`
    divFirstModule.style.justifyContent = `center`
    divFirstModule.style.alignItems = `center`
    divFirstModule.style.fontSize = `30px`
    let divSecondModule = document.createElement('div')
    divSecondModule.style.width = '800px'
    divSecondModule.style.height = '30px'
    divSecondModule.style.margin = '30px'
    divSecondModule.style.border = `4px solid blue`
    divSecondModule.innerText = `${course.modules[1]}`
    divSecondModule.style.display = `flex`
    divSecondModule.style.justifyContent = `center`
    divSecondModule.style.alignItems = `center`
    divSecondModule.style.fontSize = `30px`
    let divThirdModule = document.createElement('div')
    divThirdModule.style.width = '800px'
    divThirdModule.style.height = '30px'
    divThirdModule.style.margin = '30px'
    divThirdModule.style.border = `4px solid blue`
    divThirdModule.innerText = `${course.modules[2]}`
    divThirdModule.style.display = `flex`
    divThirdModule.style.justifyContent = `center`
    divThirdModule.style.alignItems = `center`
    divThirdModule.style.fontSize = `30px`

    document.body.appendChild(divMain)
    divMain.appendChild(divTitle)
    divMain.appendChild(divForMonthAndHour)
    divForMonthAndHour.appendChild(divMonth)
    divForMonthAndHour.appendChild(divHour)
    divMain.appendChild(divForModules)
    divForModules.appendChild(divFirstModule)
    divForModules.appendChild(divSecondModule)
    divForModules.appendChild(divThirdModule)
    for (let i = 3;i<course.modules.length;i++) {
        let ill = document.createElement('li')
        ill.innerText = course.modules[i]
        divForModules.appendChild(ill)
        ill.style.margin=`15px`
    }
}

//     - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.
let block=document.createElement('div')
block.className='beta'
block.style.background='red'
block.style.backgroundColor='green'
block.style.fontSize='20px'
block.innerText='ddssdfsdfdsf'
document.body.appendChild(block)
document.body.appendChild(block.cloneNode(true))
// - Є масив:
//   let array=  ['Main','Products','About us','Contacts']
// Взяти файл template1.html та додати в нього скріпт котрий для кожного елементу масиву створює li та додає його до блоку .menu
// Завдання робити через цикли.
let array=  ['Main','Products','About us','Contacts']
for (let i=0;i<array.length;i++){
    let li=document.createElement('li')
    li.innerText=array[i]
    block.appendChild(li)
}


// - Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.
for (let course of coursesAndDurationArray) {
    let divForCourse = document.createElement('div')
    divForCourse.style.width = `500px`
    divForCourse.style.height = `100px`
    divForCourse.style.border = `4px solid black`
    divForCourse.innerText = `${course.title} ${course.monthDuration}`
    block.appendChild(divForCourse)
}
//
// - Є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
//
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  
// з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.
let item=document.createElement('div')
document.body.appendChild(item)
item.className='item'
item.style.width=`700px`
item.style.height=`1000px`
item.className='ssss'
item.style.border=`4px solid black`
item.style.background=`silver`
for(let course of coursesAndDurationArray){
   
    let h1=document.createElement('h1')
    h1.className='heading'
    h1.innerText=course.title
    let p=document.createElement('p')
    p.className='description'
    p.innerText=course.monthDuration
    
    item.appendChild(h1)
    item.appendChild(p)
}
// -----------
//
// - Створити довільний елемент з id = text.  Використовуючи JavaScript, зробіть так,
// щоб при натисканні на кнопку зникав елемент з id="text".
let id=document.createElement('div')
document.body.appendChild(id)
id.id='text'
id.style.width=`600px`
id.style.height=`600px`
id.style.background=`red`
id.style.border=`4px solid black`
id.onclick=function (){
    id.style.display=`none`
}
//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати 
//     інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let inputForm=document.createElement("form")
document.body.appendChild(inputForm)
let input=document.createElement("input")
let butt=document.createElement("button")
inputForm.appendChild(input)
inputForm.appendChild(butt)
input.alt="your age"
input.type="number"
input.name='age'

butt.innerText='save'
inputForm.style.width=`600px`
inputForm.style.height=`600px`
// inputForm.style.background=`green`
inputForm.style.border=`4px solid black`

inputForm.onsubmit=function (){
    if(input.value>18){
        document.write(`Your age are bigger than 18`)
    }
    if(input.value<18){
        document.write(`Your are under 18 `)
    }else {
        document.write(`Your age are equal 18`)
    }
}

// *** Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

let d=document.createElement("div")
let firstInput=document.createElement('input')
let secondInput=document.createElement('input')
let thirdInput=document.createElement('input')
let specialButton=document.createElement('button')
document.body.appendChild(d)
d.append(firstInput,secondInput,thirdInput,specialButton)



d.className="the last"
d.style.width=`700px`
d.style.height=`700px`
d.style.border=`2px solid black`
specialButton.style.width=`100px`
specialButton.style.height=`20px`
specialButton.innerText=`click on me`
firstInput.type="number"
secondInput.type="number"


specialButton.onclick=()=>{
    let table=document.createElement('table')
    d.appendChild(table)

    for (let i=0;i<firstInput.value;i++){
        let tr=document.createElement("tr")
        tr.innerText=thirdInput.value
        table.appendChild(tr)
        tr.innerText=null

        for (let j=0;j<secondInput.value;j++){
            let td=document.createElement("td")
            td.innerText=thirdInput.value
            table.appendChild(td)
        }
    }

}