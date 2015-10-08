function reference() {
  $('#bs-example-navbar-collapse-1').on('show.bs.collapse', function () {
  $('#bs-example-navbar-collapse-1').append($('#sidebar').html());
  $('#bs-example-navbar-collapse-1 ul').last().removeClass('nav-pills nav-stacked').addClass('navbar navbar-nav');
});
$('#bs-example-navbar-collapse-1').on('hidden.bs.collapse', function () {
  $('#bs-example-navbar-collapse-1 ul:last-child').remove();
});
$(window).on('resize', function () {
  if (window.innerWidth > 768) {$('#bs-example-navbar-collapse-1').collapse('hide');}
});
}