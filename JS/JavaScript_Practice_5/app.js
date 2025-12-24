// const d = document.createElement("div")
// d.id = "ss";
// d.className = "ccc"

// const b = document.querySelector("body")
// b.appendChild(d)

// console.log(b);



// const btn = document.querySelector(".btn")
// const title = document.querySelector (".purple")



// btn.addEventListener("click", () => {
//         if (title.className == "purple") {
//             title.classList.remove("purple")
//         } else title.classList.add("blue")
// })

// const add = document.querySelector("#addBtn")

// add.addEventListener("click", ()=> {
//     const div = document.createElement("div")
//     const body = document.querySelector("body")
//     body.appendChild(div);
//     console.log("黑");
// })
// console.log();




const ul = document.createElement("ul")

for (let i = 1; i <= 10; i+=1 ){
      const li = document.createElement("li");
      li.textContent = i;
      ul.appendChild(li);    
}
document.body.appendChild(ul);


const url =
        "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json";

axios.get(url).then(({data})=>{
    console.log(data);
    
})

try{
    const resp = await fetch(url);
    const stations = await resp.json();
    console.log(stations);
} catch (err){
    console.log(err);
}


aaa()

// import { log } from "console";
import { aaa,xyz } from "./aaa.js";
import qqq from "./aaa.js";



console.log(aaa);
console.log(xyz);
console.log(qqq);


import xxx from "dayjs";
console.log(xxx);
