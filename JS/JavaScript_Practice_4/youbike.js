const url = "https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json"

fetch(url)
.then((resp) => {
    return resp.json()
})
// .then((locations)=> {
//     locations.forEach((location) => {
//         const locationName = location.sna.replace("YouBike2.0_", " ")
//         console.log(locationName);
//     })
// })

// .then((locations)=> {
//         const s1 = locations.filter((location) => {
//             return location.sarea == "大安區"
//         })
//         console.log(s1.length);
//     })


.then((locations)=> {
        const s1 = locations.filter((location) => {
            return location.ar.includes("民權西路")
        }).filter((location) => {
           return location.available_rent_bikes >= 10 
        }).forEach((location) => {
            console.log(location.ar,location.available_rent_bikes);
            
        });
    
    })


