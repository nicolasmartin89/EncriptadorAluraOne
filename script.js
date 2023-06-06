const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


//*La letra "e" es convertida para "enter"*
//*La letra "i" es convertida para "imes"*
//*La letra "a" es convertida para "ai"*
//*La letra "o" es convertida para "ober"*
//*La letra "u" es convertida para "ufat"*

function ocultarImage(){
    document.querySelector(".mensaje-no-encontrado").style.display = "none";
    document.querySelector(".mensaje-encriptado").style.display ="flex";
}


function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value ="";
    mensaje.style.backgroundImage ="none"
}


function encriptar(mensajeEncriptado){
    let matrizACodificar = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    mensajeEncriptado = mensajeEncriptado.toLowerCase()

    for(let i=0; i< matrizACodificar.length;i++){
        if(mensajeEncriptado.includes(matrizACodificar[i][0])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(matrizACodificar[i][0],matrizACodificar[i][1])
        }
    }
    return mensajeEncriptado
}

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value ="";
}

function desencriptar(stringDesencriptada){
    let matrizACodificar = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0; i< matrizACodificar.length;i++){
        if(stringDesencriptada.includes(matrizACodificar[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizACodificar[i][0],matrizACodificar[i][1])
        }
    }   
    return stringDesencriptada 
}

const btncopiar = document.getElementById("btncopiar")

const btnCopiar = () => {
    navigator.clipboard.writeText(mensaje.value)
}

btncopiar.addEventListener("click", btnCopiar)