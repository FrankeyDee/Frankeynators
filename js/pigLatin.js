// take user in put and display
$("#translateBtn").click(function(){
    const userInput = $("#inputDefault").val();
    //change input to have all lower case
    const inputLowerCase = (userInput.toLowerCase());
    // change input to array of words
    let inputArray = inputLowerCase.split(' ')
    
    let translation

    //for loop for EACH WORD to identify 1st character of each word
    for (let i = 0; i < inputArray.length; i++) {
        
        let vowel = ['a','e','i','o','u'];
        const alpha = ["a", "b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
        let firstLtr = inputArray[i].charAt(0);
        let sliced = inputArray[i].slice(1);
        let fragment = '';

        if (vowel.includes(firstLtr) === true) {
            translation = inputArray[i] + 'yay'
        } else {
            translation = sliced + firstLtr + 'ay'
        }
        
        console.log(translation);
        // let user = translation.concat(translation)
        // document.getElementById("translated").innerHTML = user
    } console.log(translation)
    
});