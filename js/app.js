$(document).ready(function () {
  // Menu de Navegacion
  var activo = true;

  $(".btn-menu").on("click", function () {
    // Intercalar Iconos
    $(".btn-menu i").toggleClass("fa-times");

    // Animacion Menu
    if (activo) {
      $(".list-container").animate(
        {
          left: "0px",
        },
        500
      );

      activo = false;
    } else {
      activo = true;

      $(".list-container").animate(
        {
          left: "-100%",
        },
        500
      );

      activo = true;
    }
  });

  // Intercalar clase 'activo' enlaces menu de navegacion

  var enlaces = document.querySelectorAll(".lists li a");

  enlaces.forEach((element) => {
    element.addEventListener("click", (event) => {
      enlaces.forEach((link) => {
        link.classList.remove("activo");
      });

      event.target.classList.add("activo");
    });
  });

  // Scroll efect

  var prevScrollPos = window.pageYOffset;

  window.onscroll = () => {
    // Ocultar y mostrar el menu al hacer scroll
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
      $(".menu").css("top", "0px");
      $(".menu").css("transition", "0.5s");
    } else {
      $(".menu").css("top", "-60px");
      $(".menu").css("transition", "0.5s");
    }

    prevScrollPos = currentScrollPos;

    // Condiciones
    var posicion = window.pageXOffset;

    if (posicion <= 600) {
      // Ocultar Estilos Menu Scroll
      $(".menu").css("border-bottom", "none");

      // Ocultar Ir Arriba
      $(".go-top").css("rigth", "-100%");
    } else {
      // Mostrar Estilos Menu Scroll
      $(".go-top").css("border-bottom", "3px solid #ff2e63");

      // Mostrar Ir Arriba
      $(".go-top").css("rigth", "0");
      $(".go-top").css("transition", "500ms");
    }
  };

//   Funcion ir Arriba
  $('.go-top').on('click', function(){
    $('body, html').animate({
        screenTop: '0'
    },500);
  });
// Funcion Ir Abajo
  $('#abajo').on('click', function(){
    $('body, html').animate({
        screenTop:'600px'
    },500);
  });



});
