AOS.init();

function activarPanel(){
    const contenedor = document.querySelector(".cont-colores");
    const boton = document.querySelector(".open-panel");
    
    contenedor.classList.toggle("active");
    boton.classList.toggle("active");

}

var link = document.getElementById("filecss");

function green() {
    link.href="Views/css/Styles-blue.css";
}

function yellow() {
    link.href="Views/css/Styles-yellow.css"
}

function blue() {
    link.href="Views/css/Styles.css";
}
