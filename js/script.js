//variables necesarias

const carrito_compras = [];
const wishlist = [];
const divWISHLIST = document.getElementById("objetos_wishlist");
const divCARRITO = document.getElementById("objetos_carrito");
const divID = document.getElementById("contenedor");

// Creacion de los productos

const renderProductos = (array) => {
    divID.innerHTML = " ";
    for (let element of array) {
        let carta = document.createElement("div");
        carta.className = "card";

        const body = document.createElement("div");
        body.classList.add("items");

        const contenedor = document.createElement("div");
        contenedor.classList.add("info");

        const img = document.createElement("img");
        img.classList.add("cajaGrid__img");
        img.setAttribute("src", element.img);

        const titulo = document.createElement("h4");
        titulo.textContent = element.nombre;

        const precio = document.createElement("h4");
        precio.textContent = `${element.precio} $`;

        const descripcion = document.createElement("p");
        descripcion.textContent = element.descripcion;

        const boton1 = document.createElement("button");
        boton1.classList.add("botones");
        boton1.addEventListener("click", () => {
            carrito_compras.push(array[element.id - 1]);
            Toastify({
                text: "Su producto se ha agregado al carrito con exito",
                duration: 3000,
                close: true,
                style: {
                    background: "linear-gradient(to right, #eecda3, #ef629f)",
                },
            }).showToast();
            sessionStorage.removeItem("carrito");
            sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
            render_carrito(carrito_compras, divCARRITO, "carrito");
            total_p(total);
        });
        boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra btn_carrito"><i class="fas fa-cart-plus iconos_2"></i></button>`;

        const boton2 = document.createElement("button");
        boton2.classList.add("botones--2");
        boton2.addEventListener("click", () => {
            wishlist.push(array[element.id - 1]);
            Toastify({
                text: "Su producto se ha agregado a la wishlist con exito",
                duration: 3000,
                close: true,
                style: {
                    background: "linear-gradient(to right, #eecda3, #ef629f)",
                },
            }).showToast();
            sessionStorage.removeItem("wishlist");
            sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
            render_carrito(wishlist, divWISHLIST, "wishlist");
        });
        boton2.innerHTML = `<button id="btn${element.id_2}" class="btn_compra"><i class="fas fa-star iconos_2"></i></button>`;

        contenedor.appendChild(img);
        contenedor.appendChild(titulo);
        contenedor.appendChild(precio);
        contenedor.appendChild(descripcion);
        contenedor.appendChild(boton1);
        contenedor.appendChild(boton2);

        carta.appendChild(body);
        carta.appendChild(contenedor);
        divID.appendChild(carta);
    }
};

// info del JSON 

async function traerDatos() {
    const respuesta = await fetch('./js/productos.json');
    const productos = await respuesta.json();
    renderProductos(productos);
}

traerDatos();

// Carrito de forma fisica

const render_carrito = (array, div, nombre_storage) => {
    div.innerHTML = " ";
    let index = 1;
    for (let element of array) {
        let carta = document.createElement("div");
        carta.className = "card_2";

        const contenedor = document.createElement("div");
        contenedor.classList.add("info_2");

        const img = document.createElement("img");
        img.classList.add("img_2");
        img.setAttribute("src", element.img);

        const body = document.createElement("div");
        body.classList.add("items");

        const titulo = document.createElement("h4");
        titulo.textContent = `${index}. ${element.nombre}`;

        const precio = document.createElement("h4");
        precio.textContent = `${element.precio} $`;

        const boton1 = document.createElement("button");
        boton1.classList.add("botones_2");
        boton1.addEventListener("click", () => {
            let indice = array.indexOf(element)
            array.splice(indice, 1);
            sessionStorage.removeItem(nombre_storage);
            sessionStorage.setItem(nombre_storage, JSON.stringify(array));
            render_carrito(array, div);
            total_p(total);
            Toastify({
                text: "El producto se ha eliminado con exito",
                duration: 3000,
                close: true,
                style: {
                    background: "linear-gradient(to right, #eecda3, #ef629f)",
                },
            }).showToast();
        });
        boton1.innerHTML = `<button id="btn${element.id}" class="btn_eliminarproducto"><i class="fas fa-times-circle"></i></button>`;

        body.appendChild(titulo);
        body.appendChild(precio);

        contenedor.appendChild(img);
        contenedor.appendChild(body);
        contenedor.appendChild(boton1);

        carta.appendChild(contenedor);
        console.log(carta);
        div.appendChild(carta);
        index++;
    }
};

// SubTotal de la compra

let total = document.getElementById("total_pagar");

const total_p = (a) => {
    a.innerHTML = " ";
    let precio = carrito_compras.map((num) => num.precio);
    const total_2 = precio.reduce((a, b) => a + b, 0);
    let text = document.createElement("h6");
    text.textContent = ` Total: ${total_2} USD`;
    a.appendChild(text);
};

// filtros para las categorias

let btn_categorias = document.querySelector('#categorias');

function cambiarimg(source) {
    document.getElementById("fondoprincipal").src = source;
};

function filtro_muñecas(array) {
    let doll = btn_categorias.value;
    if (!doll) {
        return array;
    } else {
        result = array.filter((e) => e.categoria == doll);
        return result;
    }
};

const renderMuñecas_filtro = (array1, array2) => {
    divID.innerHTML = " ";
    for (let element of array1) {
        let carta = document.createElement("div");
        carta.className = "card";

        const body = document.createElement("div");
        body.classList.add("items");

        const contenedor = document.createElement("div");
        contenedor.classList.add("info");

        const img = document.createElement("img");
        img.classList.add("cajaGrid__img");
        img.setAttribute("src", element.img);

        const titulo = document.createElement("h4");
        titulo.textContent = element.nombre;

        const precio = document.createElement("h4");
        precio.textContent = `${element.precio} $`;

        const descripcion = document.createElement("p");
        descripcion.textContent = element.descripcion;

        const boton1 = document.createElement("button");
        boton1.classList.add("botones");
        boton1.addEventListener("click", () => {
            carrito_compras.push(array2[element.id - 1]);
            Toastify({
                text: "Su producto se ha agregado al carrito con exito",
                duration: 3000,
                close: true,
                style: {
                    background: "linear-gradient(to right, #eecda3, #ef629f)",
                },
            }).showToast();
            sessionStorage.removeItem("carrito");
            sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
            render_carrito(carrito_compras, divCARRITO, "carrito");
            total_p(total);
        });
        boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra btn_carrito"><i class="fas fa-cart-plus iconos_2"></i></button>`;

        const boton2 = document.createElement("button");
        boton2.classList.add("botones--2");
        boton2.addEventListener("click", () => {
            wishlist.push(array2[element.id - 1]);
            Toastify({
                text: "Su producto se ha agregado a la wishlist con exito",
                duration: 3000,
                close: true,
                style: {
                    background: "linear-gradient(to right, #eecda3, #ef629f)",
                },
            }).showToast();
            sessionStorage.removeItem("wishlist");
            sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
            render_carrito(wishlist, divWISHLIST, "wishlist");
        });
        boton2.innerHTML = `<button id="btn${element.id_2}" class="btn_compra"><i class="fas fa-star iconos_2"></i></button>`;

        contenedor.appendChild(img);
        contenedor.appendChild(titulo);
        contenedor.appendChild(precio);
        contenedor.appendChild(descripcion);
        contenedor.appendChild(boton1);
        contenedor.appendChild(boton2);

        carta.appendChild(body);
        carta.appendChild(contenedor);
        divID.appendChild(carta);
    }
};

async function filtrar() {
    const respuesta = await fetch('./js/productos.json');
    const productos = await respuesta.json();
    let doll = btn_categorias.value;
    let arrayfiltrado = productos.filter((e) => e.categoria == doll)
    renderMuñecas_filtro(arrayfiltrado, productos);
}

let btn_filtro = document.querySelector('#filtrar');

btn_filtro.addEventListener('click', () => {
    filtrar();
    btn_categorias.value == "" && traerDatos();
    btn_categorias.value == "" && cambiarimg("./imagenes/fondo2.png");
    btn_categorias.value == "monster high" && cambiarimg("./imagenes/fondo2_versionMH.png");
    btn_categorias.value == "ever after high" && cambiarimg("./imagenes/fondo2_versionEAH.png");
    btn_categorias.value == "rainbow high" && cambiarimg("./imagenes/fondo2_versionRH.png");;
    btn_categorias.value == "barbie" && cambiarimg("./imagenes/fondo2_versionB.png");
    btn_categorias.value == "coleccionables" && cambiarimg("./imagenes/fondo2_versioncollector.png");
    
})

// barra de busqueda

const busqueda = document.querySelector("#buscador");
const btn_busqueda = document.querySelector("#boton_buscar");
const no_producto = () => {
    swal.fire ({
        title: "No se ha encontrado ningun producto",
        text: "porfavor intentelo de nuevo",
        icon: "error",
        confirmButtonText: "Ok"
    })
};

const filtrar_busqueda = (array) => {
    divID.innerHTML = " ";
    texto = busqueda.value.toLowerCase();
    for (let element of array) {
        let nombre = element.nombre.toLocaleLowerCase();
        let categoria = element.categoria.toLocaleLowerCase();
        if (nombre.indexOf(texto) !== -1 || categoria.indexOf(texto) !== -1) {
            let carta = document.createElement("div");
            carta.className = "card";

            const body = document.createElement("div");
            body.classList.add("items");

            const contenedor = document.createElement("div");
            contenedor.classList.add("info");

            const img = document.createElement("img");
            img.classList.add("cajaGrid__img");
            img.setAttribute("src", element.img);

            const titulo = document.createElement("h4");
            titulo.textContent = element.nombre;

            const precio = document.createElement("h4");
            precio.textContent = `${element.precio} $`;

            const descripcion = document.createElement("p");
            descripcion.textContent = element.descripcion;

            const boton1 = document.createElement("button");
            boton1.classList.add("botones");
            boton1.addEventListener("click", () => {
                carrito_compras.push(array[element.id - 1]);
                Toastify({
                    text: "Su producto se ha agregado al carrito con exito",
                    duration: 3000,
                    close: true,
                    style: {
                        background: "linear-gradient(to right, #eecda3, #ef629f)",
                    },
                }).showToast();
                sessionStorage.removeItem("carrito");
                sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
                render_carrito(carrito_compras, divCARRITO);
                total_p(total);
            });
            boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra"><i class="fas fa-cart-plus iconos_2"></i></button>`;

            const boton2 = document.createElement("button");
            boton2.classList.add("botones--2");
            boton2.addEventListener("click", () => {
                Toastify({
                    text: "Su producto se ha agregado a la wishlist con exito",
                    duration: 3000,
                    close: true,
                    style: {
                        background: "linear-gradient(to right, #eecda3, #ef629f)",
                    },
                }).showToast();
                wishlist.push(array[element.id - 1]);
                sessionStorage.removeItem("wishlist");
                sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
                render_carrito(wishlist, divWISHLIST);
            });
            boton2.innerHTML = `<button id="btn${element.id_2}" class="btn_compra"><i class="fas fa-star iconos_2"></i></button>`;

            contenedor.appendChild(img);
            contenedor.appendChild(titulo);
            contenedor.appendChild(precio);
            contenedor.appendChild(descripcion);
            contenedor.appendChild(boton1);
            contenedor.appendChild(boton2);

            carta.appendChild(body);
            carta.appendChild(contenedor);
            console.log(carta);
            divID.appendChild(carta);
        }
    }
    divID.innerHTML === " " && no_producto();
};

async function filtrar_productos() {
        const respuesta = await fetch('./js/productos.json');
        const productos = await respuesta.json();
        filtrar_busqueda(productos);
    }

btn_busqueda.addEventListener("click", () => {
    filtrar_productos();
});

// boton para borrar todo el carrito

const btn_borrar_carrito = document.querySelector("#borrar_todo");
const btn_borrar_wishlist = document.querySelector("#borrar_todo_wishlist");

btn_borrar_carrito.addEventListener("click", () => {
    if (carrito_compras.length > 0) {
        swal.fire ({
            title: "¡Tu carrito se elimino con exito!",
            text: "Ya no tienes ningun producto en tu carrito",
            icon: "success",
            confirmButtonText: "Ok"
        })
        for (let i = carrito_compras.length; i > 0; i--) {
            carrito_compras.pop();
        }
        sessionStorage.removeItem("carrito");
        render_carrito(carrito_compras, divCARRITO);
        total_p(total);
    } else {
        swal.fire ({
            title: "Su carrito ya esta vacio",
            text: "No tienes nada en tu carrito",
            icon: "info",
            confirmButtonText: "Ok"
        })
    }

});

btn_borrar_wishlist.addEventListener("click", () => {
    if (wishlist.length > 0) {
        for (let i = wishlist.length; i > 0; i--) {
            wishlist.pop();
        }
        swal.fire ({
            title: "¡Tu Wishlist se elimino con exito!",
            text: "Ya no tienes ningun producto en tu wishlist",
            icon: "success",
            confirmButtonText: "Ok"
        })
        sessionStorage.removeItem("wishlist");
        render_carrito(wishlist, divWISHLIST);
    } else {
        swal.fire ({
            title: "Su Wishlist ya esta vacia",
            text: "No tienes nada en tu wishlist",
            icon: "info",
            confirmButtonText: "Ok"
        })
    }

});

// finalizacion de compra

const btn_fin_compra = document.querySelector("#btn_fin_compra");
const divFINCOMPRA = document.getElementById("finalizar_compra");
const divFORMULARIO = document.getElementById("formulario");

const renderFormulario = () => {
    divFORMULARIO.innerHTML = ` `
    divFORMULARIO.innerHTML = `
    <h2 class="titulo_dos">¡Finalizá tu compra!</h2>
    <div class="formulario">
    <form action="" method="" enctype="">
    <div class="formulario">
        <label for="nombre">Nombre</label>
        <input type="text" id="nombre" class="formulario_input nombre " required="text" name="nombre"placeholder="Tu nombre">
    </div>

    <div class="formulario">
        <label for="email">Tu Email</label>
        <input type="email" id="email" class="formulario_input email" required="email" placeholder="Tu Email">
    </div>

    <div class="formulario">
        <label for="telefono">Telefono</label>
        <input type="tel" id="telefono" class="formulario_input telefono" required="tel" placeholder="Tu telefono">
    </div>

    <div class="formulario">
        <label for="direccion">Direccion</label>
        <input type="text" id="direccion" class="formulario_input direccion" required="text" name="direccion" placeholder="Tu direccion">
    </div>
    <div>
        <h6 class="subtitulos_2">Datos de tarjeta</h6>
    </div>
    <div class="formulario">
            <label for="num_tarjeta">Numero de tarjeta</label>
            <input id="num_tarjeta" type="text" class="formulario_input card-number-input" placeholder="Tu tarjeta">
        </div>
        <div class="formulario">
            <label for="titular">Titular</label>
            <input type="text" id="titular" class="formulario_input card-holder-input" placeholder="Titular de la tarjeta">
        </div>
        <div class="formulario">
            <label for="cod_seguridad">Codigo de Seguridad</label>
            <input type="text" id="cod_seguridad" class="formulario_input cvv-input" placeholder="Cod seguridad">
        </div>
        <div class="formulario">
            <div class="inputBox">
                <label>Mes de Vencimiento</label>
                <select id="month" class="month-input input_seleccion">
                    <option value="month" selected disabled>Mes</option>
                </select>
                <label>Año de Vencimiento</label>
                <select id="year" class="year-input">
                    <option value="year" selected disabled>Año</option>                
                </select>
            </div>
            
        </div>
        <div >
        <h6 id="total_real" class="subtitulos_2">
        </div>
        <input type="submit" value="Enviar" class="btn_formulario submit-btn" id="btnEnviar">
    <div class="container">

    <div class="card-container">

        <div class="front">
            <div class="image">
                <img src="./imagenes/chip.png" alt="chip_tarjeta">
                <img class="cardLogo" src="" alt="">
            </div>
            <div class="card-number-box">0000 0000 0000 0000</div>
            <div class="flexbox">
                <div class="box">
                    <span>Titular</span>
                    <div class="card-holder-name">nombre completo</div>
                </div>
                <div class="box">
                    <span>Vencimiento</span>
                    <div class="expiration">
                        <span class="exp-month">mm</span>
                        <span class="exp-year">aa</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="back">
            <div class="stripe"></div>
            <div class="box">
                <span>Codigo de Seguridad</span>
                <div class="cvv-box"></div>
                <img class="cardLogo" src="" alt="">
            </div>
        </div>
        
    </form>
    </div>
    
    
    
    </div>`;

};


const renderCompra = () => {
    divFINCOMPRA.innerHTML = ` `
    const carrito_storage = JSON.parse(sessionStorage.getItem("carrito"));
    divFINCOMPRA.innerHTML = `<h6 class="titulo_dos">Tu Compra:</h6>`
    for (let element of carrito_storage) {
        let auto3 = document.createElement("div");
        auto3.innerHTML = `
        <div class="card mb-3 card_3" style="max-width: 540px;">
        <div class="row g-0">
            <div class="col-md-4">
                <img src="${element.img}" class="img-fluid rounded-start" alt="imgCompra">
            </div>
            <div class="col-md-8">
                <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text">${element.precio} USD</p>
                </div>
            </div>
        </div>
        </div>`
        divFINCOMPRA.appendChild(auto3);
    }
}

btn_fin_compra.addEventListener("click", () => {
    const carrito_storage = JSON.parse(sessionStorage.getItem("carrito"));
    if (carrito_storage.length > 0) {
        divFORMULARIO.innerHTML = `<h2 class="titulo_dos">¡Finalizá tu compra!</h2>`
        renderFormulario()
        renderCompra();
        let total_2 = document.getElementById("total_real");
        total_p(total_2);
        const selectYear = document.querySelector('#year');
        const selectMonth = document.querySelector('#month');
        const nombre_usuario = document.querySelector(".nombre")
        const email_usuario = document.querySelector(".email")
        const telefono_usuario = document.querySelector(".telefono")
        const direccion_usuario = document.querySelector(".direccion")
        const nombreTitular = document.querySelector('.card-holder-input');
        const numeroTarjeta = document.querySelector('.card-number-input');
        const mesVencimiento = document.querySelector('.month-input');
        const anioVencimiento = document.querySelector('.year-input');
        const cvv = document.querySelector('.cvv-input');
        const btnEnviar = document.querySelector('#btnEnviar');
        const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030];
        const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

        years.forEach(element => {
            let option = `<option>${element}</option>`;
            selectYear.innerHTML += option;
        });

        months.forEach(element => {
            let option = `<option>${element}</option>`
            selectMonth.innerHTML += option;
        });

        numeroTarjeta.addEventListener('input', () => {
            document.querySelector('.card-number-box').innerText = numeroTarjeta.value;
        });

        nombreTitular.addEventListener('input', () => {
            document.querySelector('.card-holder-name').innerText = nombreTitular.value;
        });

        mesVencimiento.oninput = () => {
            document.querySelector('.exp-month').innerText = mesVencimiento.value;
        }

        anioVencimiento.oninput = () => {
            document.querySelector('.exp-year').innerText = anioVencimiento.value;
        }

        cvv.oninput = () => {
            document.querySelector('.cvv-box').innerText = cvv.value;
        }

        cvv.onmouseenter = () => {
            document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(-180deg)';
            document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(0deg)';
        }

        cvv.onmouseleave = () => {
            document.querySelector('.front').style.transform = 'perspective(1000px) rotateY(0deg)';
            document.querySelector('.back').style.transform = 'perspective(1000px) rotateY(180deg)';
        }

        let cleave = new Cleave(numeroTarjeta, {
            creditCard: true,
            onCreditCardTypeChanged: (type) => {
                const logos = document.querySelectorAll('.cardLogo');
                logos.forEach(element => {
                    element.src = `./imagenes/${type}.png`
                })
            }
        })

        btnEnviar.addEventListener('click', (event) => {
            event.preventDefault();
            const data = {
                nombre_usuario: nombre_usuario.value,
                email: email_usuario.value,
                telefono: telefono_usuario.value,
                direccion: direccion_usuario.value,
                nombre_titular: nombreTitular.value,
                numeroTarjeta: numeroTarjeta.value,
                mes: mesVencimiento.value,
                anio: anioVencimiento.value,
                cvv: cvv.value
            };

            Swal.fire({
                title: '¿Deseas guardar tus datos?',
                showCancelButton: true,
                confirmButtonText: 'Guardar'
            }).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem('data', JSON.stringify(data))
                    Swal.fire('Se guardaron los datos, ¡Gracias por su compra!', '', 'success');
                    setTimeout(() => {
                        sessionStorage.removeItem("carrito");
                        sessionStorage.removeItem("wishlist");
                        location.reload();
                    }, 2000);

                } else if (result.dismiss === Swal.DismissReason.cancel) {
                    Swal.fire(
                        'Los datos no se guardaron. ¡Gracias por su compra!',
                        '',
                        'info'
                    );
                    setTimeout(() => {
                        sessionStorage.removeItem("carrito");
                        sessionStorage.removeItem("wishlist");
                        location.reload();
                    }, 2000);

                }
            })
        })
    }

});