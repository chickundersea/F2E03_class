// const url = "https://jsonplaceholder.typicode.com/users"

// const result = fetch(url)

// fetch(url).then((resp) => {
//     return resp.json()
// }).then((users)=> {
//     users.forEach(user => {
//         console.log(user.name);
//     })
// })

const url = "https://fakestoreapi.com/Products"

fetch(url)
.then((resp) => {
    return resp.json()
})
.then((products)=> {
    products.forEach((product) => {
        console.log(product.title);
    })
})
.catch((err) => {
    console.log(err);
    
})
