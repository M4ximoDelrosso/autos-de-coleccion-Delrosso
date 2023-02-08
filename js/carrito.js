// MODAL CARRITO
const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
        <p>MODELO</p>
        <p>PRECIO</p>
        <p>CANTIDAD</p>
        <p>SUBTOTAL</p>
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

    // PRODUCTOS DEL CARRITO
    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
        <p>${product.modelo} </p>
        <p>$ ${product.precio} </p>
        <p>${product.cantidad}</p>
        <p>$ ${product.cantidad * product.precio}</p>
        <span class="delete-product btnPointer">❌</span>
        `;
        modalContainer.append(carritoContent);


        /*
        // RESTAR CANTIDAD
        let restarProduct = carritoContent.getElementsByClassName("restar");
        restarProduct.addEventListener("click", () => {
            console.log("Funciona resta");

            savelocal();
            pintarCarrito();
        });
        <span class="restar"> - </span>
        <span class="sumar"> + </span>

        // SUMAR CANTIDAD
        let sumarProduct = carritoContent.getElementsByClassName("sumar");
        sumarProduct.addEventListener("click", () => {
            console.log("Funciona suma");

            savelocal();
            pintarCarrito();
        });
*/

        // BOTON ELIMINAR
        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);
        });
    });

    // TOTAL
    const total = carrito.reduce((t, item) => t + item.precio * item.cantidad, 0);

    const comprar = document.createElement("div");
    comprar.className = "total-content";
    comprar.innerHTML = `TOTAL DEL CARRITO: $${total}`;
    modalContainer.append(comprar);

    //BOTON COMPRAR CARRITO
    const buttonShop = document.createElement("button");
    buttonShop.className = "button-shop btnPointer";
    buttonShop.innerText = `FINALIZAR COMPRA`;
    modalContainer.append(buttonShop);
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
