// Show a button that always floats on top of the page and shows the navigationMenu
// when clicked upon



$("#navigationFloater").mouseenter(function(){
  var y = $(window).scrollTop();
  $(window).scrollTop(y-10);
  $("#top").addClass("hoverTransform");
});

$("#top").mouseleave(function(){
  var y = $(window).scrollTop();
  $(window).scrollTop(y+40);
  $(this).removeClass("hoverTransform");
  $(this).removeClass("clickTransform");
  $("#navigationFloater").text("▼ Show Navigation Bar ▼")
});

$("#navigationFloater").click(function(){
  if ($("#top").attr("class") == "hoverTransform") {
    var y = $(window).scrollTop();
    $(window).scrollTop(y-40);
    $("#top").addClass("clickTransform");
    $("#top").removeClass("hoverTransform");
    $(this).text("▲ Hide Navigation Bar ▲");

}});

$("#navigationFloater").click(function(){
if ($("#top").attr("class") == "clickTransform hoverTransform") {
      var y = $(window).scrollTop();
      $(window).scrollTop(y+40);
      $("#top").removeClass("clickTransform");
      $(this).text("▼ Show Navigation Bar ▼")
}});
