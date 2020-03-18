$(document).ready(function() {
    const oldPhabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    
    // Encode//
    $("#encode").click(function() {
        let e = document.getElementById("keyNumber");
        const key = e.options[e.selectedIndex].text;
    
        let encodedMessage = ""
        const plainInput = $("#input_plaintext").val();
        let plainArray = plainInput.split('');
        for (let j = 0; j < plainArray.length; j++) {
            let originalKey = oldPhabet.indexOf(plainArray[j])
            let newKey = (Number(key) + Number(originalKey));
            if (oldPhabet.includes(plainArray[j]) === false){
                encodedMessage += plainArray[j]
            } else if (newKey > 25) {
                let cipherKey = newKey - 26
                encodedMessage += oldPhabet[cipherKey]
            } else {
                encodedMessage += oldPhabet[newKey];
            }
            $("#input_ciphertext").val(encodedMessage)
        }
    })
    //Decode//
        $("#decode").click(function() {
            let e = document.getElementById("keyNumber");
            const key = e.options[e.selectedIndex].text;

            let decodedMessage = ""
            const cipherInput = $("#input_ciphertext").val();
            let cipherArray = cipherInput.split('');
            for (let i = 0; i < cipherArray.length; i++) {
                let cipherKey = oldPhabet.indexOf(cipherArray[i])

                let newCipherKey = (Number(cipherKey) - Number(key));
                console.log(newCipherKey)
                if (oldPhabet.includes(cipherArray[i]) === false){
                    decodedMessage += cipherArray[i]
                } else if (newCipherKey < 25) {
                    let inputKey = newCipherKey - 26
                    // console.log(inputKey)
                    decodedMessage += oldPhabet[inputKey]
                    // console.log(decodedMessage)}
                } else {
                    decodedMessage -= oldPhabet[newCipherKey];
                    // console.log(oldPhabet[newCipherKey])
                }
                $("#input_plaintext").val(decodedMessage)
            }
        }
    )
});