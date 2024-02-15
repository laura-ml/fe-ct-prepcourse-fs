/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function mayuscula(nombre) {
   // Esta función recibe un nombre (string).
   // Debe devolver el mismo nombre, pero con la primera letra en mayúscula.
   // [Ejemplo]: "mario" ----> "Mario".
   // Tu código:

     return nombre.charAt(0).toUpperCase() + nombre.slice(1);

   }

function invocarCallback(cb) {
   // Invoca/ejecuta el callback `cb`.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   cb()
}

function operacionMatematica(num1, num2, cb) {
   // En este ejercicio recibirás dos números y un callback.
   // El callback realiza una operación matemática, por lo que necesita de los dos números.
   // Retorna el resultado del callback pasándole como parámetros los números.
   // Tu código:
  cb(num1,num2)
  return cb 
}

function sumarArray(arrayOfNumbers, cb) {
   // Recibes un arreglo de números y un callback.
   // Suma todos los números del arreglo.
   // Este resultado debes pasárselo como argumento al callback recibido.
   // [NOTA]: no debes reotrnar nada.
   // Tu código:
   
   // var suma = 0
   // for (var i=0; i < arrayOfNumbers.length;i++){
   //    suma = suma + arrayOfNumbers[i]
   // }
   // cb(suma)

   var suma = 0
arrayOfNumbers.forEach(function(elemento){
   suma += elemento
})
cb(suma)

// PARA SUMAR ELEMENTOS DE UN ARRAY -> REDUCE ()

// var resultado = arrayOfNumbers.reduce(function(acumulador,item){
//   acumulador = acumulador + item
// })
// cb (resultado)
// }

}

function forEach(array, cb) {
   // Recibes un arreglo y un callback.
   // Debes iterar sobre el arreglo, y por cada elemento ejecutar el callback.
   // Debes pasarle el elemento como argumento al callback.
   // Tu código:
   
    for (let i = 0; i < array.length; i++) {
       cb(array[i]);
     }
   // var arreglo = arreglo.forEach(cb)
   // return resultado 
   }


function map(array, cb) {
   // Debes iterar sobre el arreglo, y cada elemento pasárselo como arguemento al callback.
   // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
   // Retorna el nuevo arreglo.
   // Tu código:
 var resultado = array.map(cb)
 return resultado 
}

function filter(arrayOfStrings) {
   // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
   // Luego retorna un nuevo arreglo con estos elementos.
   // Tu código:
   var nuevoArr = arrayOfStrings.filter(function(elemento){
      if (elemento[0] === "a") return elemento
   })
   return nuevoArr
 }
   
// TAMBIEN :
//return arrayOfStrings.filter((string) => string.charAt(0).toLowerCase() === "a");
// }

// var nuevoArr = []
//    for (var i = 0; i < arrayOfStrings.length; i++){
//       if (arrayOfStrings[i][0] === "a") {
//         nuevoArr.push(arrayOfStrings[i])
//       }
//    } 
//    return nuevoArr
//    }

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/

module.exports = {
   mayuscula,
   invocarCallback,
   operacionMatematica,
   sumarArray,
   forEach,
   map,
   filter,
};

//var acumulador = 0
//for (var i=1; i < n; i++) {
// acumulador += i
//if (acumulador >= 100){
//  break;
//}
// return acumulador 
// }
// while (numero > 1) {
//  if(numero % 2 !== 0) {
//    return false
//  }
// else {
//    numero = numero / 2
// }
//  }

//  var contador = 0
//  do {
//  num = num + 5
//  contador++
//  } while (contador < 8);
//  return num

// dar vuelta un string
//function invertirTexto(texto){
// var palabraFinal = ""
//  for (var i = texto.length -1 ; i > 0; i--){
// palabraFinal = palabraFinal + texto[i] 
// }
// return palabraFinal
//}


// SABER SI UN CALLBACK EXISTE :
// IF (callback) { callback (string)} return callback(string) -> es como preguntarle si existe

// RECORRER UN ARRAY MANDARLE LA CB A CADA ELEMENTO
// FOR EACH CUANDO HAY QUE RETORNAR Y MAP CUANDO NO

// array.forEach(Function(item){
// cb(item)
// })

// var resultado = []
//    array.map(function(item){
//    resultado = cb (item)
// })
// return resultado 


// BUSCAR ELEMENTO
// BUSCA UN ELEMENTO EN EL ARRAY Y RETORNALO.
// Si el elemento no se encuentra devolver "No se encontro"
// La funcion cb es la encargada de evaluar si el elemento fue encontrado
// -> Cuando devo cortar la ejecucion de un bucle, no sirven los metodos de arreglo (solo el for)

// function buscarElemento = (array,cb) => {
//   for (var i = 0; i < array.length; i++){
//     if (cb(array[i])) {
//    return array[i]
//   }
//   return "No se encontro"
//  }

// DEVOLVER EL VALOR DE LA PROP DE UN OBJETO: (cuando no se que contiene la prop uso bracket natation)

// return objeto[propiedad]

// ACTUALIZA el valor de la prop del objeto recibido. Retornarlo actualizado
// function actualizarProp (objeto, prop, valor)

//  objeto[propiedad] = valor -> primero se hace la asignacion en el objeto y dsp se retorna
// return objeto

// LISTAR TODAS LAS PROP DE UN OBJETO 
// SE USA : Object.Keys
// function listarProp = (objeto) => {

// return Object.keys(objeto)}

// CONTAR Y RETORNAR EL TOTAL DE LAS PROP DEL OBJETO
// para esto se usa for - in
// function contarProp = (objeto) =>{

// var suma = 0
//   for (const propiedad in objeto){
// suma ++
//     }
//     return suma
// }

// TAMBIEN:
// return Object.keys(objeto).length

