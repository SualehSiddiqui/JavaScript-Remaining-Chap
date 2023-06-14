//Chap # 31 to 34

//Question # 01
// var todayDate = new Date()
// console.log(todayDate)

//Question # 02
// var todayDate = new Date();
// var monthInNum = todayDate.getMonth()
// var totalMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
// var presentMonth = totalMonths[monthInNum]
// alert(presentMonth)

//Question # 03
// var date = new Date();
// var dayInNum = date.getDay();
// var totalDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
// var todayDay = totalDays[dayInNum]
// console.log(todayDay)

//Question # 04
// var date = new Date();
// var dayInNum = date.getDay();
// switch(dayInNum){
//     case 0 :
//         console.log("It’s Fun day");
//         break;
//     case 6 :
//         console.log("It’s Fun day");
//         break;
// }

//Question # 05
// var date = new Date();
// var monthDaysInNum = date.getDate();
// var message = monthDaysInNum <= 15 ? "First fifteen days of month." : "Last days of month.";
// console.log(message)

//Question # 06
// var date = new Date();
// var miliSec = date.getTime();
// var min = (miliSec / 1000 ) / 60;
// console.log(`Current Date : ${date}`)
// console.log(`Elapsed millisecond since january 1970 : ${miliSec}`)
// console.log(`Elapsed minuted since january 1970  : ${min}`)

//Question # 07
// var date = new Date();
// var hours =  date.getHours();
// var amOrPm = hours <  12 ? "It's AM" : "It's PM";
// console.log(amOrPm);

//Question # 08
// var laterDate = new Date("31, december , 2023");
// console.log(laterDate)

//Question # 09
// var date = new Date();
// var ramdanDate = new Date(" 22 , March , 2023");
// var milliPassed = date.getTime() - ramdanDate.getTime();
// var dayPassed = Math.floor(((((milliPassed / 1000) / 60)/60)/24));
// console.log(`${dayPassed} days have psssed since 1st ramazan, 2023`);

//Question # 10
// var date = new Date();
// var firstDay = new Date("1 jan 2023")
// var diffInMill = date.getTime() - firstDay.getTime()
// var diffInSec = Math.floor(diffInMill/1000);
// console.log(`On refernce date ${date}, ${diffInSec} seconds had passed since begining of 2023`);

//Question # 11
// var date = new Date();
// var hourAgo = new Date()
// hourAgo.setHours(date.getHours() - 1)
// console.log(`Current Date : ${date}`)
// console.log(`1 hour ago, it was ${hourAgo}`)

//Question # 12
// var date = new Date();
// var yearAgo = new Date()
// yearAgo.setFullYear(date.getFullYear() - 100)
// console.log(`Current Date : ${date}`)
// console.log(`100 years back, it was ${yearAgo}`)

//Question # 13
// var date = new Date();
// var age = window.prompt("Enter Your Age", "");
// date.setFullYear(date.getFullYear() - age);
// var birthYear = date.getFullYear();
// console.log(birthYear);

//Question # 14
// var date = new Date();
// var units = Math.floor((Math.random() * 200))
// var charges = 20;
// var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "November", "December"];
// var lateCharges = 250;
// console.log(`Customer Name: Sualeh`);
// console.log(`Month ${month[date.getMonth()]}`);
// console.log(`Number of units ${units}`);
// console.log(`Charges per unit: ${charges}`);
// console.log(`Net Amount Payable(within Due Date): Rs ${units * charges}`);
// console.log(`Late payment charges: Rs ${lateCharges}`);
// console.log(`Net Amount Payable(After Due Date): Rs ${(units * charges) + lateCharges}`);



//Chap # 35 to 38

//Question # 01
// function dateAndTime(){
//     var date = new Date();
//     return date
// }
// console.log(dateAndTime());

//Question # 02
// function greeting(){
//     var firstName = prompt("Enter Your first name")
//     var lastName = prompt("Enter Your last name")
//     alert(`Hello ${firstName} ${lastName}`)
// }
// greeting()

//Question # 03
// function addition(num1, num2){
//     var result = Number(num1) + Number(num2)
//     return result 
// };

// console.log(addition(window.prompt("Enter First number"),window.prompt("Enter Second number")));

//Question # 04
// function addition(num1, num2, opt) {
//     var result;
//     // console.log(Number(num1) + Number(num2))
//     switch (opt) {
//         case "+":
//             result = Number(num1) + Number(num2);
//             break;
//         case "-":
//             result = Number(num1) - Number(num2);
//             break;
//         case "*":
//             result = Number(num1) * Number(num2);
//             break;
//         case "/":
//             result = Number(num1) / Number(num2);
//             break;
//         case "%":
//             result = Number(num1) % Number(num2);
//             break;
//         defauult :
//             result = "Enter Valid Operator"
//     }
//     return result
// };

// console.log(addition(window.prompt("Enter First number"), window.prompt("Enter Second number"), window.prompt("Enter Operator")));

//Question # 05
// function addition(num1){
//     var result = Number(num1) * Number(num1);
//     return result;
// };

// console.log(addition(window.prompt("Enter First number")));

//Question # 06
function factorial(num1) {
    --num1

    // return num1
};
// window.prompt("Enter First number")
// factorial()
// console.log(factorial(4));
for (var i = 4; i = 0; i--) {
    // num1 = num1 * (i);
    console.log(i)
}





