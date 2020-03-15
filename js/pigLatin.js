// take user in put and display
$("#translateBtn").click(function(){
    let translation
    let userInput = $("#inputDefault").val();
    //change input to have all lower case
    const originalWord = (userInput.toLowerCase());
    //identify 1st character
    let firstChar = (originalWord.charAt(0));
    // game logic: if vowel, add "yay", else move firstChar to end and add "ay"
    let vowel = ["a","e","i","o","u"];
    if ($.inArray(firstChar, vowel) <= 0){
        translation = (originalWord+"yay");
        console.log(translation);
    } else {
        translation = (originalWord.substr(1)+firstChar+"ay");
        console.log(translation)
    }
    $("#translated").text(translation)
});