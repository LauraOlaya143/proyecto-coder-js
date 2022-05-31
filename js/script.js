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
const total = document.querySelector('#total');

const motrar_carrito = () => {
    let list = "Este es tu carrito: \n";
    let index = 1
    for (const item of carrito_compras) {
        list += index++ + " - " + item.nombre + " - " + item.saga + " - " + item.precio + " USD\n"
    }
    alert(list);
};

const motrar_wishlist = () => {
    let list = "Esta es tu wishlist: \n";
    let index = 1
    for (const item of wishlist) {
        list += index++ + " - " + item.nombre + " - " + item.saga + " - " + item.precio + " USD\n"
    }
    alert(list);
}

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

const total_pagar = () => {
    let lista = "El total a pagar por su compra es de: \n"
    let precio = carrito_compras.map((num) => num.precio)
    const total = precio.reduce((a, b) => a + b, 0)
    lista += total + " USD"
    alert(lista)
    if (total > 0) {
        let menu = "Elija como desea pagar \n";
        menu += "1- Efectivo  \n";
        menu += "2- Tarjeta de Credito  \n";
        let seleccion = parseInt(prompt(menu))
        switch (seleccion) {
            case 1:
                alert("Su compra se ha realizado con exito")
                for (let i = carrito_compras.length; i > 0; i--) {
                    carrito_compras.pop();
                }
                break
            case 2:
                alert("Su compra se ha realizado con exito, su pedido va en camino")
                for (let i = carrito_compras.length; i > 0; i--) {
                    carrito_compras.pop();
                }
                break
            default:
                alert("Porfavor ingrese una de las opciones validas del menu")
                break
        }
    } else {
        alert("No tienes nada en el carrito :3")
    }

};

let menu = "";
menu += "¡Bienvenido/a a My Fairy Tale!     \n";
menu += "1- Selecciona un producto          \n";
menu += "2- Mostrar carrito                 \n";
menu += "3- Mostrar wishlist                \n";
menu += "4- Eliminar producto de tu carrito \n";
menu += "5- Terminar compra                 \n";
menu += "0- Salir                           \n";

const eleccion = () => {
    let elegir_categoria = "";
    elegir_categoria += "Selecciona una de nuestras categorias: \n"
    elegir_categoria += "1- Monster High                      \n"
    elegir_categoria += "2- Ever After High                   \n"
    elegir_categoria += "3- Barbie                            \n"
    elegir_categoria += "4- Rainbow High                      \n"
    elegir_categoria += "5- Coleccionables                    \n"
    let seleccion = parseInt(prompt(elegir_categoria));
    switch (seleccion) {
        case 1:
            const filtro1 = () => {
                let list = "Selecciona uno de nuestros productos \n";
                const filtrado = productos.filter((categorias) => categorias.saga == "Monster High")
                for (const producto of filtrado) {
                    list += producto.id + ' - ' + producto.nombre + " - " + producto.precio + ' USD \n';
                }
                let seleccion = parseInt(prompt(list));
                if (seleccion === 1 || seleccion === 2) {
                    carrito_compras.push(productos[seleccion - 1]);
                    alert("El producto se agrego a tu carrito con exito");
                    console.log(carrito_compras);
                } else {
                    alert("Escribe una opcion validad")
                }
            }
            filtro1()
            break

        case 2:
            const filtro2 = () => {
                let list = "Selecciona uno de nuestros productos \n";
                const filtrado = productos.filter((categorias) => categorias.saga == "Ever After High")
                for (const producto of filtrado) {
                    list += producto.id + ' - ' + producto.nombre + " - " + producto.precio + ' USD \n';
                }
                let seleccion = parseInt(prompt(list));
                if (seleccion === 3 || seleccion === 4) {
                    carrito_compras.push(productos[seleccion - 1]);
                    alert("El producto se agrego a tu carrito con exito");
                    console.log(carrito_compras);
                } else {
                    alert("Escribe una opcion validad")
                }
            }
            filtro2()
            break

        case 3:
            const filtro3 = () => {
                let list = "Selecciona uno de nuestros productos \n";
                const filtrado = productos.filter((categorias) => categorias.saga == "Barbie")
                for (const producto of filtrado) {
                    list += producto.id + ' - ' + producto.nombre + " - " + producto.precio + ' USD \n';
                }
                let seleccion = parseInt(prompt(list));
                if (seleccion === 5 || seleccion === 6) {
                    carrito_compras.push(productos[seleccion - 1]);
                    alert("El producto se agrego a tu carrito con exito");
                    console.log(carrito_compras);
                } else {
                    alert("Escribe una opcion validad")
                }
            }
            filtro3()
            break

        case 4:
            const filtro4 = () => {
                let list = "Selecciona uno de nuestros productos \n"
                const filtrado = productos.filter((categorias) => categorias.saga == "Rainbow High")
                for (const producto of filtrado) {
                    list += producto.id + ' - ' + producto.nombre + " - " + producto.precio + ' USD \n';
                }
                let seleccion = parseInt(prompt(list));
                if (seleccion === 7 || seleccion === 8) {
                    carrito_compras.push(productos[seleccion - 1]);
                    alert("El producto se agrego a tu carrito con exito");
                    console.log(carrito_compras);
                } else {
                    alert("Escribe una opcion validad")
                }
            }
            filtro4()
            break
        case 5:
            const filtro5 = () => {
                let list = "Selecciona uno de nuestros productos \n";
                const filtrado = productos.filter((categorias) => categorias.saga == "Coleccionables")
                for (const producto of filtrado) {
                    list += producto.id + ' - ' + producto.nombre + " - " + producto.precio + ' USD \n';
                }
                let seleccion = parseInt(prompt(list));
                if (seleccion === 9 || seleccion === 10) {
                    carrito_compras.push(productos[seleccion - 1]);
                    alert("El producto se agrego a tu carrito con exito");
                    console.log(carrito_compras);
                } else {
                    alert("Escribe una opcion validad")
                }
            }
            filtro5()
            break
        default:
            alert("Porfavor ingrese una de las opciones validas del menu")
            break
    }
};


const system = () => {
    while (true) {
        let seleccion = parseInt(prompt(menu));
        switch (seleccion) {
            case 1:
                eleccion()
                break

            case 2:
                motrar_carrito()
                break

            case 3:
                motrar_wishlist()
                break

            case 4:
                eliminar_producto()
                break

            case 5:
                total_pagar()
                break

            case 0:
                alert("Gracias por su compra")
                break

            default:
                alert("Porfavor ingrese una de las opciones validas del menu")
                break
        }
        if (seleccion == 0) {
            break;
        }
    }
};

let btnsistema = document.querySelector(".sistema")

console.log(btnsistema)

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
        boton1.setAttribute('marcador_id', element.id);
        boton1.innerHTML = `<button id="btn${element.id}"><i class="fas fa-cart-plus iconos_2"></i></button>`

        const boton2 = document.createElement("button")
        boton2.classList.add("botones--2")
        boton2.innerHTML = `<button id="btn${element.id_2}"><i class="fas fa-star iconos_2"></i></button>`

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

const mostrar_productos = [renderProductos(productos)]

btnsistema.addEventListener("click", ()=> {
    system()
})

let btn1 = document.getElementById("btn1")
btn1.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[0])
} )

let btn2 = document.getElementById("btn2")
btn2.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[1])
} )

let btn3 = document.getElementById("btn3")
btn3.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[2])
} )

let btn4 = document.getElementById("btn4")
btn4.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[3])
} )

let btn5 = document.getElementById("btn5")
btn5.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[4])
} )

let btn6 = document.getElementById("btn6")
btn6.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[5])
} )

let btn7 = document.getElementById("btn7")
btn7.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[6])
} )

let btn8 = document.getElementById("btn8")
btn8.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[7])
} )

let btn9 = document.getElementById("btn9")
btn9.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[8])
} )

let btn10 = document.getElementById("btn10")
btn10.addEventListener("click", ()=>{
    alert("Su producto se ha agregado al carrito con exito")
    carrito_compras.push(productos[9])
} )

/* lista de deseos */

let btn101 = document.getElementById("btn101")
btn101.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[0])
} )

let btn102 = document.getElementById("btn102")
btn102.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[1])
} )

let btn103 = document.getElementById("btn103")
btn103.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[2])
} )

let btn104 = document.getElementById("btn104")
btn104.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[3])
} )

let btn105 = document.getElementById("btn105")
btn105.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[4])
} )

let btn106 = document.getElementById("btn106")
btn106.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[5])
} )

let btn107 = document.getElementById("btn107")
btn107.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[6])
} )

let btn108 = document.getElementById("btn108")
btn101.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[7])
} )

let btn109 = document.getElementById("btn109")
btn101.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[8])
} )

let btn1010 = document.getElementById("btn1010")
btn1010.addEventListener("click", ()=>{
    alert("Su producto se ha agregado a la wishlist con exito")
    wishlist.push(productos[9])
} )

let radioAllDolls = document.getElementById("alldolls")

let radioMH = document.getElementById("monsterhigh")

let radioEAH = document.getElementById("everafterhigh")

let radioRH = document.getElementById("rainbowhigh")

let radioBarbie = document.getElementById("barbie")

let radioColeccion = document.getElementById("coleccionables")

function cambiarimg(source) {
    document.getElementById("fondoprincipal").src = source;
}

radioMH.addEventListener("click", ()=> {
    alert("Elegiste ver las muñecas Monster High")
    cambiarimg("./imagenes/fondo1_versionMH.png")
})

radioEAH.addEventListener("click", ()=>{
    alert("Elegiste ver las muñecas Ever After High")
    cambiarimg("./imagenes/fondo1_versionEAH.png")
})

radioRH.addEventListener("click", ()=>{
    alert("Elegiste ver las muñecas Rainbow High")
    cambiarimg("./imagenes/fondo1_versionRH.png")
})

radioBarbie.addEventListener("click", ()=>{
    alert("Elegiste ver las mueñca Barbie")
    cambiarimg("./imagenes/fondo1_versionB.png")
})

radioColeccion.addEventListener("click", ()=>{
    alert("Elegiste ver las muñecas Coleccionables")
    cambiarimg("./imagenes/fondo1_versioncollector.png")
})

radioAllDolls.addEventListener("click", ()=>{
    alert("Elegiste ver todas las muñecas.")
    cambiarimg("./imagenes/fondo1.png")
})
