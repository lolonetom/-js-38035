/* function sumar(parametro1, parametro2){
    if(isNaN(parametro1) || isNaN(parametro2)){
        alert("No puedes ternert campos vacios");
    }else{
        alert(parametro1 + parametro2);
    }
}

let num1 = parseFloat(prompt("Ingrese el primer numero"));
let num2 = parseFloat(prompt("Ingrese el segundo numero"));

sumar(num1, num2); */

let resultado = 0;
console.log(resultado);

function sumar (n1, n2){
    resultado = n1 + n2;
    console.log(resultado);
    alert(resultado);
}

sumar(23, 54);