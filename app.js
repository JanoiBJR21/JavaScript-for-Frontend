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
function sum(a, b) {
    return a + b; //return ได้ให้ทำการบวก
}
let result = sum(5, 20);
console.log(result); //result:15
document.getElementById("resultt").innerHTML = result
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
