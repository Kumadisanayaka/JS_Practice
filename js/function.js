// // // // let customerList = []

// // // // function addCustomerOnAction() {
// // // //     let name = document.getElementById("txtcustomerName").value;
// // // //     let address = document.getElementById("txtAddress").value;
// // // //     let age = document.getElementById("txtAge").value;
// // // //     let email = document.getElementById("txtEmail").value;
// // // //     let salary = document.getElementById("txtSalary").value;

// // // //     let customer = {
// // // //         name: name,
// // // //         address: address,
// // // //         age: age,
// // // //         email: email,
// // // //         salary: salary
// // // //     };

// // // //     customerList.push(customer);
// // // //     loadCustomersOnAction();
// // // //     document.getElementById("txtcustomerName").value = "";
// // // //     document.getElementById("txtAddress").value = "";
// // // //     document.getElementById("txtAge").value = "";
// // // //     document.getElementById("txtEmail").value = "";
// // // //     document.getElementById("txtSalary").value = "";
// // // //     console.log(customerList);
// // // // }

// // // // function loadCustomersOnAction() {
// // // //     let tblCustomers = document.getElementById("tblCustomer");

// // // //     let body = "";

// // // //     for (let i = 0; i < customerList.length; i++) {
// // // //         body += `<tr>
// // // //             <td>${customerList[i].name}</td>
// // // //             <td>${customerList[i].address}</td>
// // // //             <td>${customerList[i].age}</td>
// // // //             <td>${customerList[i].email}</td>
// // // //             <td>${customerList[i].salary}</td>
// // // //         </tr> `;

// // // //         tblCustomers.innerHTML = body;
// // // //     }
// // // //         console.log(tblCustomers);

// // // // }

// // // const name = "Pathum";

// // // name = "jagath";

// // let name = "Pathum";
// // let age = 25;
// // let isMe = true;
// // let empty;

// // console.log(typeof name);
// // console.log(typeof age);
// // console.log(typeof isMe);
// // console.log(typeof empty);

// // let name = "Kumara";
// // let age = 21;
// // let country = "Sri Lanka";
// // let isLearningJS = true;

// // console.log(typeof name);
// // console.log(typeof age);
// // console.log(typeof country);
// // console.log(typeof isLearningJS);

// // let value = 100;

// // console.log(value);
// // console.log(typeof value);

// // value = "Javascript";

// // console.log(value);
// // console.log(typeof value);

// // value = true;

// // console.log(value);
// // console.log(typeof value);

// let productName = "Laptop";
// let price = 999;
// let quantity = 2;
// let isAvalable = true;

// let total = price * quantity;

// console.log("Total : "+total);

// let age = 21;
// let hasLicense = true;

// let isCanDrive = age >= 18 && hasLicense === true;

// let isAdult = age >= 18;

// console.log(isCanDrive);
// console.log(isAdult);

// console.log(10 + 5);
// console.log("10" + 5);
// console.log("10" - 5);
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(true == 1);
// console.log(true === 1);

//Control Flow

// let marks = 82;

// if(marks >= 75){
//     console.log("A");
// }else if(marks >= 65){
//     console.log("B");
// }else if(marks >= 55){
//     console.log("C");
// }else if(marks >= 35){
//     console.log("S");
// }else{
//     console.log("Fail");
// }

// let number = 10;

// console.log(number <= 0 ? "Negative" : "Positive");

// let role = "admin";

// switch (role) {
//     case "admin":
//         console.log("Full access");
//         break;
//     case "user":
//         console.log("Limited access");
//         break;
//     case "guest":
//         console.log("Guest access");
//         break;
//     default:
//         console.log("Invalid role");
//         break;
// }


// let username = "admin";
// let password = "1234";

// if(username === "admin" && password === "1234"){
//     console.log("Login successful");
// }else if(password !== "1234"){
//     console.log("Incorrect password");
// }else{
//     console.log("User not found");
// }

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// let total = 0;

// for (let i = 0; i<=10; i++) {
//     total = total + i;
// }

// console.log("Total : "+total);

// let number = 5;

// for(let i = 0; i <= 10; i++){
//     console.log(`${number} x ${i} = ${number * i}`);
    
// }

// let i = 10;

// while (i >= 0) {
//     console.log(i);
//     i--;
// }


// let secretNumber = Math.floor(Math.random()*10)+1;
// let attempts = 0;

// function submitBtnOnAction(){


//     let guessNumber = Number(document.getElementById("guess-number").value);
//     let displayMsg = document.querySelector(".display-msg");
//     let guessbtn = document.querySelector(".submitbtn");

//     attempts++;

//     if(guessNumber === secretNumber){
//         displayMsg.textContent = "Congratulations! You guessed correctly.";

//         guessbtn.disabled = true;
//     }else if(guessNumber < secretNumber){
//         displayMsg.textContent = "Too Low!";
//     }else{
//         displayMsg.textContent = "Too High!";
//     }

//     if(attempts === 3 && guessNumber !== secretNumber){
//         displayMsg.textContent = "Your attempts over!";
//         guessbtn.disabled = true;
//     }

// }

// function sayhello() {
//     console.log("Hello Javascript!");
    
// }

// sayhello();
// sayhello();
// sayhello();

// function greetUser(name){
//     console.log("Hello, "+name);    
// }

// greetUser("Pathum");
// greetUser("Kasun");

// function introduceUser(name, age){
//     console.log(`My name is ${name} and I am ${age} years old`);
    
// }

// introduceUser("pathum",25);

// function multiplyNumbers(a,b) {
//     return a * b;
// }

// let result = multiplyNumbers(5,6)

// console.log(`Result : ${result}`);

// function checkEvenOrOdd(number) {
//     return number % 2 === 0 ? "Even" : "Odd";
// }

// let result = checkEvenOrOdd(6)

// console.log(`Result : ${result}`);

// function createProduct(name,price) {
//     return{
//         name : name,
//         price : price
//     }
// }

// let user = createProduct("Laptop",125000.00);

// console.log(user);

// console.log(user.name);
// console.log(user.price);


// function calculatePrice(price, quantity = 1) {
//     return quantity * price;
// }

// let total = calculatePrice(100,3);

// console.log(`Total : ${total}`);

// const calculateDiscount = function(price, discount){
//     let discountPrice = (discount / 100) *  price;

//     return price - discountPrice;
// }

// let discountedPrice = calculateDiscount(100,20);

// console.log(`Discounted Price : ${discountedPrice}`);

// const calculateTotal = (price,qty) => price * qty;

// let total = calculateTotal(100,3);

// console.log(`Total : ${total}`);

// const checkAge = age => age >= 21 ? "Adult" : "Not Adult";

// let result = checkAge(10);

// console.log(`Result : ${result}`);

//Array using

// let fruits = ["Apple","Mango","Banana"];

// console.log(fruits);
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);

// console.log(fruits.length);

// let students = ["Kumara", "Kasun", "Pathum", "Nimal"];

// for (let student of students) {
//     console.log(student);   
// }

// let numbers = [10,20,30,40,50,60]
// let total = 0;
// for (let number of numbers) {
//     total = total + number;
// }

// console.log(`Total : ${total}`);

// let numbers = [10, 15, 22, 31, 40, 55, 60];
// let count = 0;

// for(let number of numbers){
//     if (
//         number % 2 === 0  
//     ) {
//         count++;
        
//     }
// }

// console.log(`Even number count : ${count}`);

let numbers = [11, 20, 33, 40, 55, 60, 72];

let evenNumbers  = numbers.filter(number => number % 2 === 0);

console.log(evenNumbers);


