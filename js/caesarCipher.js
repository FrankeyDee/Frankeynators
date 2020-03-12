$(document).ready(function() {
    const oldPhabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Encode//
    $("#encode").click(function() {
        //user's selected Key = plainKey
        
        const plainInput = $("#input_plaintext").val();
        const key = $("#keyNumber").val()
        let plainArray = plainInput.split('');
            
        for (let j = 0; j < plainArray.length; j++) {
            let originalKey = oldPhabet.indexOf(plainArray[j])
            //console.log(plainKey)
            let newKey = (Number(key) + Number(originalKey));
            
            if (newKey > 25) {
                let cipherKey = newKey - 26
                console.log(cipherKey)
                let newLetter = oldPhabet[cipherKey]
                
                console.log(newLetter);
            } else {
                let newLetter = oldPhabet[newKey];
                console.log(newLetter);
            }
        }
    })
});
        //build string
        
//     // Decode//
//     $("#decode").click(function() {
//         let cipherInput = $("#input_ciphertext").val();
//         $("#input_plaintext").val(cipherInput);
//         // Key //
//         let keyNumber = $("#keyNumber").val();
//         console.log(keyNumber)
//     })

