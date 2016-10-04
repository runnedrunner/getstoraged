var input = $("#value-input")

input.keydown(function(e) {	
  if (e.which == "13") {
    console.log("stuff");
    var valueToSave = input.val();
    storeValue("BobsVariable", valueToSave);
  }
})

onNewValue("BobsVariable", function(value) {
  $("#value-output").html(value)
})