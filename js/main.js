const inputNombre = document.querySelector('#name-input');
const nameText = document.querySelector('.name');
const inputCardNumber = document.querySelector('#card-input');
const cardNumberText = document.querySelector('.card-number');
const inputExpiringMM = document.querySelector('#mm-input');
const inputExpiringYY = document.querySelector('#yy-input');
const inputCVC = document.querySelector('#cvc-input');
const textoCVC = document.querySelector('.cvv');
const textoMM = document.querySelector('#mm');
const textoYY = document.querySelector('#yy');
const confirmBtn = document.querySelector('.confirm-btn');
const textoFailName = document.querySelector('#texto-fail-name');
const textoFailNumber = document.querySelector('#texto-fail-number');
const textoFailExp = document.querySelector('#texto-fail-exp');
const textoFailCVC = document.querySelector('#texto-fail-cvc');
let cardNumber;
let tarjetaValida, nombreValido, expiringValido, cvcValido;
const firstContainer = document.querySelector('.form');
const sndContainer = document.querySelector('.succes');
sndContainer.classList.add('none');
firstContainer.classList.remove('none');


function agregarEspaciosCada4Letras(texto) {
    const gruposDe4Letras = texto.match(/.{1,4}/g);
    const textoConEspacios = gruposDe4Letras.join(' ');
    return textoConEspacios;
  }

function tieneAlgunaLetra(texto){
    const expresionRegular = /[a-zA-Z]/;
    return expresionRegular.test(texto);
}


function validarInputTarjeta(){
    textoFailNumber.classList.add('none');
    if (inputCardNumber.value === ""){
        textoFailNumber.classList.remove('none');
        textoFailNumber.innerHTML = 'Can´t be blank';
        return false;
    }
    else if(tieneAlgunaLetra(inputCardNumber.value)){
        textoFailNumber.classList.remove('none');
        textoFailNumber.innerHTML = 'Wrong format, numbers only';
        return false;
    }
    else{
        textoFailNumber.classList.add('none');
        return true;
    }
}

function validarInputNombre(){
    textoFailName.classList.add('none');
    if(inputNombre.value === ""){
        textoFailName.classList.remove('none');
        return false;
    }
    else{
        textoFailName.classList.add('none');
        return true;
    }
}

function validarExpiring(){
    textoFailExp.classList.add('none');
    if(inputExpiringMM.value === "" || inputExpiringYY.value === ""){
        textoFailExp.classList.remove('none');
        textoFailExp.innerHTML = 'Can´t be blank';
        return false;
    }
    else if(tieneAlgunaLetra(inputExpiringMM.value) || tieneAlgunaLetra(inputExpiringYY.value)){
        textoFailExp.classList.remove('none');
        textoFailExp.innerHTML = 'Wrong format, numbers only';
        return false;
    }
    else if(inputExpiringMM.value > 12 || inputExpiringMM.value < 1){
        textoFailExp.classList.remove('none');
        textoFailExp.innerHTML = 'Enter a valid month';
        return false;
    }
    else if(inputExpiringYY.value < 23){
        textoFailExp.classList.remove('none');
        textoFailExp.innerHTML = 'Card expired!';
        return false;
    }
    else{
        textoFailExp.classList.add('none');
        return true;
    }
}

function validarCVC(){
    textoFailCVC.classList.add('none');
    if (inputCVC.value === ""){
        textoFailCVC.classList.remove('none');
        textoFailCVC.innerHTML = 'Can´t be blank';
        return false;
    }
    else if(tieneAlgunaLetra(inputCVC.value)){
        textoFailCVC.classList.remove('none');
        textoFailCVC.innerHTML = 'Wrong format, numbers only';
        return false;
    }
    else{
        textoFailCVC.classList.add('none');
        return true;
    }
}

inputCardNumber.addEventListener('keyup',() =>{
    if(inputCardNumber.value === ""){
        cardNumberText.innerHTML = "OOOO OOOO OOOO OOOO"
    }
    else{
    cardNumber = inputCardNumber.value;
    cardNumberText.innerHTML = agregarEspaciosCada4Letras(cardNumber);
}
})

inputCVC.addEventListener('keyup',() =>{
    if(inputCVC.value === ""){
        textoCVC.innerHTML = "000";
    }
    else{
    textoCVC.innerHTML = inputCVC.value;
    }
})

inputNombre.addEventListener('keyup',() =>{
    if(inputNombre.value === ""){
        nameText.innerHTML = "JANE APPLESEED"
    }
    else{
    nameText.innerHTML = inputNombre.value;
    }
})

inputExpiringMM.addEventListener('keyup',() =>{
    if(inputExpiringMM.value === ""){
        textoMM.innerHTML = "OO";
    }
    else{
    textoMM.innerHTML = inputExpiringMM.value;
    }
})

inputExpiringYY.addEventListener('keyup',() =>{
    if(inputExpiringYY.value === ""){
        textoYY.innerHTML = "OO";
    }
    else{
    textoYY.innerHTML = inputExpiringYY.value;
    }
})

confirmBtn.addEventListener('click',() =>{
    tarjetaValida = validarInputTarjeta();
    nombreValido = validarInputNombre();
    expiringValido = validarExpiring();
    cvcValido = validarCVC();
    if (tarjetaValida && nombreValido && expiringValido && cvcValido){
        sndContainer.classList.remove('none');
        firstContainer.classList.add('none');
    }
})



