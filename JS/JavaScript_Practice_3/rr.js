console.log(123);
// document.addEventListener("DOMContentLoaded", () => {
//     const d = document.querySelector("#hi")
//     console.log(d);
// })

//     const d = document.querySelector("#hi")
//     console.log(d);

const bt = document.querySelector("#bt")

    bt.addEventListener("click", () => {
        const c = document.querySelector("#hi")
        const currentText = c.textContent
        if (currentText == "Hello") {
            c.textContent = "World"
        } else {
            c.textContent = "Hello"
        }
    })

//     const bt = document.querySelector("#bt")

// bt.addEventListener("click", () => {
//   const div = document.querySelector("#hi")
//   const currentText = div.textContent

//   if (currentText == "Hello") {
//     div.textContent = "World"
//   } else {
//     div.textContent = "Hello"
//   }
// })


const btnDown = document.querySelector("#btnDown")
const btnUp = document.querySelector("#btnUp")
const count = document.querySelector("#count")

   btnUp.addEventListener("click", () => {
       count.value = Number(count.value) + 1
   })
   btnDown.addEventListener("click",() => {
        count.value = Number(count.value) - 1
        if (count.value <1 ){
            count.value = "1"
            // alert ("不行!")
        }
   })