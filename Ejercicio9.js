function temporizador(){//funcion promesa
    return new Promise(respuesta => {
        setTimeout(()=>{
        respuesta("hola *despues de dos segundos*")
    },2000)//tiempo en milisegundos (2)
})
}
async function mostrarmensaje(){//cumplir la promesa ._?
    let mensaje=await temporizador()
    console.log(mensaje)
}
mostrarmensaje();//llamamos a la funcion