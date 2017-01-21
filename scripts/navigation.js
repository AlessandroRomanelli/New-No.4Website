// Show a button that always floats on top of the page and shows the navigationMenu
// when clicked upon

var $navigationHover = $('<div id="navigationFloater">▼ Show Navigation Bar ▼</div>');
$("#top").append($navigationHover);

$navigationHover.mouseenter(function(){
  $("#top").addClass("hoverTransform");
});

$("#top").mouseleave(function(){
  $(this).removeClass("hoverTransform");
});

$navigationHover.click(function(){
  if ($("#top").attr("class") == "hoverTransform") {
    $("#top").addClass("clickTransform");
    $("#top").removeClass("hoverTransform");
    $(this).text("▲ Hide Navigation Bar ▲")
}});

$navigationHover.click(function(){
if ($("#top").attr("class") == "clickTransform hoverTransform") {
      $("#top").removeClass("clickTransform");
      $(this).text("▼ Show Navigation Bar ▼")
}});
