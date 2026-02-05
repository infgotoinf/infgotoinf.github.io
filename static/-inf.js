// function textMove(updateSpeed) {
// setInterval(function() {
//         if (bgContent.textContent.length > 12000)
//             bgContent.textContent = bgContent.textContent.substring(1);
//         else
//             bgContent.textContent+=characters.charAt(Math.floor(Math.random() * charactersLength)).repeat(16);
//     }, 16);

function goInfinity() {
    let bgContent = document.getElementById('numbers');
    let characters = '0123456789';
    let charactersLength = characters.length;
    setInterval(function() {
        bgContent.textContent = bgContent.textContent.substring(1);
        if (bgContent.textContent.length < 20000)
            for (let i = 0; i < 10; i++)
            {
                let randomChar = characters.charAt(Math.floor(Math.random() * charactersLength));
                let randomNumberOfRepeats = Math.floor(Math.random() * 32);
                bgContent.textContent+=randomChar.repeat(randomNumberOfRepeats);
            }
    }, 16);
}

goInfinity();