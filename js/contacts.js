$(document).ready(function() {
  // since localStorage only stores key/value pairs we will have to encode and decode JSON
  // save returns false if number already exists
  function save(name, number) {
    var contacts = {};
    var data = localStorage["contacts"];
    contacts = JSON.parse(data);
    if (!contacts[name]) {
      contacts[name] = number;
      localStorage["contacts"] = JSON.stringify(contacts);
      return true;
    }
    return false;
  }

  // render a single contact
  function addOne(name, number) {
    var template = Handlebars.templates.contact;
    var contact_html = template({name: name, number: number});
    console.log(contact_html);
    $("#contacts").prepend(contact_html);
  }

  function render() {
    var contacts = {};
    var data = localStorage["contacts"];
    contacts = JSON.parse(data);
    for (var name in contacts) {
      addOne(name, contacts[name]);
    }
  }
  
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    if (save(name, number)) {
      addOne(name, number);
      $("#name, #number").val("");
    } else {
      // show that num already exists
    }
  });

  // initialize localStorage
  if (!localStorage["contacts"]) localStorage["contacts"] = "{}";
  render();
});
