var input = $("#value-input")

input.keydown(function(e) {	
  if (e.which == "13") {
    console.log("stuff");
    var valueToSave = input.val();
    storeValue("davidsVariable", valueToSave);
  }
})

onNewValue("davidsVariable", function(value) {
  $("#value-output").html(value)
})