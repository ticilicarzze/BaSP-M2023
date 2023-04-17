console.log('--Exercise 5: FOR');

/* a. Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar
una alerta utilizando cada una de las palabras. */

var fruits = ["apple", "orange", "tangerine", "banana", "peach"];

for (var i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
    console.log(fruits[i]);
}

/* b. Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada 
palabra modificada.*/

for (var i = 0; i < fruits.length; i++) {
    mayus = fruits[i].substring(0, 1);
    min = fruits[i].substring(1);
    alert(mayus.toUpperCase() + min);
    console.log(mayus.toUpperCase() + min);
}

/* c. Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con 
un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta 
con la cadena completa.*/

var sentence = "";

for (var i = 0; i < fruits.length; i++) {
    sentence = sentence + fruits[i] + ", ";
}
alert(sentence);
console.log(sentence)