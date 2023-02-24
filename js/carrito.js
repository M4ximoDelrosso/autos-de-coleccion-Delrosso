// MODAL CARRITO
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <p class="modal-header-title">TU CARRITO DE COMPRAS</p>
    `;
    modalContainer.append(modalHeader);

    // CERRAR MODAL
    const modalButton = document.createElement("div");
    modalButton.className = "modalButton";
    modalButton.innerText = "X";
    modalHeader.append(modalButton);
    modalButton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });

    //MENSAJE CARRITO VACÍO
    if (carrito.length === 0) {
        const modalVacio = document.createElement("div");
        modalVacio.className = "modalVacio";
        modalVacio.innerHTML = `
        <p class="carrito">TU CARRITO ESTÁ VACÍO</p>
        <a href="index.html" class="comprar">VOLVER A LA TIENDA</a>
        `;
        modalContainer.append(modalVacio);
    }

    // PRODUCTOS DEL CARRITO
    for (const product of carrito) {
        const carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <p>${product.modelo} </p>
        <p class="rigth">$ ${product.precio} </p>
        <span class="restar rigth"> - </span>
        <p class="center">${product.cantidad}</p>
        <span class="sumar"> + </span>
        <p>$ ${product.cantidad * product.precio}</p>
        <span class="delete-product btnPointer">❌</span>
        `;
        modalContainer.append(carritoContent);

        // RESTAR CANTIDAD
        let restar = carritoContent.querySelector(".restar");

        restar.addEventListener("click", () => {
            product.cantidad !== 1 && product.cantidad--;

            savelocal();
            pintarCarrito();
            contadorCarrito();
        });

        // SUMAR CANTIDAD
        let sumar = carritoContent.querySelector(".sumar");

        sumar.addEventListener("click", () => {
            product.cantidad++;

            savelocal();
            pintarCarrito();
            contadorCarrito();
        });

        // BOTON ELIMINAR
        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
            alertEliminar();
        });
    };

    // TOTAL
    const total = carrito.reduce((t, item) => t + item.precio * item.cantidad, 0);

    const comprar = document.createElement("div");
    comprar.className = "contenedor";
    comprar.innerHTML = `
    <div class="total-content">TOTAL DEL CARRITO: $${total}</div>
    <button class="button-shop btnPointer" id="buttonShop">FINALIZAR COMPRA</button>
    `;
    modalContainer.append(comprar);
    
    // CARTEL COMPRA CARRITO
    const btn = document.getElementById("buttonShop");
    btn.addEventListener("click", () => {
        if (carrito.length === 0) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Debes agregar un producto para comprar',
            })
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Gracias por tu compra',
                text: 'Compra realizada con exito',
                showConfirmButton: false,
                timer: 2000,
            })
        }
    });
};

verCarrito.addEventListener("click", pintarCarrito);

// FUNCION ELIMINAR
const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito=carrito.filter((carritoId) => {
        return carritoId !== foundId
    });

    pintarCarrito();
    contadorCarrito();
    savelocal();
};

// CARTEL PRODUCTO ELIMINADO
function alertEliminar() {
    Toastify({
        text: "Producto eliminado",
        duration: 1500,
        gravity: "top",
        offset: {
            x: 30,
            y: 85
        },
        style: {
            background: "rgb(66,207,255)",
            color: "white",
        },
    }).showToast();
};