//
// $(document).ready(function () {
//   $('.home').hover(function () {
//     console.log ("test");
//     $(this).addClass('magictime holeOut slidLeftReturn');
//   });
// });


$(document).ready(function() {
  $(".pages").hide()
  $(".menu").click(function() {
    $(".dropdown").animate({
       height: "+=100px"
    }, 200);
    $(".pages").fadeToggle();
  });
});
