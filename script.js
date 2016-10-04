var input = $("#not-a-real-id")

input.keydown(function(e) {	
  if (e.keyCode == "13") {
    console.log("stuff");
    var valueToSave = input.val();
    storeValue("BobsVariable", valueeeee);
  }
})

onNewValue("BobsVariable", function(value) {
  $("#value-output").html(value)
})