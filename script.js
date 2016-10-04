var input = $("#value-input")

input.keydown(function(e) {	
  if (e.which == "13") {
    console.log("stuff");
    var valueToSave = input.val();
    storeValue("fine", valueToSave);
  }
})

onNewValue("fin", function(value) {
  $("#value-output").html(value)
})