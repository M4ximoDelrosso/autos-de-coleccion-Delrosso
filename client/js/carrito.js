// MODAL CARRITO
const modalOverlay = document.getElementById("modalOverlay");

const pintarCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    modalOverlay.style.display = "block";
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
        modalOverlay.style.display = "none";
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
        <p class="templateAreaA">${product.modelo} </p>
        <p class="rigth templateAreaB">$ ${product.precio} </p>
            <span class="restar rigth"> - </span>
            <p class="center templateAreaC">${product.cantidad}</p>
            <span class="sumar"> + </span>
        <p class="templateAreaD">$ ${product.cantidad * product.precio}</p>
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
    <div id="button-checkout"></div>
    `;
    modalContainer.append(comprar);

    //INTEGRACION MERCADO PAGO
    const mercadopago = new MercadoPago("TEST-8ab0cf70-2ec3-4e2c-a71d-d30e2b5f18d3", {
        locale: "es-AR", // The most common are: 'pt-BR', 'es-AR' and 'en-US'
        });
    
        const checkoutButton = comprar.querySelector("#buttonShop");
    
        checkoutButton.addEventListener("click", function () {
            checkoutButton.remove(); // PARA REMOVER EL BOTON DEL HTML
    
            const orderData = {
                quantity: 1,
                description: "compra ecommerce",
                price: total,
            };
        
            fetch("http://localhost:8080/create_preference", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(orderData),
            })
            .then(function (response) {
                return response.json();
            })
            .then(function (preference) {
                createCheckoutButton(preference.id);
            })
            .catch(function () {
                alert("Error");
            });
        });
    
        function createCheckoutButton(preferenceId) {
            // Initialize the checkout
            const bricksBuilder = mercadopago.bricks();
        
            const renderComponent = async (bricksBuilder) => {
                //if (window.checkoutButton) window.checkoutButton.unmount();
    
                await bricksBuilder.create(
                    "wallet",
                    "button-checkout", // class/id where the payment button will be displayed
                    {
                        initialization: {
                            preferenceId: preferenceId,
                        },
                        callbacks: {
                            onError: (error) => console.error(error),
                            onReady: () => {},
                        },
                    }
                );
            };
            window.checkoutButton = renderComponent(bricksBuilder);
        };
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