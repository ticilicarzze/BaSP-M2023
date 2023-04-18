console.log('--Exercise 6: FUNCTIONS');

/* a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y 
guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador. */

console.log('--Exercise 6.a:');

function add(num1, num2) {
    return num1 + num2;
}
result = add(1,2);
console.log(result);

/* b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de los parámetros 
no es un número; de no ser un número, mostrar un alert aclarando que uno de los parámetros tiene error y 
retornar el valor NaN como resultado.*/

console.log('--Exercise 6.b:');

function addVal(num1, num2) {
    if (num1 / 1 === num1 && num2 /1 === num2){
        return num1 + num2;
    }else{
        alert("Error: incorrect parameters");
        return NaN;
    }
};

console.log(addVal(4.6, 15));

/* c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva verdadero si es 
un número entero.*/

console.log('--Exercise 6.c:');

function validateInteger(num){
    return num % 1 === 0;
};

console.log(validateInteger(4.6));

/* d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función del ejercicio 
6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alert con el error y retornar 
el número convertido a entero (redondeado).*/

console.log('--Exercise 6.d:');

function addValRound(num1, num2) {
    val1 = validateInteger(num1);
    val2 = validateInteger(num2);
    if (num1 / 1 === num1 && num2 /1 === num2){
        if (val1 == true && val2 == true){
            return num1 + num2;
        }else{
            alert("Error: some number is not an integer");
            if (val1 == true){
                return Math.round(num2);
            }else if(val2 == true){
                return Math.round(num1);
            }else{
                return Math.round(num1) + ", " + Math.round(num2);
            }
        }
    }else{
        alert("Error: incorrect parameters");
        return NaN;
    }
}

console.log(addValRound(4.6, 15));

/* e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una nueva función 
probando que todo siga funcionando igual que en el apartado anterior.*/

console.log('--Exercise 6.e:');

function validateFunc(num1, num2) {
    var val1 = num1 % 1 === 0;
    var val2 = num2 % 1 === 0;
    if (num1 / 1 === num1 && num2 /1 === num2){
        if (val1 == true && val2 == true){
            return num1 + num2;
        }else{
            alert("Error: some number is not an integer");
            if (val1 == true){
                return Math.round(num2);
            }else if(val2 == true){
                return Math.round(num1);
            }else{
                return Math.round(num1) + ", " + Math.round(num2);
            }
        }
    }else{
        alert("Error: incorrect parameters");
        return NaN;
    }
}

function validateAll(num1, num2) {
    return validateFunc(num1, num2);
}

console.log(validateAll(4.6, 15));