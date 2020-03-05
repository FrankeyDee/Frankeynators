$("#translateBtn").click(function(){
    let userInput = $("#inputDefault").val();
    //change input to have all lower case
    const originalWord = (userInput.toLowerCase());
    //identify 1st character
    let firstChar = (originalWord.charAt(0));
    console.log(firstChar);
    //isVowel
    var vowels = ["a","e","i","o","u"];
    if (firstChar = vowels) {
        console.log(firstChar,vowels)
    $("#translated").text(originalWord);
    }
});
