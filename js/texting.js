$(document).ready(function() {
  $(".text").on("click", function(e) {
    // on click get name and number
    var $contact = $(this).closest(".contact");
    var name = $contact.find(".name").text();
    var number = $contact.find(".number").text();
    $contact.animate({left: -$contact.outerWidth()});
    // var template = Handlebars.templates.text
    // do sexy slide to show text-area for text
    // text should be To: {{name}} [text] Send
    console.log(name, number);
  });

  $(".text-form").submit(function(e) {
    e.preventDefault();
    var options = {};
    options.to = ""; // extracted number
    options.body = ""; // extracted body
    var url = "http://jsonpify.heroku.com?resource=http://sendtext.herokuapp.com/sms";
    $.ajax({
      type: 'GET',
      url: url,
      data: options,
      dataType: 'jsonp',
      success: function(data) {
        // success
        console.log(data);
      }
    });
  });
});
