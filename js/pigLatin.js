$(document).on("click", "#translateBtn", function(){
    var userInput = $("#userInput").val();
    $("#translated").text(userInput);
});