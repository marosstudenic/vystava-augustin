$(document).ready(function () {
  // kuratorka cervenym bez odkazu
  const prvaZmena = new Date("Mar 5, 2021 9:00:00").getTime();
  // odkaz + kuratorka  , odkaz cerveny
  // const druhaZmena = new Date("Mar 8, 2021 9:00:00").getTime();
  const druhaZmena = new Date("Mar 8, 2021 9:00:00").getTime();
  var now = new Date().getTime();

  if (now >= druhaZmena) {
    $("#galeriaOdkazCervenym").removeClass("d-none");
    $("#galeriaOdkazCervenym > div > a").css("color", "#e74c3c");
    $("#kuratorkaCervenym").removeClass("d-none");
    // $(".coskoro").css("font-size", "1.2em");
  } else if (now >= prvaZmena) {
    $("#kuratorkaCervenym").removeClass("d-none");
    $("#kuratorkaCervenym > p ").css("color", "#e74c3c");

    // $(".coskoro").css("font-size", "1.2em");
  }
});
