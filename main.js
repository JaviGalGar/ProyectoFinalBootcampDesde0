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

/*Rellenar datos de productos disponibles*/

for(let i = 1; i <= listaProductos.length; i++) {
    document.getElementById(`precio${i}`).innerText = `Precio: ${listaProductos[i-1].precio} €/${listaProductos[i-1].cantidad}`; 
}

/*Inicializar costes totales cesta y array costes artículo*/
let totalCost = 0;
let arrayCost = new Array(listaProductos.length);
for(let i = 1; i <= listaProductos.length; i++){
    arrayCost[i-1] = 0;
}
let numArticulos = 0;
/*Poner artículos en la cesta*/

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
    const pruebaid = idcomprada.replace("producto", "product");
    const numid = idcomprada.slice(-1);

    const yeah = document.getElementById(pruebaid);
    const lista = document.getElementById("tablacompra");

    if (yeah === null) {
    for(let i = 1; i <= listaProductos.length; i++) {

        if (idcomprada === listaProductos[i-1].id) {
            const nuevaid = draggable.outerHTML.replace("producto", "product");
            const precioind = listaProductos[i-1].precio;

            var tBodyPrin = document.getElementById("tablaprincipal");
            var newRow = tBodyPrin.insertRow(-1);
            var newInputId = `cantidad` + `${numid}`;
            var newCostId = `cost` + `${numid}`;

            newRow.setAttribute("id", `fila${listaProductos[i-1].nombre}`);
            var nuevaClase = `fila${listaProductos[i-1].nombre}`;

            newRow.innerHTML = `<td>${nuevaid}</td>
            <td>${listaProductos[i-1].nombre}</td>
            <td><input id="${newInputId}" type="number" value="1" min="0" onChange="calculodinero(this.value,${precioind},${newCostId},${numid})"></td>
            <td>${precioind} €/${listaProductos[i-1].cantidad}</td>
            <td id="${newCostId}" class"productcost">${(precioind * 1).toFixed(2)}€</td>`;

            /*Crear eventListener al meter en la cesta*/
            const draggable2 = document.getElementById(pruebaid);
            draggable2.addEventListener('dragstart', dragStart2);
            
            /*Suma 1 al número total de artículos en la cesta*/
            numArticulos += 1;
            const totalArt = document.getElementById("numArt");
            totalArt.value = numArticulos;
            totalArt.innerText = numArticulos;

            /*llamada a primera actualización de precio con el valor inicial del input que es 1*/
            arrayCost[numid-1] = precioind*1;
            actualizaPrecio();
        }
    }
    }
}

/*Calcular precio de cada artículo al escribir cantidad a comprar*/
function calculodinero (cantidad,preciounidad,costetotal,posicion) {
    costetotal.value = (cantidad * preciounidad).toFixed(2);
    costetotal.innerHTML = costetotal.value + "€";
    arrayCost[posicion-1] = costetotal.value;
    actualizaPrecio();
}

/*Actualizar precio total cesta compra al añadir o quitar elemento*/
function actualizaPrecio() {
    totalCost = 0;

    for(let i = 1; i <= listaProductos.length; i++) {
        totalCost = (parseFloat(totalCost) + parseFloat(arrayCost[i-1])).toFixed(2);
    }

    const totalSum = document.getElementById("Sumatorio");
    totalSum.value = totalCost;
    totalSum.innerText = totalCost + "€";

    const totalSum2 = document.getElementById("visorPrecio");
    totalSum2.value = totalCost;
    totalSum2.innerText = totalCost + "€";
}

/*Quitar artículos de la cesta*/

function dragStart2(e) {
    e.dataTransfer.setData("text/plain", e.target.id);
    console.log("añadido evento!");
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
    const idcopiada2 = e.dataTransfer.getData("text/plain");
    const draggable2 = document.getElementById(idcopiada2);
    const ideliminada2 = draggable2.id;
    const idborrada2 = ideliminada2.slice(-1);
    console.log(idborrada2);
    
    /*Borrar fila del producto en la tabla de compra*/
    const lista2 = document.getElementById("tablaprincipal");
    const itemborrado2 = document.getElementById(draggable2.className);
    lista2.removeChild(itemborrado2);

    /*Actualizar array de coste de productos*/
    arrayCost[idborrada2-1] = 0;

    /*Quitar un elemento del total de articulos en cesta*/
    numArticulos = numArticulos - 1;
    const totalArt2 = document.getElementById("numArt");
    totalArt2.value = numArticulos;
    totalArt2.innerText = numArticulos;

    actualizaPrecio()

}