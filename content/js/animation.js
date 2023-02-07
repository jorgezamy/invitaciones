function abrir() {
  var boton = document.getElementById("btnAbrir");
  var invitacion = document.getElementById("miDiv");

  if (invitacion.style.display === "none") {
    setTimeout(function () {
      invitacion.style.display = "block";
    }, 500);
  } else {
    invitacion.style.display = "none";
  }

  if (boton.style.display === "none") {
    boton.style.display = "block";
  } else {
    boton.classList.add("ocultar");
    setTimeout(function () {
      boton.style.display = "none";
    }, 500);
  }
}
