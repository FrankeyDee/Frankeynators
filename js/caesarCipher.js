$(document).ready(function() {

    // Encode//
    $("#encode").click(function() {
        let keyNumber = $("#keyNumber").val();

        //user's plaintext input
        let plainInput = $("#input_plaintext").val();
        let plainArray = plainInput.split(' ');

        const oldPhabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

        for (let i = 0; i < plainArray.length; i++) {
            let wordArray = plainArray[i].split('')
            for (let j = 0; j < wordArray.length; j++) {
                if 
                let plainKey = oldPhabet.indexOf(wordArray[j]);
                let newKey = (Number(keyNumber) + Number(plainKey));
                // console.log(newKey)
                if (newKey > 25) {
                    let cipherKey = newKey - 25
                    let newLetter = oldPhabet[cipherKey];

                console.log(newLetter);
                }
            }
        
    }})
});
        
        
//     // Decode//
//     $("#decode").click(function() {
//         let cipherInput = $("#input_ciphertext").val();
//         $("#input_plaintext").val(cipherInput);
//         // Key //
//         let keyNumber = $("#keyNumber").val();
//         console.log(keyNumber)
//     })

