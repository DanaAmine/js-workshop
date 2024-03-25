const freunde = new Promise( (resolve,reject)=>{
    setTimeout(() => {
        resolve("amine")
    }, 2000);// estce que lazem nzid reject ?
})

freunde.then((nom)=>{
    console.log('her sey yonunda '+nom)
}
).catch((err)=>{
    console.log('cest une erreur  '+err)
})