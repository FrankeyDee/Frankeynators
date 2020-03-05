// take user input and display
$("#translateBtn").click(function(){
    let userInput = $("#inputDefault").val();
    //change input to have all lower case
    const originalWord = (userInput.toLowerCase());
    //identify 1st character
    let firstChar = (originalWord.charAt(0));
    console.log(firstChar);
    //isVowel

    //if Vowel, then add "yay"

    //if not Vowel
        //move first character to the end
        //add "ay"

    //print translation
    $("#translated").text(originalWord);
    }
);
