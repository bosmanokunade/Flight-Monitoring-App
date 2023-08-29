//document.getElementById("count-el").innerText= 7

/*let count= 4
count = count + 1

console.log(count)

*/
let name= "Bosman"
let greeting= "Hi, my name is "

let myGreeting= greeting + name
console.log(myGreeting);

let countEl= document.getElementById("count-el")

let saveEl= document.getElementById('save-el')




let count= 0
function increment() {
  count += 1
  countEl.textContent= count
}

function save(){
  let countStr = count + "-"
  saveEl.textContent += countStr
  countEl.textContent= 0
  count= 0
}

//increment()

let message = "You have three new notifications"
console.log(message);




/*
let BonusPoints= 50

BonusPoints = BonusPoints + 50
console.log(BonusPoints);

BonusPoints = BonusPoints - 75
console.log(BonusPoints);

BonusPoints = BonusPoints + 45

console.log(BonusPoints);*/

//function increment() {
//  console.log("A button was clicked")
//}

/*function number(){
  console.log("42");
}
number()
number()


let lap1 = 34
let lap2 = 33
let lap3 = 36

function Addition() {
  let lap1 = 34
  let lap2 = 33
  let lap3 = 36
    Sum= lap1+lap2+lap3
console.log(Sum);
}

Addition()
*/

/*let LapsCompleted = 0

/*function Increment() {
    LapsCompleted = LapsCompleted + 1
    console.log(LapsCompleted);
}*/
/*
function Increment() {
    LapsCompleted += 1
    console.log(LapsCompleted);
}

Increment()
Increment()
Increment()
*/
