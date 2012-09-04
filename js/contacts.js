$(document).ready(function() {
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var num = $("#number").val();
  });
});
