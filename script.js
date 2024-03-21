const matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];

function simulateEncryption() {
    const encryptedOutput = document.getElementById('encryptedOutput');
    outputText = encriptar();
    encryptedOutput.textContent = outputText;
    encryptedOutput.style.backgroundImage = 'none';
  }
  
function simulateDecryption() {
    const encryptedOutput = document.getElementById('encryptedOutput');
    outputText = desencriptar();
    encryptedOutput.textContent = outputText;    
  }

function encriptar() {
    const textoSinEncriptar = document.getElementById('inputText').value;
    let textoEncriptado = textoSinEncriptar;
    
    for(let i = 0; i < matrizCodigo.length; i++) {
        const [letra, reemplazo] = matrizCodigo[i];
        const letraRegex = new RegExp(letra, 'g');
        textoEncriptado = replaceAllInstances(textoEncriptado, letra, reemplazo);
    }
    
    return textoEncriptado;
}

function desencriptar() {
    const textoEncriptado = document.getElementById('inputText').value;
    let textoSinEncriptar = textoEncriptado;

    for (let i = 0; i < matrizCodigo.length; i++) {
        const [reemplazo, letra] = matrizCodigo[i];
        textoSinEncriptar = replaceAllInstances(textoSinEncriptar, letra, reemplazo);
    }

    return textoSinEncriptar;
}

function replaceAllInstances(text, target, replacement) {
    let index = text.indexOf(target);
    while (index !== -1) {
        text = text.substring(0, index) + replacement + text.substring(index + target.length);
        index = text.indexOf(target, index + replacement.length);
    }
    return text;
}

function copiar() {    
    let textoCopiado = document.getElementById('encryptedOutput');

    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 9999);

    try {
        navigator.clipboard.writeText(textoCopiado.value);
        console.log('text copiedo to clipboard');
    } catch (err) {
        console.log('unable to copy', err);
    }

    
    //inputText.setSelectionRange(0,0)
}