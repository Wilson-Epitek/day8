function houdibi(name) {
  $("#" + name + ", ." + name).hide();
}

$(document).ready(function () {
  $("#Bouton").click(function () {
    houdibi("test");
    houdibi("test2")
  });
});
