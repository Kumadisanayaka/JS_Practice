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

let number = 10;

console.log(number <= 0 ? "Negative" : "Positive");











