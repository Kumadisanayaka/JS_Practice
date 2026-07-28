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

// let numbers = [11, 20, 33, 40, 55, 60, 72];

// let evenNumbers  = numbers.filter(number => number % 2 === 0);

// console.log(evenNumbers);

// let numbers = [10, 20, 30, 40];

// let total = numbers.reduce((Sum, number) => Sum + number, 0);

// console.log(total);

// let numbers = [12, 45, 7, 89, 34, 56];

// let maximum = numbers.reduce((max,number)=> { return number > max ? number : max;},numbers[0] );

// console.log(maximum);

// let numbers = [5, 12, 18, 25, 30];

// let twentyThanNumber = numbers.find(number => number > 20 )

// console.log(twentyThanNumber);

// let numbers = [2, 4, 6, 8];

// let result = numbers.some(number => number > 10)

// console.log(result);

// let numbers = [10, 20, 30, 40];

// let result = numbers.every(number => number % 5 === 0)

// console.log(result);

// let numbers = [45, 12, 89, 7, 34, 56];

// numbers.sort((a,b)=> b-a)

// console.log(numbers);

//object practice

// let car = {
//     brand : "Toyota",
//     model : "Corolla",
//     year : 2022
// }

// console.log(car.brand);
// console.log(car.model);
// console.log(car.year);

// let student = {
//     name: "Pathum",
//     age: 25,
//     course: "JavaScript",
//     city : "Kandy"
// };

// student.age = 26

// delete student.course

// console.log(student.name);
// console.log(student.age);
// console.log(student.course);
// console.log(student.city);


// let car = {
//     brand : "Toyota",
//     model : "Corolla",

//     showDetails : function(){
//         console.log(`Brand : ${this.brand}`);
//         console.log(`Model : ${this.model}`);
//     }
// }

// car.showDetails()

// let person = {
//     name: "Pathum",
//     age: 25,

//     introduce() {
//        console.log(`My name is ${this.name} and I am ${this.age} years old.`);
       
//     }
// };

// person.introduce()

// let students = [
//     {
//         name: "Pathum",
//         age: 25,
//         course: "JavaScript"
//     },
//     {
//         name: "Kasun",
//         age: 22,
//         course: "Java"
//     },
//     {
//         name: "Nimal",
//         age: 24,
//         course: "Python"
//     }
// ];

// for(let i = 0; i < students.length; i++){
//     console.log(`${students[i].name}`);
    
// }

// let studentCourseUpdate = students.find(student => student.name === "Kasun")

// studentCourseUpdate.course = "JavaScript"

// console.log(studentCourseUpdate);

// let products = [
//     { name: "Laptop", price: 1000 },
//     { name: "Mouse", price: 50 },
//     { name: "Keyboard", price: 100 }
// ];

// let total = products.reduce((total,product) => total = total + product.price,0 );


// console.log(`Total : ${total}`);

// let products = [
//     { name: "Laptop", price: 1000, inStock: true },
//     { name: "Mouse", price: 50, inStock: true },
//     { name: "Keyboard", price: 100, inStock: false },
//     { name: "Monitor", price: 300, inStock: true }
// ];

// let total = products.filter(product => product.price > 100)
//             .reduce((total,product)=> total = total + product.price,0 )

//             console.log(total);
            
// let products = [
//     { name: "Laptop", price: 1000, quantity: 1 },
//     { name: "Mouse", price: 50, quantity: 2 },
//     { name: "Keyboard", price: 100, quantity: 1 },
//     { name: "Monitor", price: 300, quantity: 2 }
// ];

// let finaltotal = products.filter(product => product.price > 100)
//             .map(product => product.price * product.quantity)
//             .reduce((total,price)=>total + price,0)

// console.log(finaltotal);

// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     year: 2022
// };

// let {brand,model,year} = car;

// console.log(brand);
// console.log(model);
// console.log(year);

// let colors = ["Red", "Green", "Blue"];

// let [first, second, third] = colors;

// console.log(first);
// console.log(second);
// console.log(third);

// let numbers1 = [1, 2, 3];
// let numbers2 = [4, 5, 6];

// let allNumbers = [...numbers1, ...numbers2];

// console.log(allNumbers);

// let fruits1 = ["Apple", "Mango"];
// let fruits2 = ["Banana", "Orange"];

// let allFruites = [...fruits1,...fruits2]

// console.log(allFruites);

// let product = {
//     name: "Laptop",
//     price: 1000,
//     category: "Electronics"
// };

// let UpdateProduct = {
//     ...product,
//     price : 1200
// };

// console.log(UpdateProduct);

// let user = {
//     name: "Pathum",
//     age: 25
// };

// let address = {
//     city: "Kandy",
//     country: "Sri Lanka"
// };

// let userDetails = {
//     ...user,
//     ...address
// };

// console.log(userDetails);

// function addNumbers(...numbers) {
//     console.log(numbers);
// }

// addNumbers(10, 20, 30, 40);

// function calculateTotal(...prices) {
//   let total = prices.reduce((total,price)=> total + price)
//   return total;
// }

// console.log(calculateTotal(100, 200, 50));

// let user = {
//     name: "Kumara",
//     age: 25,
//     city: "Kandy",
//     country: "Sri Lanka"
// };

// let {name, ...otherDetails} = user;

// console.log(name);
// console.log(otherDetails);

// let title = document.getElementById("title")

// title.textContent = "Hello JavaScript"

// let newMessage = document.getElementById("message")

// newMessage.innerHTML = "<strong>Welcome to JavaScript</strong>";

// let title = document.getElementById("title");

// title.classList.add("highlight");

// title.classList.remove("highlight");

// console.log();

// let changebtn = document.getElementById("changebtn");

// changebtn.addEventListener("click",function(){
//     changebtn.classList.toggle("highlight");
// });

// let mybtn = document.getElementById("mybtn");

// mybtn.addEventListener("click",function(){
//     console.log("Button Clicked!")
// });
// let title = document.getElementById("title");
// let greetbtn = document.getElementById("greetbtn");

// greetbtn.addEventListener("click",function(){
//     title.textContent = "Hello JavaScript!";
    
// })

// let nameInput = document.getElementById("nameInput");
// let result = document.getElementById("result");
// let showbtn = document.getElementById("showName");

// nameInput.addEventListener("input",function(){
//     result.textContent = nameInput.value;
// });

// let number1 = document.getElementById("number1");
// let number2 = document.getElementById("number2");
// let result = document.getElementById("result");

// let addbtn = document.getElementById("addbtn");
// let subtractbtn = document.getElementById("subtractbtn");
// let multiplybtn = document.getElementById("multiplybtn");
// let dividebtn = document.getElementById("dividebtn");

// function calculate(operation) {
//     if(hasEmptyInput()){
//         result.textContent = "Please enter both number"
//         return;
//     }

//     let num1 = Number(number1.value);
//     let num2 = Number(number2.value);

//     if(operation==="add"){
//         result.textContent = num1 + num2;
//     }else if(operation==="subtract"){
//         result.textContent = num1 - num2;
//     }else if(operation==="multiply"){
//         result.textContent = num1 * num2;
//     }else if(operation==="divid"){
//         if(num2=== 0){
//             result.textContent = "cannot divide by zero"
//         }else{
//             result.textContent = num1 / num2;
//         }
//     }
// }

// addbtn.addEventListener("click",function(){
//     calculate("add");
// });

// subtractbtn.addEventListener("click",function() {
//    calculate("subtract");
// });

// multiplybtn.addEventListener("click",function(){
//   calculate("multiply");
// });

// dividebtn.addEventListener("click", function () {
//  calculate("divid");
// });

// function hasEmptyInput() {
//     return number1.value === "" || number2.value === "";
// }

// let btn = document.getElementById("btn");

// btn.addEventListener("click", function (event) {
//     console.log(event.target);
// });

// let buttons = document.querySelectorAll(".colorBtn");
// let result = document.getElementById("result");

// buttons.forEach(function (button) {
//     button.addEventListener("click", function (event) {
//         result.textContent = event.target.textContent;
//     });
// });

// let message = document.querySelector(".container p");

// message.textContent = "Hello DOM"

// let newMessage = document.querySelector(".container h1");

// let clickMebtn = document.querySelector(".container button")

// clickMebtn.addEventListener("click",function(){
//     newMessage.textContent = "DOM Manipulation";
// });

// let buttons = document.querySelectorAll(".colorBtn");
// let result = document.querySelector("#result")

// buttons.forEach(function(button){
//     button.addEventListener("click",function(event){
//         result.textContent = event.target.textContent;
//     })
// })

// let container = document.getElementById("container");

// let newElement = document.createElement("p");

// let newbtn = document.createElement("button");

// let newCard = document.createElement("div");

// let removeCard = document.createElement("button");

// newCard.classList.add("card");

// newbtn.textContent = "New Button"

// removeCard.textContent = "Remove Card";

// newElement.textContent = "Hello, I was created with JavaScript!";

// newCard.textContent = "Dynamic card"
// container.append(newCard);
// container.append(newElement);
// container.append(newbtn);
// container.append(removeCard);


// newbtn.addEventListener("click", function () {
//     console.log("New Button Clicked!");
// });

// removeCard.addEventListener("click",function(){
//     newCard.remove();
// })

// To Do App project
// let inputTask = document.getElementById("inputTask");

//    inputTask.addEventListener("keyup",function(){
        
//             console.log("key released");
//     })

// let addTask = document.getElementById("addTask");
// let taskList = document.getElementById("taskList");
// let message = document.getElementById("message");
// let taskForm = document.getElementById("taskForm");

// taskForm.addEventListener("submit",function(event){
//     if(hasEmptyInput()){
//         message.textContent = "please Enter a task"
//         return;
//     }

//     let task = document.createElement("li");

//     task.textContent = inputTask.value;

//     task.addEventListener("click",function(){
//         task.classList.toggle("completed");
//     })

//     let deletebtn = document.createElement("button");

//     deletebtn.textContent = "Delete";

//     taskList.append(task);
//     task.append(deletebtn);
//     inputTask.value = "";

//     deletebtn.addEventListener("click",function(){
//     event.stopPropagation();
//     task.remove();
    
//     });

//     event.preventDefault();
//     console.log("Form submit successful!");
// });

// function hasEmptyInput(){
//     return inputTask.value === "";
// }


// let nameInput = document.getElementById("nameInput");
// let result = document.getElementById("result");
// let charactorCount = document.getElementById("charactorCount");

// let maxLength = 10;

// nameInput.addEventListener("input", function(){

//     let count = nameInput.value.length;
    


//     charactorCount.textContent = "charactors : " + count + "/" + " "+maxLength;

//     if(count > maxLength){
//         nameInput.value = nameInput.value.substring(0,maxLength);
//     }

//     result.textContent = nameInput.value;

// });

let username = document.getElementById("username");
let message = document.getElementById("message");

username.addEventListener("input",function(){
    let value = username.value;

    if(value.length===0){
        message.textContent = "username is required";
    }else if(value.length < 3){
        message.textContent = "Username must have at least 3 characters";
    }else if(value.length > 10){
        message.textContent = "Username is too long";
    }else{
        message.textContent = "Username is valid"
    }
});

