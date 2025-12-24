console.log(123);

let aaa = 1;

// if (aaa % 2 != 0) {
//   console.log("單數");
// } else {
//   console.log("複數");
// }

// let i = 1;
// for (i = 0; i < 10; i = i + 1) {
//   console.log("Hello World");
// }

// let i = 1
// for (i = 0; i < 10; i = i + 1) {
//   if (i % 2 != 0) {
//     break
//   } console.log(i);
// }

// let i = 0
// while (i <= 25) {
//     console.log(i);
//     i = i + 1
// }
// let i = 0
// for (i = 0; i < 10; i = i + 2) {
//     console.log(i);
// }

// for (let a = 1; a <= 9; a = a + 1) {
//     for (let j = 1; j <= 9; j = j + 1) {
//         console.log(a + " x " + j + " = " + a * j);

// console.log( `${a} x ${j} = ${a * j}`);

//     }
// }

for (let i = 1; i <= 9; i = i = i + 1) {
  const stars = "*".repeat(i * 2 - 1);
  const spaces = " ".repeat(9 - i);
  const txt = `${spaces}${stars}`;
  console.log(txt);
}
