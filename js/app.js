//ELEMENTOS
const cantidadCarrito = document.getElementById("cantidadCarrito");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

// LOGICA CARRITO
let arrayProductos = [auto_01, auto_02, auto_03, auto_04, auto_05, auto_06, moto_01, moto_02, moto_03, moto_04, moto_05, moto_06, colec_01, colec_02, colec_03, colec_04, colec_05, colec_06];
console.log(arrayProductos)

// MOSTRAR CANT PRODUCTOS DEL CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

for (const product of arrayProductos) {
    const boton = document.getElementById(product.id);

    boton.addEventListener("click", () =>{
        const producto = arrayProductos.find(prod => prod.id === product.id)
        const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
        if (repeat) {
            carrito.map((prod) => {
                if (prod.id === product.id) {
                    prod.cantidad+=1;
                    prod.precio * prod.cantidad;
                }}
            );
        } else{
            carrito.push({ 
                id: producto.id,
                modelo: producto.modelo, 
                precio: producto.precio, 
                cantidad: producto.cantidad
            });
            savelocal();
        }
        console.log(carrito);
        contadorCarrito();

        const total = carrito.reduce((t, item) => t + item.precio * item.cantidad, 0);
        console.log(`TOTAL: $ ${total}`);
    });
}

// CONTADOR DE PRODUCTOS 
const contadorCarrito = () => {
    cantidadCarrito.style.display = "block";
    let contador = carrito.reduce((t, item) => t + item.cantidad, 0);
    localStorage.setItem("contador", JSON.stringify(contador));
    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("contador"));
};
contadorCarrito();

//GUARDAR CARRITO
const savelocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};