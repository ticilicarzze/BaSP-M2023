console.log('--Exercise 5: FOR');

// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

var frutas = ["manzana", "naranja", "mandarina", "banana", "durazno"]

for (var i = 0; i < frutas.length; i++) {
    alert(frutas[i]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

for (var i = 0; i < frutas.length; i++) {
    mayus = frutas[i].substring(0, 1);
    min = frutas[i].substring(1);
    alert(mayus.toUpperCase() + min);
}

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

var sentence = ""

for (var i = 0; i < frutas.length; i++) {
    sentence = sentence + frutas[i];
}
alert(sentence);