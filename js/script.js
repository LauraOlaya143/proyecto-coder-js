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
    precio: 25
},
{
    id: 3,
    id_2: 103,
    nombre: "Raven Queen First Chapter",
    saga: "Ever After High",
    categoria: "everafterhigh",
    img: "./imagenes/basic_raven_queen_eah.jpg",
    descripcion: "muñeca Ever After high del 2013",
    precio: 40
},
{
    id: 4,
    id_2: 104,
    nombre: "Apple White First Chapter",
    saga: "Ever After High",
    categoria: "everafterhigh",
    img: "./imagenes/basic_apple_white_eah.jpeg",
    descripcion: "muñeca Ever After High del 2013",
    precio: 40
},
{
    id: 5,
    id_2: 105,
    nombre: "Barbie Escuela de Princesas",
    saga: "Barbie",
    categoria: "barbie",
    img: "./imagenes/barbie_escuela_de_princesas_doll.jpg",
    descripcion: "muñeca Barbie del 2011",
    precio: 15
},
{
    id: 6,
    id_2: 106,
    nombre: "Barbie Mariposa & the fairy princess",
    saga: "Barbie",
    categoria: "barbie",
    img: "./imagenes/barbie_mariposa_doll.jpg",
    descripcion: "muñeca Barbie del 2013",
    precio: 15
},
{
    id: 7,
    id_2: 107,
    nombre: "Violet Willow - Purple Fashion - serie 1",
    saga: "Rainbow High",
    categoria: "rainbowhigh",
    img: "./imagenes/violet_willow_rh.jpg",
    descripcion: "muñeca Rainbow high del 2020",
    precio: 35
},
{
    id: 8,
    id_2: 108,
    nombre: "Bella Parker - Pink Fashion - serie 2",
    saga: "Rainbow High",
    categoria: "rainbowhigh",
    img: "./imagenes/bella_parker_rh.jpg",
    descripcion: "muñeca Rainbow High del 2020",
    precio: 35
},
{
    id: 9,
    id_2: 109,
    nombre: "Beetlejuice  & Lydia Deetz - Skullertor Doll 2-Pack",
    saga: "Coleccionables",
    categoria: "coleccionables",
    img: "./imagenes/beetlejuice_ skullector.jpg",
    descripcion: "muñeca Monster High coleccionables basada en la pelicula Beetlejuice",
    precio: 90
},
{
    id: 10,
    id_2: 1010,
    nombre: "Lily Cheng - 2022 Año Nuevo del Tigre",
    saga: "Coleccionables",
    categoria: "coleccionables",
    img: "./imagenes/lily_cheng_coleccionable.jpeg",
    descripcion: "muñeca Rainbow High del nuevo año chino 2022",
    precio: 90
},
]; 

const carrito_compras = []
const wishlist = [];

const eliminar_producto = () => {
    let list = "Elija el producto que desea eliminar: \n"
    let index = 1
    for (const item of carrito_compras) {
        list += index++ + " - " + item.nombre + " - " + item.saga + " - " + item.precio + " USD\n"
    }
    let seleccion = parseInt(prompt(list))
    carrito_compras.splice(seleccion - 1, 1);
    alert("El producto se elimino de tu carrito con exito");
    console.log(carrito_compras);
};

const divWISHLIST = document.getElementById("objetos_wishlist")
const divCARRITO = document.getElementById("objetos_carrito")

const render_carrito = (element) => {
        let carta = document.createElement("div");
        carta.className = "card_2";

        const contenedor = document.createElement("div")
        contenedor.classList.add("info_2")

        const img = document.createElement("img");
        img.classList.add("img_2");
        img.setAttribute("src", element.img);

        const body = document.createElement("div")
        body.classList.add("items");

        const titulo = document.createElement('h4');
        titulo.textContent = element.nombre;

        const precio = document.createElement("h4")
        precio.textContent = `${element.precio} $`;

        const boton1 = document.createElement("button")
        boton1.classList.add("botones_2")
        boton1.addEventListener("click", () => {
        })
        boton1.innerHTML = `<button id="btn${element.id}"><i class="fas fa-times-circle"></i></button>`

        body.appendChild (titulo)
        body.appendChild (precio)

        contenedor.appendChild(img)
        contenedor.appendChild(body)
        contenedor.appendChild(boton1)

        carta.appendChild(contenedor)
        console.log (carta)
        divCARRITO.appendChild(carta)
    }
;

const render_wishlist = (element) => {
    let carta = document.createElement("div");
    carta.className = "card_2";

    const contenedor = document.createElement("div")
    contenedor.classList.add("info_2")

    const img = document.createElement("img");
    img.classList.add("img_2");
    img.setAttribute("src", element.img);

    const body = document.createElement("div")
    body.classList.add("items");

    const titulo = document.createElement('h4');
    titulo.textContent = element.nombre;

    const precio = document.createElement("h4")
    precio.textContent = `${element.precio} $`;

    const boton1 = document.createElement("button")
    boton1.classList.add("botones_2")
    boton1.addEventListener("click", () => {
    })
    boton1.innerHTML = `<button id="btn${element.id}"><i class="fas fa-times-circle"></i></button>`

    body.appendChild (titulo)
    body.appendChild (precio)

    contenedor.appendChild(img)
    contenedor.appendChild(body)
    contenedor.appendChild(boton1)

    carta.appendChild(contenedor)
    console.log (carta)
    divWISHLIST.appendChild(carta)
}
;

let total = document.getElementById("total_pagar")

const total_p = () => {
    let precio = carrito_compras.map((num) => num.precio)
    const total_2 = precio.reduce((a, b) => a + b, 0)
    let text = document.createElement("h6");
    text.textContent = `${total_2} USD`;
    total.appendChild(text);

}

const divID = document.getElementById("contenedor")

const renderProductos = (array) => {
    for (let element of array) {
        let carta = document.createElement("div");
        carta.className = "card";

        const body = document.createElement("div")
        body.classList.add("items");

        const contenedor = document.createElement("div")
        contenedor.classList.add("info")

        const img = document.createElement("img");
        img.classList.add("cajaGrid__img");
        img.setAttribute("src", element.img);

        const titulo = document.createElement('h4');
        titulo.textContent = element.nombre;

        const precio = document.createElement("h4")
        precio.textContent = `${element.precio} $`;

        const descripcion = document.createElement("p")
        descripcion.textContent = element.descripcion;

        const boton1 = document.createElement("button")
        boton1.classList.add("botones")
        boton1.addEventListener("click", () => {
            carrito_compras.push(productos[element.id - 1])
            alert("Su producto se ha agregado al carrito con exito")
            sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
            render_carrito(productos[element.id - 1])
            total_p()
        })
        boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra"><i class="fas fa-cart-plus iconos_2"></i></button>`

        const boton2 = document.createElement("button")
        boton2.classList.add("botones--2")
        boton2.addEventListener("click", () => {
            wishlist.push(productos[element.id - 1])
            alert("Su producto se ha agregado a la wishlist con exito")
            sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
            render_wishlist(productos[element.id - 1])
        })
        boton2.innerHTML = `<button id="btn${element.id_2}" class="btn_compra"><i class="fas fa-star iconos_2"></i></button>`

        contenedor.appendChild(img)
        contenedor.appendChild(titulo)
        contenedor.appendChild(precio)
        contenedor.appendChild(descripcion)
        contenedor.appendChild(boton1)
        contenedor.appendChild(boton2)

        carta.appendChild(body)
        carta.appendChild(contenedor)
        console.log (carta)
        divID.appendChild(carta)
    }
};

const filtrado_MH = productos.filter((categorias) => categorias.saga == "Monster High")
const filtrado_EAH = productos.filter((categorias) => categorias.saga == "Ever After High")
const filtrado_RH = productos.filter((categorias) => categorias.saga == "Rainbow High")
const filtrado_Barbie = productos.filter((categorias) => categorias.saga == "Barbie")
const filrado_coleccion = productos.filter((categorias) => categorias.saga == "Coleccionables")

const mostrar_productos = renderProductos(productos)

let radioAllDolls = document.getElementById("alldolls")

let radioMH = document.getElementById("monsterhigh")

let radioEAH = document.getElementById("everafterhigh")

let radioRH = document.getElementById("rainbowhigh")

let radioBarbie = document.getElementById("barbie")

let radioColeccion = document.getElementById("coleccionables")

function cambiarimg(source) {
    document.getElementById("fondoprincipal").src = source;
}

const filtrar_muñecas = (array) => {
    divID.innerHTML = " ";
    for(let element of array){
            let carta = document.createElement("div");
            carta.className = "card";
    
            const body = document.createElement("div")
            body.classList.add("items");
    
            const contenedor = document.createElement("div")
            contenedor.classList.add("info")
    
            const img = document.createElement("img");
            img.classList.add("cajaGrid__img");
            img.setAttribute("src", element.img);
    
            const titulo = document.createElement('h4');
            titulo.textContent = element.nombre;
    
            const precio = document.createElement("h4")
            precio.textContent = `${element.precio} $`;
    
            const descripcion = document.createElement("p")
            descripcion.textContent = element.descripcion;
    
            const boton1 = document.createElement("button")
            boton1.classList.add("botones")
            boton1.addEventListener("click", () => {
                carrito_compras.push(productos[element.id - 1])
                alert("Su producto se ha agregado al carrito con exito")
                sessionStorage.clear()
                sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
                render_carrito(productos[element.id - 1])
                total_p()
            })
            boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra"><i class="fas fa-cart-plus iconos_2"></i></button>`
    
            const boton2 = document.createElement("button")
            boton2.classList.add("botones--2")
            boton2.addEventListener("click", () => {
                wishlist.push(productos[element.id - 1])
                alert("Su producto se ha agregado a la wishlist con exito")
                sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
            })
            boton2.innerHTML = `<button id="btn${element.id_2}" class="btn_compra"><i class="fas fa-star iconos_2"></i></button>`
    
            contenedor.appendChild(img)
            contenedor.appendChild(titulo)
            contenedor.appendChild(precio)
            contenedor.appendChild(descripcion)
            contenedor.appendChild(boton1)
            contenedor.appendChild(boton2)
    
            carta.appendChild(body)
            carta.appendChild(contenedor)
            console.log (carta)
            divID.appendChild(carta)
        }
    }
radioMH.addEventListener("click", ()=> {
    alert("Elegiste ver las muñecas Monster High")
    cambiarimg("./imagenes/fondo1_versionMH.png")
    filtrar_muñecas(filtrado_MH)
})

radioEAH.addEventListener("click", ()=>{
    alert("Elegiste ver las muñecas Ever After High")
    cambiarimg("./imagenes/fondo1_versionEAH.png")
    filtrar_muñecas(filtrado_EAH)
})

radioRH.addEventListener("click", ()=>{
    alert("Elegiste ver las muñecas Rainbow High")
    cambiarimg("./imagenes/fondo1_versionRH.png")
    filtrar_muñecas(filtrado_RH)

})

radioBarbie.addEventListener("click", ()=>{
    alert("Elegiste ver las mueñca Barbie")
    cambiarimg("./imagenes/fondo1_versionB.png")
    filtrar_muñecas(filtrado_Barbie)

})

radioColeccion.addEventListener("click", ()=>{
    alert("Elegiste ver las muñecas Coleccionables")
    cambiarimg("./imagenes/fondo1_versioncollector.png")
    filtrar_muñecas(filrado_coleccion)
})

radioAllDolls.addEventListener("click", ()=>{
    alert("Elegiste ver todas las muñecas.")
    cambiarimg("./imagenes/fondo1.png")
    filtrar_muñecas(productos)
})

const busqueda = document.querySelector("#buscador")
const btn_busqueda = document.querySelector("#boton_buscar")

const filtrar_busqueda = () => {
    divID.innerHTML = " ";
    texto = busqueda.value.toLowerCase()
    for(let element of productos){
        let nombre = element.nombre.toLocaleLowerCase()
        let categoria = element.categoria.toLocaleLowerCase()
        if(nombre.indexOf(texto) !== -1 || categoria.indexOf(texto) !== -1){
            let carta = document.createElement("div");
            carta.className = "card";
    
            const body = document.createElement("div")
            body.classList.add("items");
    
            const contenedor = document.createElement("div")
            contenedor.classList.add("info")
    
            const img = document.createElement("img");
            img.classList.add("cajaGrid__img");
            img.setAttribute("src", element.img);
    
            const titulo = document.createElement('h4');
            titulo.textContent = element.nombre;
    
            const precio = document.createElement("h4")
            precio.textContent = `${element.precio} $`;
    
            const descripcion = document.createElement("p")
            descripcion.textContent = element.descripcion;
    
            const boton1 = document.createElement("button")
            boton1.classList.add("botones")
            boton1.addEventListener("click", () => {
                carrito_compras.push(productos[element.id - 1])
                alert("Su producto se ha agregado al carrito con exito")
                sessionStorage.clear()
                sessionStorage.setItem("carrito", JSON.stringify(carrito_compras));
                render_carrito(productos[element.id - 1])
                total_p()
            })
            boton1.innerHTML = `<button id="btn${element.id}" class="btn_compra"><i class="fas fa-cart-plus iconos_2"></i></button>`
    
            const boton2 = document.createElement("button")
            boton2.classList.add("botones--2")
            boton2.addEventListener("click", () => {
                wishlist.push(productos[element.id - 1])
                alert("Su producto se ha agregado a la wishlist con exito")
                sessionStorage.setItem("wishlist", JSON.stringify(wishlist));
            })
            boton2.innerHTML = `<button id="btn${element.id_2}" class="btn_compra"><i class="fas fa-star iconos_2"></i></button>`
    
            contenedor.appendChild(img)
            contenedor.appendChild(titulo)
            contenedor.appendChild(precio)
            contenedor.appendChild(descripcion)
            contenedor.appendChild(boton1)
            contenedor.appendChild(boton2)
    
            carta.appendChild(body)
            carta.appendChild(contenedor)
            console.log (carta)
            divID.appendChild(carta)
        }
    }
    if (divID.innerHTML === " "){
        divID.innerHTML += `
        <h6>No se ha encontrado ningun producto :c </h6>`
    }
}

btn_busqueda.addEventListener("click", filtrar_busqueda)
