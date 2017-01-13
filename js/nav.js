$(document).ready(function() {
  var $toggle = $('#nav-toggle');
  var $menu = $('#nav-menu');

  $toggle.click(function() {
    $(this).toggleClass('is-active');
    $menu.toggleClass('is-active');
  });

  $(".nav-item").click(function (e) {
    e.preventDefault();
    var index = parseInt($(this).attr("href"));
    $.scrollify.move(index);
  });

});