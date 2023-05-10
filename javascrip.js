alert('Borja Estevez Alaminos, 1DAM y el tema va a ir sobre música')
function toggleMode() {
    var body = document.getElementsByTagName("body")[0];
    var button = document.getElementsByClassName("button")[0];

    body.classList.toggle("dark-mode"); 
    button.classList.toggle("light-mode"); 

    if (button.classList.contains("light-mode")) {
        button.innerHTML = '<span class="light">🌙</span>Cambiar a Modo Noche';
        document.body.style.backgroundColor = "#FFFFFF";
    } else {
        button.innerHTML = '<span class="dark">🌞</span>Cambiar a Modo Día';
        document.body.style.backgroundColor = "#393646";
    }
}