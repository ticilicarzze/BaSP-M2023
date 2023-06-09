console.log('--Exercise 2: STRINGS');

/* a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en 
mayúscula (utilizar toUpperCase).*/

console.log('--Exercise 2.a:');

var str1 = 'abcdabcdabcdabcd';
console.log(str1.toUpperCase());

/* b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los 
primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('--Exercise 2.b:');

var str2 = 'aaaabbbbcccc';
console.log(str2.substring(0, 5));

/* c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con 
los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).*/

console.log('--Exercise 2.c:');

var srt3 = '123456789abc';
var srt4 = srt3.substring(9);
console.log(srt4);

/* d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la 
primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable 
(utilizar substring, toUpperCase, toLowerCase y el operador +). */

console.log('--Exercise 2.d:');

var str5 = 'aaaAABBbbb';
var str6 = str5.substring(0, 1);
var str7 = str5.substring(1);
console.log(str6.toUpperCase() + str7.toLowerCase());

/* e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar 
la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf). */

console.log('--Exercise 2.e:');

var str8 = 'Hello world';
console.log(str8.indexOf(' '));

/* f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio 
    entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que 
    tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar 
    indexOf, substring, toUpperCase, toLowerCase y el operador +). */

console.log('--Exercise 2.f:');

var str10 = 'respoNsive desigN';
var blankSpace = str10.indexOf(' ');
var firstMayus = str10.substring(0, 1);
var secondMayus = str10.substring(blankSpace + 1, blankSpace + 2);
var firstWord = str10.substring(1, blankSpace);
var secondWord = str10.substring(blankSpace + 2);
var str15 = firstMayus.toUpperCase() + firstWord.toLowerCase() + " " + secondMayus.toUpperCase() + 
secondWord.toLowerCase();

console.log(str15);