console.log('--Exercise 4: IF-ELSE');

// a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than or equal to 0,5” y sino un alerta con el mensaje “Lower than 0,5”.

var num = Math.random();
if (num >= 0.5) {
    alert("Greater than or equal to 0,5");
}else{
    alert("Lower than 0,5");
}
    
  
// b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
// i. “Bebe” si la edad es menor a 2 años;
// ii. “Niño” si la edad es entre 2 y 12 años;
// iii. “Adolescente” entre 13 y 19 años;
// iv. “Joven” entre 20 y 30 años;
// v. “Adulto” entre 31 y 60 años;
// vi. “Adulto mayor” entre 61 y 75 años;
// vii. “Anciano” si es mayor a 75 años.

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

var age = getRandomIntInclusive(0, 100);

if (age < 2){
   alert("Bebe");
}else if (age >= 2 && age <= 12){
    alert("Niño");
}else if (age >=13 && age <= 19){
    alert("Adolescente");
}else if (age >=20 && age <= 30){
    alert("Joven");
}else if (age >=31 && age <= 60){
    alert("Adulto");
}else if (age >=61 && age <= 75){
    alert("Adulto mayor");
}else{
    alert("Anciano");
}