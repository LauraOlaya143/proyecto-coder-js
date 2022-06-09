const productos = [{
        id: 1,
        id_2: 101,
        nombre: "Draculaura Boo-riginal creeproductions",
        saga: "Monster High",
        categoria: "monsterhigh",
        img: "./imagenes/basic_draculaura_mh.jpg",
        descripcion: "muñeca Monster High del 2022",
        precio: 25,
    },
    {
        id: 2,
        id_2: 102,
        nombre: "Frankie Stein Boo-riginal creeproductions",
        saga: "Monster High",
        categoria: "monsterhigh",
        img: "./imagenes/basic_frankie_mh.jpg",
        descripcion: "muñeca Monster High del 2022",
        precio: 25,
    },
    {
        id: 3,
        id_2: 103,
        nombre: "Raven Queen First Chapter",
        saga: "Ever After High",
        categoria: "everafterhigh",
        img: "./imagenes/basic_raven_queen_eah.jpg",
        descripcion: "muñeca Ever After high del 2013",
        precio: 40,
    },
    {
        id: 4,
        id_2: 104,
        nombre: "Apple White First Chapter",
        saga: "Ever After High",
        categoria: "everafterhigh",
        img: "./imagenes/basic_apple_white_eah.jpeg",
        descripcion: "muñeca Ever After High del 2013",
        precio: 40,
    },
    {
        id: 5,
        id_2: 105,
        nombre: "Barbie Escuela de Princesas",
        saga: "Barbie",
        categoria: "barbie",
        img: "./imagenes/barbie_escuela_de_princesas_doll.jpg",
        descripcion: "muñeca Barbie del 2011",
        precio: 15,
    },
    {
        id: 6,
        id_2: 106,
        nombre: "Barbie Mariposa & the fairy princess",
        saga: "Barbie",
        categoria: "barbie",
        img: "./imagenes/barbie_mariposa_doll.jpg",
        descripcion: "muñeca Barbie del 2013",
        precio: 15,
    },
    {
        id: 7,
        id_2: 107,
        nombre: "Violet Willow - Purple Fashion - serie 1",
        saga: "Rainbow High",
        categoria: "rainbowhigh",
        img: "./imagenes/violet_willow_rh.jpg",
        descripcion: "muñeca Rainbow high del 2020",
        precio: 35,
    },
    {
        id: 8,
        id_2: 108,
        nombre: "Bella Parker - Pink Fashion - serie 2",
        saga: "Rainbow High",
        categoria: "rainbowhigh",
        img: "./imagenes/bella_parker_rh.jpg",
        descripcion: "muñeca Rainbow High del 2020",
        precio: 35,
    },
    {
        id: 9,
        id_2: 109,
        nombre: "Beetlejuice  & Lydia Deetz - Skullertor Doll 2-Pack",
        saga: "Coleccionables",
        categoria: "coleccionables",
        img: "./imagenes/beetlejuice_ skullector.jpg",
        descripcion: "muñeca Monster High coleccionables basada en la pelicula Beetlejuice",
        precio: 90,
    },
    {
        id: 10,
        id_2: 1010,
        nombre: "Lily Cheng - 2022 Año Nuevo del Tigre",
        saga: "Coleccionables",
        categoria: "coleccionables",
        img: "./imagenes/lily_cheng_coleccionable.jpeg",
        descripcion: "muñeca Rainbow High del nuevo año chino 2022",
        precio: 90,
    },
];

//variables necesarias

const carrito_compras = [];
const wishlist = [];
const divWISHLIST = document.getElementById("objetos_wishlist");
const divCARRITO = document.getElementById("objetos_carrito");

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
        titulo.textContent = `${index} ${element.nombre}`;

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
        });
        boton1.innerHTML = `<button id="btn${element.id}"><i class="fas fa-times-circle"></i></button>`;

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

// Creacion de los productos

const divID = document.getElementById("contenedor");

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
            carrito_compras.push(productos[element.id - 1]);
            alert("Su producto se ha agregado al carrito con exito");
            sessionStorage.removeItem("carrito");
            sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
            render_carrito(carrito_compras, divCARRITO,"carrito");
            total_p(total);
        });
        boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra"><i class="fas fa-cart-plus iconos_2"></i></button>`;

        const boton2 = document.createElement("button");
        boton2.classList.add("botones--2");
        boton2.addEventListener("click", () => {
            wishlist.push(productos[element.id - 1]);
            alert("Su producto se ha agregado a la wishlist con exito");
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
const mostrar_productos = renderProductos(productos);

// filtros para los botones radio

const filtrado_MH = productos.filter(
    (categorias) => categorias.saga == "Monster High"
);
const filtrado_EAH = productos.filter(
    (categorias) => categorias.saga == "Ever After High"
);
const filtrado_RH = productos.filter(
    (categorias) => categorias.saga == "Rainbow High"
);
const filtrado_Barbie = productos.filter(
    (categorias) => categorias.saga == "Barbie"
);
const filtrado_coleccion = productos.filter(
    (categorias) => categorias.saga == "Coleccionables"
);

let radioAllDolls = document.getElementById("alldolls");

let radioMH = document.getElementById("monsterhigh");

let radioEAH = document.getElementById("everafterhigh");

let radioRH = document.getElementById("rainbowhigh");

let radioBarbie = document.getElementById("barbie");

let radioColeccion = document.getElementById("coleccionables");

function cambiarimg(source) {
    document.getElementById("fondoprincipal").src = source;
}

radioMH.addEventListener("click", () => {
    cambiarimg("./imagenes/fondo1_versionMH.png");
    renderProductos(filtrado_MH);
});

radioEAH.addEventListener("click", () => {
    cambiarimg("./imagenes/fondo1_versionEAH.png");
    renderProductos(filtrado_EAH);
});

radioRH.addEventListener("click", () => {
    cambiarimg("./imagenes/fondo1_versionRH.png");
    renderProductos(filtrado_RH);
});

radioBarbie.addEventListener("click", () => {
    cambiarimg("./imagenes/fondo1_versionB.png");
    renderProductos(filtrado_Barbie);
});

radioColeccion.addEventListener("click", () => {
    cambiarimg("./imagenes/fondo1_versioncollector.png");
    renderProductos(filtrado_coleccion);
});

radioAllDolls.addEventListener("click", () => {
    cambiarimg("./imagenes/fondo1.png");
    renderProductos(productos);
});

// barra de busqueda

const busqueda = document.querySelector("#buscador");
const btn_busqueda = document.querySelector("#boton_buscar");

const filtrar_busqueda = () => {
    divID.innerHTML = " ";
    texto = busqueda.value.toLowerCase();
    for (let element of productos) {
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
                carrito_compras.push(productos[element.id - 1]);
                alert("Su producto se ha agregado al carrito con exito");
                sessionStorage.removeItem("carrito");
                sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
                render_carrito(carrito_compras, divCARRITO);
                total_p(total);
            });
            boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra"><i class="fas fa-cart-plus iconos_2"></i></button>`;

            const boton2 = document.createElement("button");
            boton2.classList.add("botones--2");
            boton2.addEventListener("click", () => {
                wishlist.push(productos[element.id - 1]);
                alert("Su producto se ha agregado a la wishlist con exito");
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
    divID.innerHTML === " " && alert("No se ha encontrado ningun producto :c")
};

btn_busqueda.addEventListener("click", filtrar_busqueda);

// boton para borrar todo el carrito

const btn_borrar_carrito = document.querySelector("#borrar_todo");
const btn_borrar_wishlist = document.querySelector("#borrar_todo_wishlist");

btn_borrar_carrito.addEventListener("click", () => {
    alert("El carrito se elimino con exito");
    for (let i = carrito_compras.length; i > 0; i--) {
        carrito_compras.pop();
    }
    sessionStorage.removeItem("carrito");
    render_carrito(carrito_compras, divCARRITO);
    total_p(total);
});

btn_borrar_wishlist.addEventListener("click", () => {
    alert("La wishlist se elimino con exito");
    for (let i = wishlist.length; i > 0; i--) {
        wishlist.pop();
    }
    sessionStorage.removeItem("wishlist");
    render_carrito(wishlist, divWISHLIST);
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
        <input type="text" id="nombre" class="" required="text" name="nombre"placeholder="Tu nombre">
    </div>

    <div class="formulario">
        <label for="apellido">Apellido</label>
        <input type="text" id="apellido" class="" required="text" name="apellido" placeholder="Tu apellido">
    </div>

    <div class="formulario">
        <label for="email">Tu Email</label>
        <input type="email" id="email" class="" equired="email" placeholder="Tu Email">
    </div>

    <div class="formulario">
        <label for="telefono">Telefono</label>
        <input type="tel" id="telefono" class="" equired="telefono" placeholder="Tu telefono">
    </div>

    <div class="formulario">
        <label for="direccion">Direccion</label>
        <input type="text" id="direccion" class="" required="text" name="direccion" placeholder="Tu direccion">
    </div>
    
    <div id="total_real">

    </div>

    <div>
        <input id="btn_formulario"class="boton" type="submit" value="Finalizar Compra">
    </div>
    </form>
    </div>`;
    
};


const renderCompra = () => {
    divFINCOMPRA.innerHTML = ` `
    const carrito_storage = JSON.parse(sessionStorage.getItem("carrito"));
    divFINCOMPRA.innerHTML = `<h6 class="titulo_dos">Tu Compra:</h6>`
    for (let element of carrito_storage) {
        let carta = document.createElement("div");
        carta.innerHTML = `
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
        divFINCOMPRA.appendChild(carta);
    }
}

btn_fin_compra.addEventListener("click", () => {
    const carrito_storage = JSON.parse(sessionStorage.getItem("carrito"));
    if(carrito_storage.length > 0) {
    divFORMULARIO.innerHTML = `<h2 class="titulo_dos">¡Finalizá tu compra!</h2>`
    renderFormulario()
    renderCompra();
    let total_2 = document.getElementById("total_real");
    total_p(total_2);
    const btn_formulario = document.getElementById("btn_formulario");
    btn_formulario.addEventListener("click", () => {
        alert("gracias por su compra crack, vuelva pronto")
        sessionStorage.removeItem("carrito");
        location.reload()
    })
    } 
    
});