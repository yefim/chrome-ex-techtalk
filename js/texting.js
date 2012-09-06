$(document).ready(function() {
  $(".text").on("click", function(e) {
    // on click get name and number
    var name = $(this).siblings(".name").text();
    var number = $(this).siblings(".number").text();
    // do sexy slide to show text-area for text
    // text should be To: {{name}} [text]
    console.log(name, number);
  });
});
