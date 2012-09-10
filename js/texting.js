$(document).ready(function() {
  $(".text").live("click", function(e) {
    // on click get name and number
    var $contact = $(this).closest(".contact");
    var name = $contact.find(".name").text();
    var number = $contact.find(".number").text();
    $contact.animate({left: -$contact.outerWidth()/2});
    console.log(name, number);
  });

  $(".text-form").live("submit", function(e) {
    e.preventDefault();
    var $contact = $(this).closest(".contact");
    var options = {};
    options.to = $contact.find(".number").text(); // extracted number
    options.body = $contact.find(".text-body").val(); // extracted body

    $contact.animate({left: 0});
    $contact.find(".text-body").val("");

    var url = "https://jsonpify.heroku.com?resource=http://sendtext.herokuapp.com/sms";
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
