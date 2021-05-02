const comprarCasco = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Se ha comprado un casco exitosamente")
    }, 1000)
})

const comprarGuantes = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Se ha comprado un par de gauntes exitosamente")
    }, 2000)
})

const paseoBici = new Promise((resolve, reject) =>{
    setTimeout(()=>{
        resolve("Dale a la bici con ganas")
    }, 8000)
})

const acciones = () =>{
    comprarCasco
        .then(mnsgCasco=>{
            console.log(mnsgCasco)
            return comprarGuantes;
        })
        .then(msngGuantes=>{
            console.log(msngGuantes)
            return paseoBici;
        })
        .then(mnsgbici=>{
            console.log(mnsgbici)
        })
}
acciones();