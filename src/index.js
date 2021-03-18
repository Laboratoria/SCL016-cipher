import cipher from "./cipher.js";

/*CODIGO HTML:
<button(1) id="encryptWord" class="CIFRAR" input type="buttonOne" value="secuenseWord"><href=""/>CIFRAR</button> 
<button(2) id="decryptWrench" class="DESCIFRAR" input type="buttonTwo" value="secuenceWrench"><href=""/>DESCIFRAR</button>
<button(3) id="IR">IR</button>
<form(1 NUMEROS)><input type="text" class="placenu" id="despla" size="20px" required /></form>
<form(2 SECUENCIAS)><input type="text" class="displa" id="placete" size="30px" required /></form>
<form(3 RESULTADO)><input type="text" class="secuence" id="sight" name="text" value=" " size="30px" /></form>*/

/*//DEFINICIONES*/
//saveWord: para guardar palabras.
//saveWrewnch: para guardar claves.
// eWords: para cifrar palabras.
// dWrench: para descifrar claves.
// value:cajita para guardar datos.
//Evento DOM: document.getElementById() selecciona un elemento de HTML a/t "id" (usado en 1).
//Función: parseInt analiza diferentes cadenas.
//Metodo o Evento?: addEventListener es para adjuntar un evento al click*/ (usado en 1)
//Metodo: toUpperCase convierte cadena en letras mayusculas. 
//Metodo:fromCharcode muestra valor ASCII de un caracter.*/
//Metodo: fromCharcodeAt convierte número en caracter.*/
//Propiedad DOM: textContent: muestra el contenido de un texto de un elemento, sin la etiqueta HTML. (usado en 2)
//Propiedad DOM: innerHTML: cambia el contenido HTML de un elemento <p> con id="demo": document.getElementById("demo").innerHTML= "mje a ver";.*/
//Punto concatena 2 parametros. lo 1ro es elemento, lo segundo es lo que quiero que haga el 1ro.

//1. DECLARACION DE VARIABLES PARA GUARDAR DATOS AL "CIFRAR"*/

const eWord = document.getElementById("encryptWord");
eWord.addEventListener("click", function () {
  let numb = document.getElementById("despla").value; //aqui llamo a id=form*/
  let secuenseWord = document.getElementById("placete").value; //aqui llamo a id=form*/
  let result= document.getElementById("sight"); //aqui llamo a form result*/
   
  let textCipher= cipher.encode(numb, secuenseWord);
  result.value= textCipher; //aqui se llama a Cipher para que muestre valor en form 3*/
}
)
//1.1 CREANDO (DEFINIENDO) Y DECLARANDO FUNCIÖN BOTON "CIFRAR" (TRANSFORMAR PALABRA EN CLAVE). => revisar errores*/
let numb = document.getElementById("despla").value; //esta var esta declarada aneriormente en una f()*/
let secuenseWord = document.getElementById("placete").value; //esta var esta declarada aneriormente en una f()*/
let ind = secuenseWord.charCodeAt(); // esto es por lugar de letra en string*/


let encryption = ((ind -65 + numb)%26 + 65); // Para tomar formula ASCII cipher.js*/

let result = String.fromCharCode(encryption); // muestra valor ASCII de caracter*/

//2 DECLARACION DE VARIABLES PARA GUARDAR DATOS AL "DESCIFRAR"*/
const dWrench = document.getElementById("decryptWrench");
dWrench.addEventListener("click", function () {
    let numb = document.getElementById("despla").value;
    let secuenseWrench = document.getElementById("placete").value;
    let result= document.getElementById("sight"); //aqui llamo a form result*/
    
    let textCipher= cipher.decode(numb, secuenseWrench);
    result.value= textCipher;
}
)
//2.1 CREANDO (DEFINIENDO) Y DECLARANDO FUNCIÖN BOTON "DESCIFRAR" (TRANSFORMAR PALABRA EN CLAVE).*/
//let secuenceWrench = document.getElementById("placete").value;
//let ind = secuenceWrench.charCodeAt(); 
//console.log(ind);

//let dencryption = ((ind + 65 - numb)%26 + 65); 
//console.log(dencryption);

//let result = ind.fromCharCode(dencryption);
//console.log(result); 

//3. CREANDO (DEFINIENDO) FUNCIÖN BOTON 3/*
/*quiero regresar a esta pagina: <section1 id= "pagOne">
   pag 2 <section2 id="pagTwo"> */

   let goinBack = document.getElementById("goBack");
   goinBack.addEventListener("click", goBack);
   
   function goBack() {
     document.getElementById("pagTwo").style.display = "none";
     document.getElementById("pagOne").style.display = "block";
   }
   //Boton provisorio para moverme entre paginas*/
   //HTML:<button id="IR">IR</button>*/
   let provisorio = document.getElementById("IR");
   provisorio.addEventListener("click", moverse);
   
   function moverse() {
     document.getElementById("pagOne").style.display = "none";
     document.getElementById("pagTwo").style.display = "block";
   }
  console.log(cipher);