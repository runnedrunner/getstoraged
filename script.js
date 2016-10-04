var input = $("#not-a-real-id")

input.keydwn(function(e) {	
  if (e.keyCode == "13") {
    var valueToSave = input.val();
    storeValue("BobsVariable", valueeeee);
  }
})

onNewValue("BobsVariable", function(value) {
  $("#value-output").html(value)
})