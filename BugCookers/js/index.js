$(document).ready(function() {
  //CHECK VALIDATION FORMULAIRE
  const forms = document.getElementsByClassName("needs-validation");
  const validation = Array.prototype.filter.call(forms, function(form) {
    form.addEventListener(
      "submit",
      function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  //EVENT ON CLICK
  $("#contactNav").click(() => {
    $("#contact").slideToggle();
  });

  $("#contact .closeContact").click(() => {
    $("#contact").slideToggle();
  });

  $(".iconBox").click(() => {
    $("#reservation").slideToggle();
  });

  $(".close").click(() => {
    $("#reservation").slideToggle();
  });

  //MODAL BLOG
  $(".btn-actu").click(function() {
    let titreActu = $(this)
      .closest(".card")
      .find("h4")
      .text();

    let textActu = $(this)
      .closest(".card")
      .find("p")
      .html();

    let imgActuSrc = $(this)
      .closest(".card")
      .find("img")
      .attr("src");

    let imgActuAlt = $(this)
      .closest(".card")
      .find("img")
      .attr("alt");

    let imgModalAlt = $(modalActu)
      .find("img")
      .attr("alt", imgActuAlt);

    let imgModalSrc = $(modalActu)
      .find("img")
      .attr("src", imgActuSrc);

    let textModal = $(modalActu)
      .find("p")
      .html(textActu);

    let titreModal = $(modalActu)
      .find("h4")
      .text(titreActu);
  });

  //fermeture nav link
  $(".nav-item").click(function() {
    $("#navbarSupportedContent").removeClass("show");
    const href = $(this).find("a").attr("href");
    const select = $(`${href}`).position().top - 55;
    $("html, body").animate({ scrollTop: select }, 1200);


  });
  $("#a").click(function() {
    $(`#menucartes`).addClass("display");
    $(`#concept`).removeClass("display");
  });
  $("#b").click(function() {
    $(`#menucartes`).removeClass("display");
    $(`#concept`).addClass("display");
  });
  $("#c").click(function() {
    $(`#gallery`).removeClass("display");
    $(`#actuAll`).addClass("display");
  });
  $("#d").click(function() {
    $(`#actuAll`).removeClass("display");
    $(`#gallery`).addClass("display");
  });

  //au scroll la barre devient fixed-top
  addEventListener("scroll", function() {
    scrollValue = pageYOffset;
    console.log(scrollValue);
    if (scrollValue === 0) {
      $("#navigation").removeClass("fixed-top");
    } else {
      $("#navigation").addClass("fixed-top");
    }
  });
});
