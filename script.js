var input = $("#value-input")

input.keydown(function(e) {	
  if (e.which == "13") {
    console.log("stuff");
    var valueToSave = input.val();
    storeValue("little_apple", valueToSave);
  }
})

onNewValue("little_apple", function(value) {
  $("#value-output").html(value)
})