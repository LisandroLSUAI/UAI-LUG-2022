const miPromesa = new Promise<string>((resolve, reject) => {
        setTimeout(() => {
        console.log("Esto sigue corriendo")
        resolve("Este es el resultado de la promesa")
    }, 5000)
    reject("Promesa rechazada")
})

//Hay 2 formas de hacerlo:

//1era forma
// const promiseResolver = () => {
//     miPromesa.then((resultado) => {
//         console.log("Resultado: ", resultado)
//     }).catch((err) => {
//         console.log("Error: ", err)
//     })
// }


//2da forma
const promiseResolver = async() => {
    try {
        const resultado = await miPromesa
        console.log("Resultado:", resultado)
    } catch (err) {
        console.log("Error:", err)
    }
}

promiseResolver()