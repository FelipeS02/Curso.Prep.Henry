// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  let numeros = [];
  for (let i = 0; i < array.length; i++) {
    numeros.push(array[i]  + 1);
  }
  return numeros;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  frase = palabras.join(" ");
  return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  if (array.includes(elemento) === true) {
    return true;
  }
  else {
    return false;
  }
}


function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const result = numeros.reduce(reducer);
  return result;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  let sumaNotas = resultadosTest.reduce(reducer);
  let promedioNotas = sumaNotas / resultadosTest.length;
  return promedioNotas;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let valor = Math.max(...numeros);
  return valor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if (!arguments.length) {
    return 0;
  }
  let numeros = [];
  for (const key in arguments) {
    numeros.push(arguments[key]);
  }
  if (numeros.length === 1) {
    return numeros[0];
  }
  let result = numeros[0];
  for (let i = 1; i < numeros.length; i++) {
    result = result * numeros[i]
  }
  return result;
}
function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí
  let cantidadMayores = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if(arreglo[i] > 19) {
      cantidadMayores = cantidadMayores + 1;
    }
    else {
      continue;
    }
  }
  return cantidadMayores;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  const arrayDiasLaborales = {
    2: "Lunes", 
    3: "Martes", 
    4: "Miercoles", 
    5: "Jueves", 
    6: "Viernes"
  };

  const diasLaborales = Object.keys(arrayDiasLaborales);
  if (diasLaborales.includes(numeroDeDia.toString())) {
    return "Es dia Laboral";
  }
  else {
    return "Es fin de semana";
  }
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let numToString = n.toString().split("");
  if (Number(numToString[0]) === 9) {
    return true;
  }
  else {
    return false;
  }
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === arreglo[i + 1]) {
      return true;
    }
    else {
      return false;
    }
  }
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let condicional = (array.includes("Enero") && array.includes("Marzo") && array.includes("Noviembre"))
  const meses = condicional ? ["Marzo", "Noviembre", "Enero"] : "No se encontraron los meses pedidos";
  return meses;
}
function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let numsArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 100) {
      numsArray.push(array[i]);
    }
  }
  return numsArray;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let numsArray = [];
  for (let i = 0; i < 10; i++) {
    numero = numero + 2;
      if (numero != i) {
        numsArray.push(numero);
      }
      else {
        return 'Se interrumpió la ejecución';
        break;
      }
  }
  return numsArray;
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let numsArray = [];
  for (let i = 0; i < 10; i++) {
    if (i != 5) {
      numero = numero + 2;
      numsArray.push(numero);
    }
    else {
      continue;
    }
  }
  return numsArray;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
