// take user in put and display
$("#translateBtn").click(function(){
    let userInput = $("#inputDefault").val();
    //change input to have all lower case
    const originalWord = (userInput.toLowerCase());
    //identify 1st character
    let firstChar = (originalWord.charAt(0));
    // game logic: if vowel, add "yay", else move firstChar to end and add "ay"
    function translate() {
        let vowel = ["a","e","i","o","u"];
        if ($.inArray(firstChar, vowel) != -1){
            let translation = (originalWord+"yay");
            console.log(translation);
        } else {
            let translation = (originalWord.substr(1)+firstChar+"ay");
            console.log(translation)
        };
    }
    translate(); 
    $("#translated").text('nema, how do i print a variable that is inside a nested function? the game works if you check the console.') 
});