let arreglo=[1,2,3,4,5]
let suma=arreglo.reduce(function(i,d){//sumara los valores de izquierda a derecha
    return i+d
},0)
console.log(suma)