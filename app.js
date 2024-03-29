///////////////////
//////function/////
///////////////////
function show() {
    console.log("Welcome Janoi")
}
show()

/////////////////////
//////parameters/////
/////////////////////
function showMessage(from, text) { //arguments: from, text
    // console.log(from + " : " + text)
    console.log(`${from} : ${text}`)
}
showMessage("APICHAT", "WONGTALA") //APICHAT : WONGTALA

/////////////////////
////////return///////
/////////////////////
// function sum(a, b) {
//     return a + b; //return ได้ให้ทำการบวก
// }
// let result = sum(5, 20);
// console.log(result); //result:15
// document.getElementById("resultt").innerHTML = result
////////////////////
function showMovie(age) {
    if (age < 18) {
        return;
    }
    console.log("showMovie")
}
showMovie(55)
////////////////////
// function sum(a, b) {
//     return;//return ไม่ได้ให้ทำอะไร
// }
// let result = sum(1, 2);
// console.log(result) //result:undefined
///////////////////////////////////
////////function declaration///////
///////////////////////////////////
///////////////////////////////////
////////function expression////////
///////////////////////////////////

///////////////////////////////////
////////Arrow function/////////////
///////////////////////////////////
const showMessage1 = () => { //arguments: from, text
    console.log("APICHAT --:-- WONGTALA")
}
showMessage1() //APICHAT --:-- WONGTALA
////////////
// function sum(a, b) {
//     return a + b; //return ได้ให้ทำการบวก
// }
// let result = sum(5, 20);
// console.log(result); //result:15
// let sum = (a, b) => a + b;
// let result = sum(1, 9);
// console.log(result)
///////////
// function square(n) {
//     return n * n
// }
const square = n => n * n
// const result = square(5);
console.log(square(5))
/////////////
// function sayHi() {
//     console.log("Hi Janoi")
// }
const sayHi = () => console.log("Hi Janoi1")

sayHi();
/////////////
let sum = (a, b) => {
    let result = a + b;
    return result;
};
console.log(sum(5, 20));

///////////////////////////////////
////////Object/////////////////////
///////////////////////////////////
// const user = { //Object
//     name: "Janoi", //properties --//key และ value
//     age: 28
// }
// console.log(user)
// user.age = 30 //แก้ไขอายุ
// console.log(user)
// user.height = 165 //เพิ่มส่วนสูง
// console.log(user)
// user.isSingle = true
// console.log(user)
/////////////////
const user = {
    name: "janoi",
    age: 28,
    size: {
        height: 165,
        with: 60
    }
}
console.log(user)
console.log(user.age)
console.log(user.size)
console.log(user.size.height)

///////////////////////
////////Array/////////
///////////////////////
//การประกาศ array 2 วิธี
// let arr = new Array();
// let arr = new [];

const fruits = ["Apple", "Orange", "Plum"]
console.log(fruits)//['Apple', 'Orange', 'Plum']
console.log(fruits[0])//Apple
console.log(fruits[1])//Orange
console.log(fruits[2])//Plum

fruits[2] = "Pear" //แทนค่า index ที่ 2

console.log(fruits)//['Apple', 'Orange', 'Pear']
console.log(fruits[0])//Apple
console.log(fruits[1])//Orange
console.log(fruits[2])//Pear

fruits.push("Banana")//การเพิ่มสมาชิกต่อท้าย "Banana"

console.log(fruits)//['Apple', 'Orange', 'Pear', 'Banana']
console.log(fruits[0])//Apple
console.log(fruits[1])//Orange
console.log(fruits[2])//Pear
console.log(fruits[3])//Banana

fruits.pop()//การลบสมาชิกท้าย "Banana"

console.log(fruits)//['Apple', 'Orange', 'Pear']
console.log(fruits[0])//Apple
console.log(fruits[1])//Orange
console.log(fruits[2])//Pear

fruits.unshift("Berry")//การเพิ่มสมาชิกข้างหน้า "Berry"

console.log(fruits) //['Berry', 'Apple', 'Orange', 'Pear']
console.log(fruits[0])//Berry
console.log(fruits[1])//Apple
console.log(fruits[2])//Orange
console.log(fruits[3])//Pear

fruits.shift()//การลบสมาชิกข้างหน้า "Berry"

console.log(fruits)//['Apple', 'Orange', 'Pear']
console.log(fruits.length)//การหาความยาวของ Array = (3)
///////////////////////
////////Loop/////////
///////////////////////
//ตัวอย่าง loop 2 แบบ
let fruitss = ["Apple", "Orange", "Plum"];
//fruitss.length = 3;
//0 1 2
for (let i = 0; i < fruitss.length; i++) {////เมื่อต้องการใช้ index
    console.log(fruitss[i]);
}
////////
// for (let fruit of fruitss) {//เมื่อไม่ต้องการใช้ index
//     console.log(fruit);
// }

///////////////////////
////////Method/////////
///////////////////////
//ตัวอย่าง Method 4 ตัว
//arr.push(...item)-เพิ่ม item ไปข้างหลัง//-ใช้บ่อย
//arr.pop()-นำค่าข้างหลังออก            //-ใช้บ่อย
//arr.shift()-นำค่าข้างหน้าออก
//arr.unshift(...item)-เพิ่ม item ไปข้างหน้า

//Ex..concat -ใช้เมื่อเราต้องการรวม array หลายอันเข้าด้วยกัน
const arr = [1, 2];
const arr1 = [7, 8];
const addArr = arr.concat([3, 4]);
console.log(addArr);//[1, 2, 3, 4]
console.log(arr.concat([3, 4], [5, 6], arr1));//[1, 2, 3, 4, 5, 6, 7, 8]

//Ex..find -การหาสมาชิกใน array
const arr2 = [
    { name: "Janoi", age: 30 },
    { name: "BJR", age: 20 },
    { name: "Apichat", age: 15 }
];
const target = arr2.find(i => i.age === 20);
console.log(target);//{name: 'BJR', age: 20}

//Ex..filter -การคัดกรองสมาชิกใน array
const users = [
    { name: "Janoi", age: 30 },
    { name: "BJR", age: 20 },
    { name: "Api", age: 15 },
    { name: "chat", age: 15 }
];
const tUuser = users.filter(i => i.age === 15);
console.log(users);
console.log(tUuser);//[{name: "Api", age: 15}, {name: "chat", age: 15}]

//Ex..map การแปลงสมาชิกใน array
const userss = [
    { id: 1, name: "Janoi", age: 30 },
    { id: 2, name: "BJR", age: 20 },
    { id: 3, name: "Api", age: 15 },
    { id: 4, name: "chat", age: 15 }
];
const tUser1 = userss.map(i => i.id + " : " + i.name);
const tUser2 = userss.map(i => i.id * 2);
console.log(tUser1);//['1 : Janoi', '2 : BJR', '3 : Api', '4 : chat']
console.log(tUser2);//[2, 4, 6, 8]

//Spread Syntax of ...Array
//Ex..Spread operator -การกระจายสมาชิกของ array ออกมาใช้งาน ใช้แทน Concat ได้
const arr3 = [2, 3, 4];
const arr4 = [6, 7, 8];
const marged = [1, ...arr3, 5, ...arr4];
console.log(marged);//[1, 2, 3, 4, 5, 6, 7, 8]

//Spread Syntax of ...Object
//Ex..Spread Syntax ในกรณีของ object เป็นการกระจายของ Properties of Object เช่น การรวมของ Object
const user3 = {
    name: "Apichat",
    age: "28"
};
const details = {
    skill: "React",
    lenguage: "JavaScript"
};
const instructor = { ...user3, ...details };
console.log(instructor);//{name: 'Apichat', age: '28', skill: 'React', lenguage: 'JavaScript'}

//Destructuring -การกำหนดค่าแบบ Destructuring จะช่วยให้สามารถเอา สมาชิกที่อย่ใน Array หรือ Object บางตัว-
//ออมาอยู่ในตัวแปรได้ ซึ่งสิ่งนี้จะทำให้เราสะดวกมากๆ
//Ex..Destructuring of Array
const userrr = ["Apichat", "Wongtala"];
const [firstName, larstName] = userrr;
console.log(userrr);//['Apichat', 'Wongtala']
///////////////
const [u1, u2, u3] = ["Janoi", "BJR", 28];
console.log(u1, u2);//Janoi BJR
console.log(u1, u2, u3);//Janoi BJR 28

//Ex..Destructuring of Object
let options = {
    title: "Menu",
    width: 100,
    height: 200
};
let { title, width, height } = options;
console.log(title)//Menu
console.log(width)//100
console.log(title, width, height)//Menu 100 200
console.log(options.title, options.height)//Menu 200
//////
let { title: ti, width: wi, height: he } = options;
console.log(ti)//Menu
console.log(wi)//100
console.log(ti, wi, he)//Menu 100 200
//////////////////////
/////////////////////
const fruitsss = ["Apple", "Orange", "Plum"];
const resultss = fruitsss.map(fruit => {
    if (fruit === "Apple") {
        return fruit;
    } else {
        return fruit + "s";
    }
});
console.log(resultss);
const { name: n, surname } = {
    name: 'Janoi',
    surname: 'chbsbcnhj'
}
console.log(n)
let sds = {
    name: "ajdshasj",
    zix: {
        hei: 100,
        wid: 50
    }
}
const hei = sds.zix["hei"]
console.log(hei)
////////////////////
const gfdd = ["ass", "sda", "hgyf"]
for (let gfd of gfdd) {
    console.log(gfd)
}
///////////////////
const actors = [
    { name: "tg", sur: "ha" },
    { name: "vi", sur: "di" },
    { name: "wi", sur: "sm" }
];
const resu = actors.filter(actor => actor.sur === "di");
console.log(resu);
