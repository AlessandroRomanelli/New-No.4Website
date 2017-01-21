// Show a button that always floats on top of the page and shows the navigationMenu
// when clicked upon

$("#navigationFloater").mouseenter(function(){
  $("#top").addClass("hoverTransform");
});

$("#top").mouseleave(function(){
  $(this).removeClass("hoverTransform");
});

$("#navigationFloater").click(function(){
  if ($("#top").attr("class") == "hoverTransform") {
    $("#top").addClass("clickTransform");
    $("#top").removeClass("hoverTransform");
    $(this).text("▲ Hide Navigation Bar ▲");

}});

$("#navigationFloater").click(function(){
if ($("#top").attr("class") == "clickTransform hoverTransform") {
      $("#top").removeClass("clickTransform");
      $(this).text("▼ Show Navigation Bar ▼")
}});
