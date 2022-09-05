// Clases
class PlanHosting {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

let catalogoPlanes = [];
console.log(catalogoPlanes);

let plan1M = new PlanHosting(1, "Básico - Mensual", "150");
let plan2M = new PlanHosting(2, "Negocio - Mensual", "200");
let plan3M = new PlanHosting(3, "Avanzado - Mensual", "250");
let plan1A = new PlanHosting(4, "Básico - Anual", "1500");
let plan2A = new PlanHosting(5, "Negocio - Anual", "2400");
let plan3A = new PlanHosting(6, "Avanzado - Anual", "2700");


catalogoPlanes.push(plan1M);
catalogoPlanes.push(plan2M);
catalogoPlanes.push(plan3M);
catalogoPlanes.push(plan1A);
catalogoPlanes.push(plan2A);
catalogoPlanes.push(plan3A);