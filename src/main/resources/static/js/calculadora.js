function setDigito(digito){
    let display = document.getElementById('display');
    display.value=display.value + digito;
}
function setOperador(operador){
    let display = document.getElementById('display');
    let valorA = display.value;
    let ultimoCar = valorA.slice(-1);
    let operadores = ['+', '**', '*', '-', '/'];
    if(operadores.includes(ultimoCar))
    {
        display.value = valorA.slice(0,-1) + operador;
    }
    else
        display.value= valorA + operador;
}
function borrar(){
    let display = document.getElementById('display');
    display.value='';
}
function obtenerRes(){
    //document = pagina = dpcumentos cientificos en los 90's
    let display = document.getElementById('display');
    display.value = eval(display.value);
}
function Raiz(){
    let display = document.getElementById('display');
    display.value = Math.sqrt(parseFloat(display.value));
}
function log(){
    let display = document.getElementById('display');
    display.value = Math.log10(parseFloat(display.value));
}
