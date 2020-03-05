// take user in put and display
$("#translateBtn").click(function(){
    let userInput = $("#inputDefault").val();
    //change input to have all lower case
    const originalWord = (userInput.toLowerCase());
    //identify 1st character
    let firstChar = (originalWord.charAt(0));
    console.log(firstChar);
    //isItAVowel(firstChar);
    let vowel = ["a","e","i","o","u"];

    if ($.inArray(firstChar, vowel) != -1){
        // console.log("it's a vowel");
        //add "yay" to word
        let translation = (originalWord+"yay");
        console.log(translation);
    } else {
        //if not Vowel
        //move first character to the end
        //add "ay"
        console.log("it's not a vowel");
        let translation = (originalWord.substr(1)+firstChar+"ay");
        console.log(translation)
    }
    //print translation
    $("#translated").text("boom!");
});