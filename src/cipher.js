//Función: parseInt analiza diferentes cadenas.
//Metodo: toUpperCase convierte cadena en letras mayusculas. 
//Metodo:fromCharcode muestra valor ASCII de caracter.*/
//Metodo: charCodeAt convierte número en caracter.*/
//65 es valor ASCII primera letra mayuscula "A"*/
//lenght: propiedad que establece o devuelve el númeró de elementos de un String*/

const cipher = {

   encode(numb, secuenseWord) {

      let result = " ";
      let displacement = parseInt(numb);
      let secuenseCap = secuenseWord.toUpperCase();


      for (let ind = 0; ind < secuenseCap.length; ind++) {
         let letterAscii = secuenseCap.charCodeAt(ind); // lleva a posicion ASCII*/
         let newLetterAscii = (letterAscii - 65 + displacement) % 26 + 65;
         let letterCoded = String.fromCharCode(newLetterAscii); //muestre nueva letra valor ASCII*/
         result = result + letterCoded;
               }
      return result;
   },

   decode(numb, secuenseWrench) {

      let result = " ";
      let displacement = parseInt(numb);
      let secuenseCap = secuenseWrench.toUpperCase();

      for (let ind = 0; ind < secuenseCap.length; ind++) {
         let letterAscii = secuenseCap.charCodeAt(ind);
         let newLetterAscii = (letterAscii + 65 - displacement) % 26 + 65;
         let letterDecoded = String.fromCharCode(newLetterAscii);
         result = result + letterDecoded;
      }
      return result;
   },
}
export default cipher;