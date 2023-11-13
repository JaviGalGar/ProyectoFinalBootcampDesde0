const listaProductos = [
    {
        id: "producto1",
        nombre: "Tomate",
        precio: 1.05,
        cantidad: "Kg",
    },
    {
        id: "producto2",
        nombre: "Patata",
        precio: 2.30,
        cantidad: "Kg",
    },
    {
        id: "producto3",
        nombre: "Lechuga",
        precio: 1.05,
        cantidad: "Ud",
    },
    {
        id: "producto4",
        nombre: "Cebolla",
        precio: 1.85,
        cantidad: "Kg",
    },
    {
        id: "producto5",
        nombre: "Pepino",
        precio: 1.80,
        cantidad: "Kg",
    },
    {
        id: "producto6",
        nombre: "Alcachofa",
        precio: 12.05,
        cantidad: "Kg",
    },
    {
        id: "producto7",
        nombre: "Champiñón",
        precio: 4.5,
        cantidad: "Kg",
    },
    {
        id: "producto8",
        nombre: "Espárrago",
        precio: 10.13,
        cantidad: "Kg",
    },
    {
        id: "producto9",
        nombre: "Coliflor",
        precio: 2.27,
        cantidad: "Ud",
    },
    {
        id: "producto10",
        nombre: "Pimiento",
        precio: 2.78,
        cantidad: "Kg",
    },
    {
        id: "producto11",
        nombre: "Zanahoria",
        precio: 0.85,
        cantidad: "Kg",
    }
];

for(let i = 1; i <= listaProductos.length; i++) {
    document.getElementById(`precio${i}`).innerText = `Precio: ${listaProductos[i-1].precio} €/${listaProductos[i-1].cantidad}`; 
}

const productos = [...document.querySelectorAll(".imagen")];

productos.forEach( producto => {
    producto.addEventListener('dragstart', dragStart);
});


function dragStart(e) {
    e.dataTransfer.setData("text/plain", e.target.id)
}

const cesta = document.getElementById("dejada");

cesta.addEventListener("dragenter", dragEnter);
cesta.addEventListener("dragover", dragOver);
cesta.addEventListener("dragleave", dragLeave);
cesta.addEventListener("drop", drop);

function dragEnter(e) {
    e.preventDefault();
}

function dragOver(e) {
    e.preventDefault(); 
}

function dragLeave(e) {

}

function drop(e) {
    const idcopiada = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(idcopiada);
    const idcomprada = draggable.id;
    const numid = idcomprada.slice(-1);

    cesta.appendChild(draggable.cloneNode(true));
    const lista = document.getElementById("listacompra");
    const cantidadind = document.getElementById(`cantidad${numid}`);

    for(let i = 1; i <= listaProductos.length; i++) {
        if (idcomprada === listaProductos[i-1].id) {
            const precioind = listaProductos[i-1].precio;
            lista.innerHTML = lista.innerHTML + `<p class="${idcomprada}">${listaProductos[i-1].nombre} Cantidad: X  Coste= ${(precioind * cantidadind.value).toFixed(2)}€</p>`
        }
    }
}

const productos2 = [...document.querySelectorAll("#dejada")];

productos2.forEach( producto => {
    producto.addEventListener('dragstart', dragStart2);
});


function dragStart2(e) {
    e.dataTransfer.setData("text/plain", e.target.id)
}

const eliminarProd = document.getElementById("eliminar");

eliminarProd.addEventListener("dragenter", dragEnter2);
eliminarProd.addEventListener("dragover", dragOver2);
eliminarProd.addEventListener("dragleave", dragLeave2);
eliminarProd.addEventListener("drop", drop2);

function dragEnter2(e) {
    e.preventDefault();
}

function dragOver2(e) {
    e.preventDefault(); 
}

function dragLeave2(e) {

}

function drop2(e) {
    const idcopiada = e.dataTransfer.getData("text/plain");
    const draggable = document.getElementById(idcopiada);
    const ideliminada = draggable.id;

    const lista = document.getElementById("listacompra");
    const itemborrado = document.getElementsByClassName(ideliminada);
    lista.removeChild(itemborrado[0]);
    
    const carritoactual = document.getElementById("dejada");
    const itemnoquerido = document.getElementById(idcopiada);
    carritoactual.removeChild(itemnoquerido);
}
