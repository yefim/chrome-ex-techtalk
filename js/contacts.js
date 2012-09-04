$(document).ready(function() {
  // since localStorage only stores key/value pairs we will have to encode and decode JSON
  function save(name, number) {
    var contacts = {};
    var data = localStorage["contacts"];
    contacts = JSON.parse(data);
    contacts[name] = number;
    localStorage["contacts"] = JSON.stringify(contacts);
  }

  function addOne(name, number) {
    console.log(name, number);
  }

  function render() {
    var contacts = {};
    var data = localStorage["contacts"];
    contacts = JSON.parse(data);
    for (name in contacts) {
      addOne(name, contacts[name]);
    }
  }
  
  $("#contact-form").submit(function(e) {
    e.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    save(name, number);
    addOne(name, number);
  });

  render();
});
