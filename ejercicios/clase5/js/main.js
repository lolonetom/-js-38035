function Auto (marca, anio, motor, modelo){
    this.marca = marca;
    this.anio = anio;
    this.motor = motor;
    this.modelo = modelo

}


//CLASE CONSTRUCTORA

class Auto{
    constructor(marca, anio, motor, modelo){
        this.marca = marca;
        this.anio = anio;
        this.motor = motor;
        this.modelo = modelo;
        this.marcar = () =>{
            console.log("Estoy en marcha");
        };
        this.presentar = () =>{
            console.log("Soy un auto modelo" + this.modelo + "año" + this.anio);
        };
        this.vender = () =>{
            console.log("Fui vendido");
        };
    }
}


const auto3 = new Auto("Audi", 2022, 3.9, "TT");
const auto4 = new Auto("Ford", 2022, 3.9, "TT");
const auto5 = new Auto("Audi", 2022, 3.9, "TT");
console.log(auto5);
console.log("nombre" in auto3);