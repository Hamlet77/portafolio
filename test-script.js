let placeholderImage2;

// Function to simulate encryption
function simulateEncryption() {
    const inputText = document.getElementById('inputText').value;
    const encryptedOutput = document.getElementById('encryptedOutput');
    const placeholderImage2 = document.querySelector('.placeholder-image');
    console.log('testin test-script.js file')
    console.log(inputText)

//Here, you can modify the input text in any way you want
//For example, let's just reverse the input txt
    const reversedText = inputText.split('').reverse().join('');
    encryptedOutput.textContent = reversedText;


}
