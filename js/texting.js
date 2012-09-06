$(document).ready(function() {
  $(".text").on("click", function(e) {
    // on click get name and number
    var name = $(this).siblings(".name").text();
    var number = $(this).siblings(".number").text();
    // do sexy slide to show text-area for text
    // text should be To: {{name}} [text] Send
    console.log(name, number);
  });

  $("#text-form").submit(function(e) {
    e.preventDefault();

    var options = {};
    options.From = "+12153524834"; // my twilio number
    options.To = ""; // extracted number
    options.Body = ""; // extracted body
    var url = "https://api.twilio.com/2010-04-01/Accounts/"+TWILIO_SID+"/SMS/Messages";
    $.post(url, options, function(data) {
      // success
    });
  });
});
