/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var nuevoArr = []
   for (i in objeto){
      nuevoArr.push([i,objeto[i]])
   }
   return nuevoArr
}

// iterar el objeto con for - in
// i hace referencia a la propiedad el objeto. Va capturando cada propiedad del objeto


function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   
// ORDENAR LAS LETRAS:  string.split("") -> split para separar cada letra (conv en arr) y sort ordena alfabeticamente
var arrayOrdenado = string.split("").sort()
var contador = 1 // empieza tomando el valor siguiente al de i (o sea 1)
var objeto = {}
// recorro el array creado, con las letras ordenadas
for (var i = 0; i < arrayOrdenado.length; i++){
    if (arrayOrdenado[i] === arrayOrdenado[i+1]) { // si i es igual al siguiente item
   contador ++ // cuado sea igual el contador sigue corriendo
    } else { // cuando las letras no sean iguales, al objeto en la prop del array en la posicion de i -> i va a ser la clave y el contador va a sr el valor
    objeto[arrayOrdenado[i]] = contador //(se usa con bracket not para uqe busque el valor de la prop, porque no sabemos que nombre tiene la prop)
    contador = 1 //se recetea para que haga de nuevo la iteracion (cada vez que la letra deja de ser igual)
    }
}
      return objeto
   }
   

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
  var mayusculas = ""
  var minusculas = ""
  var array = string.split("")
  for (var i = 0;i<array.length;i++){
     if (array[i] === array[i].toUpperCase()){
      mayusculas += array[i]
     }else {
      minusculas += array[i]
     }
  }
   
  return mayusculas.concat(minusculas)
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
  // return frase.split(" ").reverse().join(" ") <- da vuelta cada palabra pero tmb invierte el orden
  
  var str = frase.split(" ").map(function (i) {
      return i.split("").reverse().join("");
    }).join(' ');
    return str;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
  var sInv = numero.toString().split("").reverse().join("") 
  var num = numero.toString()
   if (sInv === num ) {
      return "Es capicua"
   } else {
      return "No es capicua"
  }
  
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
 var newStr = ""
 for (var i = 0; i < string.length; i++ ) {
   if (string[i] !== "a" && string[i] != "b" && string[i] != "c") {
     newStr += string[i] 
   }
 } 
 return newStr
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort(function (a, b){ //con el metodo sort se hace la comparacion
      return a.length - b.length // resta la longitud de a la de b, si da + va dsp de b y si es - va antes
   } )

}

// for (var i = 0; i < arrayOfStrings.length; i++) {
//    var temp = arrayOfStrings[i]
//    var j = i - 1
//    while (j >= 0 && temp.length < arrayOfStrings[j].length) {
//       arrayOfStrings[j+1] = arrayOfStrings[j]
//       j--
//   }
//   arrayOfStrings[j+1] = temp
// }
// return arrayOfStrings;
// }

//    }
// }

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
 var enComun = []
 for (var i = 0; i < array1.length; i++) {
   for (var j =0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
      enComun.push(array1[i])
      }  
   } 
 }
     return enComun
 }


/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

// DEVOLVER UN TEXTO INVERTIDO

//  var stringinv = ""
//  for (var i = texto.length -1 ; i > 0 ; i-- ) {
//     stringinv = stringinv + texto[i]
//  }
//  return stringinv

// //  return texto.split("").reverse().join("")


//  var j = texto.length - 1
//  var palabra = ""

// // texto 
//  for (var j = 0; j < texto.length; j++){
//    palabra2 = palabra + texto[j]
//  }
//  for (var i = texto.length -1 ; i > 0 ; i-- ){
//     palabra = palabra + texto[i]

//  if (palabra === palabra){
//    return true
//  } return false 
//  }

// La funcion recibe un argumento "numeros" correspondiente a un array,
//Encontrar el numero faltante en la secuencia de num enteros y devolverlo
//Si es un arr vacio retornar null y si no falta ninguno tmb 

// function encontrarNumeroFaltante (numeros)
//  if (numeros.length ===0) return null
// for ( var i =0; i < nummeros.length - 1; i++) {
//     var numeroSiguiente = numeros[i] + 1
//     if (numeros[i] + 1 !== numeroSiguiente) {
//        return numeroSiguiente
//     }
//     return null
//  } 
// como se si un array esta vacio? EJ CON EL length 

// SIEMPRE QUE TENGA QUE RECORRER Y CREAR UN NUEVO ARREGLO USO MAP()
// CUANDO TENGO QUE FILTRAR/SACAR ELEMENTOS DEL ARR USO FILTER()
// CUANDO TENGO QUE SUMAR/MULTIPLIC/REDUCIR TODOS LOS ELEM A UN SOLO RESULTADO USO REDUCE()
// CUANDO HAY QUE RECORRER UN ARR PARA BUSCAR ALGO USO FOR O FOREACH

// Multiplicar cada elemento del array por su indice. Devolver el nuevo arr con los resultados
// function multiplicarPorIndice (array) {

//  var newArr = array.map(function(elemento,indice){
//     return elemento * indice
//  })
//  return newArr 

// // LOS METODOS DE LOS ARR RECIBEN FUNC DE CALLBACK



// // EJEMPLO DE SIMULACION 

// // Solo numeros

// var newArr = array.filter(function(item){
//    if (Number.isInteger(item)){
//       return item;
//    }
// })
// return newArr

// //String mas larga

// var string = ""
// string.forEach(function(item){
//    if (item.length > string.length){
//       string = item
//    }
// })
//  return string

 // Buscar amigos

// for (var i = 0; i < amigos.length; i++) {
//    if (amigos[i].nombre === nombre){
//       return amigos[i]
//    }
// }


// //Numeros simetricos

// var num = numero
// num.toString().split("").reverse().join("") === num.toString

// Pluck

