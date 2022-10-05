// Clases
class PlanHosting {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}

class CertificadoSsl {
    constructor(id, nombre, precio) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
    }
}


class Carrito {
    constructor(id,) {
        this.id = id;
        this.plan = [];
    }

    calcularTotal() {
        let total = 0;
        for (let i = 0; i < this.plan.length; i++) {
            total = total + parseInt(this.plan[i].precio);
        }
        return total;
    }
}

//Funciones
function renderCard(planhosting) {
    let cardRendered = `
<div class="card m-3">
    <img src="./images/itembg.jpeg" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${planhosting.id}.${planhosting.nombre}</h5>
        <p class="card-text">$ ${planhosting.precio}.</p>
    <a href="#" class="btn btn-primary botonDeCompra" id="${planhosting.id}">+</a>
    </div>
</div>
`;
    return cardRendered;
}



let catalogoPlanes = [];
console.log(catalogoPlanes);

let plan1M = new PlanHosting(1, 'Básico - Mensual', '150');
let plan2M = new PlanHosting(2, 'Negocio - Mensual', '200');
let plan3M = new PlanHosting(3, 'Avanzado - Mensual', '250');
let plan1A = new PlanHosting(4, 'Básico - Anual', '1500');
let plan2A = new PlanHosting(5, 'Negocio - Anual', '2400');
let plan3A = new PlanHosting(6, 'Avanzado - Anual', '2700');


catalogoPlanes.push(plan1M);
catalogoPlanes.push(plan2M);
catalogoPlanes.push(plan3M);
catalogoPlanes.push(plan1A);
catalogoPlanes.push(plan2A);
catalogoPlanes.push(plan3A);

/* fetch productos */
let cardsDiv = document.querySelector('#cards');
    fetch('./js/productos.json')
    .then((res) => res.json())
    .then((data) => {
        data.forEach((producto) => {
        cardsDiv.innerHTML += renderCard(producto); 
        }
        )
    })

/* catalogoPlanes.forEach(planhosting => {
    console.log(planhosting)
    cardsDiv.innerHTML += renderCard(planhosting);
})*/

/*Añadir items al carrito */

let carrito = new Carrito(1);
let botones = document.querySelectorAll('.botonDeCompra');
let arrayDeBotones = Array.from(botones);


arrayDeBotones.forEach(boton => {
    boton.addEventListener('click', (e) => {
        let productoSeleccionado = catalogoPlanes.find(planhosting => planhosting.id == e.target.id);
        carrito.plan.push(productoSeleccionado);
        console.log(carrito);
        console.log(carrito.calcularTotal());

/* sweet alert articulo agregado */
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Se agregó un artículo al carrito',
            showConfirmButton: false,
            timer: 1500
        })
    })
})

/* sweet alert vaciar carrito */
let btnVaciar = document.getElementById('boton-vaciar');

btnVaciar.addEventListener('click', () => {
    Swal.fire({
        title: '¿Estás seguro de vaciar el carrito?',
        text: 'No podrás revertir este paso.',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Si, estoy seguro!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire(
                'Eliminados',
                'Los articulos se han eliminado.',
                'completo'
            )
        }
    })
}
)