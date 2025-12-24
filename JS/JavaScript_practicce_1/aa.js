
var age = 18
console.log(age)

let year =  prompt("請輸入年份")

if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log("閏年")
} else {
    console.log("平年")
}

// if (year % 4 == 0 ) {
//     if (year % 100 == 0) {
//         if (year % 400 == 0) {
//             console.log("閏年")
//         } else {
//             console.log("瓶年")
//         }
//     } else {
//         console.log("閏年")
//     }

// } else {
//     console.log("平年")
// }
