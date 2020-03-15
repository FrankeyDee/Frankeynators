$(document).ready(function() {
    const oldPhabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    // Encode//
    $("#encode").click(function() {
        let encodedMessage = " "
        const plainInput = $("#input_plaintext").val();
        const key = $("#keyNumber").val()
        let plainArray = plainInput.split('');

        for (let j = 0; j < plainArray.length; j++) {
            let originalKey = oldPhabet.indexOf(plainArray[j])
            let newKey = (Number(key) + Number(originalKey));

                if(newKey > 25) {
                    let cipherKey = newKey - 26
                        encodedMessage += oldPhabet[cipherKey]
                } else {
                    encodedMessage += oldPhabet[newKey];
                }
            $("#input_ciphertext").val(encodedMessage)
        }
    })
        //build string
});