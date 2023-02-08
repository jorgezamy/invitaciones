function abrir() {
  var invitacion = document.getElementById("invitacion");

  if (invitacion.style.display === "none") {
    invitacion.classList.add("mostrar");

    setTimeout(function () {
      invitacion.style.display = "block";
    }, 500);
  } else {
    invitacion.style.display = "none";
  }

  var boton = document.getElementById("intro");

  if (boton.style.display === "none") {
    boton.style.display = "block";
  } else {
    boton.classList.add("ocultar");

    setTimeout(function () {
      boton.style.display = "none";
    }, 500);
  }
}
