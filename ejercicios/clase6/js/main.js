//ARRAYS

const array =[];
console.log(array);

const numeros = [1,2,3,4,5,6,7,8,9,0];
console.log(numeros);

const mixto=[1,"Batman", false, {nombre:"German"}, 3.4];
/* console.log(mixto);
console.log(mixto.length);
console.log(mixto[3]); */

//RECORRIENDO EL ARRAY O ITERANDO
/* for(let i =0; i< 5; i++){
    console.log(mixto[i]);
}
for(let i =0; i< mixto.length; i++){
    console.log(mixto[i]);
}
for(let i =0; i< numeros.length; i++){
    console.log(numeros[i]);
} */

//METODOS///

//METODO PUSH A UN ARRAY == agrega al final del array
/* array.push("Juan");
array.push("Jose");
console.log(array); */

//METODO UNSHIFT A UN ARRAY == agrega al principio del array
/* mixto.unshift("Mensaje");
console.log(mixto); */

//METODO POP A UN ARRAY == elimina ultimo elemento del array
/* mixto.pop();
console.log(mixto); */

//METODO SHIFT DE UN ARRAY == elimina primer elemento del array
/* mixto.shift();
console.log(mixto); */

//METODO SPLICE A UN ARRAY == elimina uno o varios elementos de un array
/* mixto.splice(2, 1); */

//METODO JOIN A UN ARRAY == genera un string 
/* console.log(numeros.join("/")); */

//METODO CONCAT A UN ARRAY == une dos arrays en uno nuevo
/* const unido= mixto.concat(numeros);
console.log(unido); */

//INDEX OF ==busca un elemento en un array
/* console.log(mixto.indexOf('Juan'));
console.log(mixto.indexOf(1));
console.log(mixto.indexOf("Batman")); */

//METODO INCLUDES == pregunta si existe el elemento en un array
/* console.log(mixto.includes(3));
console.log(unido.includes(3)); */

//METODO REVERSE == nodifica el array origina
/* console.log(mixto.reverse); */

//arrays de objetos
const arroz={nombre:"Gallo", peso:500, precio: 180}
const productos=[];

function Producto(nombre, precio, peso){
    this.nombre=nombre;
    this.precio= parseFloat(precio);
    this.peso = peso;

    this.sumariva=()=>{
        this.precio = this.precio * 1.21;
    }
}

const productoNuevo = new Producto("Azucar", 195, 1000);
console.log(productoNuevo.precio);
productoNuevo.sumariva();
console.log(productoNuevo.precio);

const productoNuevo1 = new Producto("Peras", 200, 1000);
console.log(productoNuevo1.precio);
productoNuevo1.sumariva();
console.log(productoNuevo1.precio)

function cargarProductos(producto){
    return productos.push(producto);
}

cargarProductos(arroz)
cargarProductos(productoNuevo);
cargarProductos(productoNuevo1);
console.log(productos);
/* for (let index = 0; index < productos.length ; index++){
    const element = productos[index];
    console.log(element);
} */

for (const propiedad of productos){
    console.log(productos);
}