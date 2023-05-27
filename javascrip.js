function toggleMode() {
    var body = document.body;
    var modoButton = document.getElementById("modoButton");

    body.classList.toggle("dark-mode");
    modoButton.classList.toggle("light-mode");

    if (modoButton.classList.contains("light-mode")) {
        modoButton.innerHTML = '<span class="dark">🌞</span>';
        document.body.style.backgroundColor = "#0b112f";

        guardarEnLocalStorage("modo", "noche");
    } else {
        modoButton.innerHTML = '<span class="light">🌙</span>';
        document.body.style.backgroundColor = "#FFFFFF";
        guardarEnLocalStorage("modo", "dia");
    }
}

function guardarEnLocalStorage(clave, valor) {
    localStorage.setItem(clave, valor);
}

function obtenerDelLocalStorage(clave) {
    return localStorage.getItem(clave);
}

function cargarNombre() {

    if (obtenerDeSessionStorage("nombre") !== null || 'sin identificar' ) {
        var nombreUsuario = document.getElementById("usuario");
        nombreUsuario.textContent = obtenerDeSessionStorage("nombre");
    }
    if(obtenerDeSessionStorage("nombre") === null){
        var nombreUsuario = document.getElementById("usuario");
        nombreUsuario.textContent = 'Sin identificar';
    }
}

function guardarEnSessionStorage(clave, valor) {
    sessionStorage.setItem(clave, valor);
}

function obtenerDeSessionStorage(clave) {
    return sessionStorage.getItem(clave);
}

function inputUsuario(){
    var nombreU = document.getElementById("inputUsuario").value;
    console.log("Nombre: " + nombreU);
    guardarEnSessionStorage("nombre",nombreU);

}

function inputColor(){
    var colorH2 = document.getElementById("id_cambiarColor").value;
    console.log("Color: " + colorH2);
    guardarEnLocalStorage("color",colorH2);
}

function cargarColor(){
    var h2 = document.getElementById("h2ACambiar");

    if(obtenerDelLocalStorage("color") !== null){
        
        h2.style.color = obtenerDelLocalStorage("color");

    }
}
function inputTamaño(){
    var tamañoH2 = document.getElementById("inputTamaño").value;
    console.log("Tamaño: " + tamañoH2);
    guardarEnLocalStorage("tamaño",tamañoH2);
}

function cargarTamaño(){
    var tamH2 = document.getElementById("h2ACambiar");

    if(obtenerDelLocalStorage("tamaño") !== null){
        
        tamH2.style.fontSize = obtenerDelLocalStorage("tamaño");

    }
}