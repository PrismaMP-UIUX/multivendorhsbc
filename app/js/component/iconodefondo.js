function screenIcon() {
  if ($("#inicio_extraccion").length == 0) {
    $(".iconback > *").remove();
    var mainScreenIcon = $(".titulo i").attr('class');
    $(".iconback").append("<i class='" + mainScreenIcon + "'>");
  } else {
    $(".iconback > *").remove();
    $(".iconback").append("<i class='prisma inicio'>");
  }
}

