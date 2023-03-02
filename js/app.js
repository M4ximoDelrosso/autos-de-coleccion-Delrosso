//ELEMENTOS
const cantidadCarrito = document.getElementById("cantidadCarrito");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

// ARRAY CARRITO
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//ARCHIVO JSON
const stockProduct = async () =>{
    const response = await fetch("./json/data.json");
    const data = await response.json();
    console.log(data);

    data.forEach((product) => {
        const boton = document.getElementById(product.id);
    
        boton.addEventListener("click", () =>{
            const repeat = carrito.some((repeatProduct) => repeatProduct.id === product.id);
            if (repeat) {
                carrito.map((prod) => {
                    if (prod.id === product.id) {
                        prod.cantidad++;
                        prod.precio * prod.cantidad;
                    }}
                );
            } else{
                carrito.push({ 
                    id: product.id,
                    modelo: product.modelo, 
                    precio: product.precio, 
                    cantidad: product.cantidad
                });
                savelocal();
            }
            contadorCarrito();
    
            const total = carrito.reduce((t, item) => t + item.precio * item.cantidad, 0);
            alerta();
        });
    });
};

//LLAMAR LA FUNCION
stockProduct();

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

//ALERTA PRODUCTO AGREGADO
function alerta() {
    Toastify({
        text: "Producto agregado al carrito",
        duration: 1500,
        gravity: "top",
        //destination: "verCarrito()",
        offset: {
            x: 30,
            y: 85
        },
        style: {
            background: "rgb(66,207,255)",
            color: "white",
        },
        onClick: {
            
        },
    }).showToast();
};