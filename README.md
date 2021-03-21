# Cifrado César

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Criterios de aceptación mínimos del proyecto](#3-criterios-de-aceptación-mínimos-del-proyecto)
* [4. Criterios de aceptación adicionales](#4-criterios-de-aceptación-adicionales)
* [5. Objetivos de aprendizaje](#5-objetivos-de-aprendizaje)
* [6. Recomendaciones generales](#6-recomendaciones-generales)
* [7. Recursos y temas relacionados](#7-recursos-y-temas-relacionados)
* [8. Checklist](#8-checklist)

***

## 1. Preámbulo

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher)
es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio
César lo usaba para enviar órdenes secretas a sus generales en los campos de
batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es
un tipo de cifrado por sustitución, es decir que cada letra del texto original
es reemplazada por otra que se encuentra un número fijo de posiciones
(desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones en el alfabeto:

* La letra A se cifra como D.
* La palabra CASA se cifra como FDVD.
* Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
* Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

En la actualidad, todos los cifrados de sustitución simple se descifran con
mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la
comunicación por sí mismos, el cifrado César sí puede formar parte de sistemas
más complejos de codificación, como el cifrado Vigenère, e incluso tiene
aplicación en el sistema ROT13.

## 2. Resumen del proyecto

**¿Qué tengo que hacer exactamente?** 
Es un proyecto que consta en una aplicación _web_ pensada principalmente para telefonos celulares, que sirve para que los usuarios, puedan cifrar y descifrar una secuencia de caracteres, en este caso para cifrar palabras y descifrar claves, para ello los usuarios tienen que indicar un desplazamiento específico de caracteres con un n+umero (_offset_). 
Por ejemplo, cifrar **MICASA** con un desplazamiento de 3 caracteres de manera que el mensaje cifrado sería **PLFDVD**.

Estamos en un mundo de internet, en que necesitamos claves para entrar a distintas webs y muchas veces cambiarlas, por lo que olvidamos qué clave usamos para que webs por las innumerables webs que hay.

Por ésto último, esta aplicación está pensada para aquellos usuarios (principalmente personas de tercera edad o personas que olvidan facilmente) que quieran guardar sus claves en forma segura en su celular y/o webs, dando la posibilidad de cifrar palabras para generar una clave segura y descifrar claves por si el usuario quiere recordar la palabra cifrada anteriormente, por ejemplo. 

Para comenzar a utilizarla debe entrar al link http://www.... donde también puede descargarla como APP para su celular. El usuario debe registrarse con sus datos y generar una clave fácil de recordar para él, para que pueda acceder a ésta web. luego al acceder a ésta aplicación web, en la barra de desplazamientos debe colocar el número que quiere que se desplaze el valor de la letra a carácter hacia la derecha en caso de cifrar o a la izquierda en caso de descifrar.

Luego en la segunda barra el usuario debe colocar la palabra a cifrar o la clave a descifrar, haga click en botón correspondiente y posteriormente hacer click en boton "IR" esto lo llevará a una segunda pantalla donde aparecerá el resultado de su operación.

En el caso que le guste su clave, puede guardarla, haciendo click en botón "guardar", que lo llevará a una tercera pantalla donde pegará ésta clave en una barra de la columna izquierda y en la barra de al lado derecho colocará la dirección del sitio web que está usando dicha clave, por último haga click "guardar", para que quede estatica ahí.

En el caso que no le guste su clave puede hacer click en botón "volver", que lo llevará a la primera pantalla, donde podrá volver a realizar la operación inicial de colocar numero en desplazamientos y palabras en segunda barra y cifrar hasta que encuetre su clave a gusto, para posteriormente guardarla.

Cómo esta es una APP de prueba, en la pantalla de inicio tiene un tercer botón llamado "IR", cuya función es llevarlo a la segunda pantalla, luego de "cifrar" o "descifrar" para ver el resultado, por lo que cada vez que haga click en botones cifrar o descifrar posteriormente tiene que hacer click en botón "IR", para poder ir a segunda pantalla.

## 3. Criterios de aceptación mínimos del proyecto
Cuando hablemos de "criterios de aceptación", nos referimos a todo aquello que
debe suceder con tu proyecto para que consideremos (tú y nosotras) que lo has
"hecho" y que lo podemos "aceptar" como "mínimamente terminado".

### 3.1 Alfabeto simplificado
Considera solamente letras mayúsculas, sin ñ ni números u otros caracteres:
* A B C D E F G H I J K L M N O P Q R S T U V W X Y Z

### 3.2 Interfaz de usuario. Lo que se ve en el navegador (UI del inglés _user interface_)

Para cifrar debe permitir a tu usuaria:
* Escribir el mensaje (texto) que quiere cifrar.
* Elegir un desplazamiento (_offset_) indicando cuántas posiciones quiere que el cifrado desplace **cada letra** del mensaje.
* Ver el resultado del mensaje cifrado.

Para descifrar debe permitir a tu usuario:
* Escribir el mensaje (texto) que quiere descifrar.
* Indicar el desplazamiento (_offset_) que se utilizó para cifrar el mensaje.
* Ver el resultado del mensaje descifrado.

### 3.3 Repositorio del código (GitHub) y publicación de la web (GitHub Pages)
Cuando termines, y antes de ir a la sesión de _Project Feedback_, tu código deberá estar subido a GitHub (_commit/push_) y la interfaz será desplegada (publicada) usando _GitHub pages_. Si no sabes lo que es GitHub, no te preocupes, lo aprenderás durante este proyecto.

### 3.4 Sobre la definición de tu producto
Primero pensé pará qué puede servir el Cifrado Cesar en la actualidad, qué necesidad hay en el mundo actual que el Cifrado Cesar puede ser útil en satisfacer alguna necesidad a usuarios y me acordé de personas cercanas a mi de tercera edad que no logran acordase de sus claves y de mi misma de cuando se me olvidan claves por la cantidad de veces que he tenido que cambiar claves en una o más webs. En estos casos se me ocurrió la utilidad que tendría una aplicación en el celular y/o webs (en caso de no poder acceder a un celular encriptado con clave).

* Los principales usuarios son personas de tercera edad o con poca memoria para retener claves.
* Los objetivos que pueden conseguir los usuarios:
1. Guardar las claves en forma segura en una aplicación web, indicando en que página uso dicha clave (éste objetivo no es parte del proyecto). 
2. Crear claves seguras a partir de palabras simples.
3. Recordar claves (palabras cifradas anteriormente), por diversos motivos del usuario.

* Proceso para definir producto final:
1. Diseño en papel: lo primero fue dibujar el diseño en una hoja de papel, visualizando cantidad de pantallas, el logo, Titulos, mensajes, botones e interacciones con las pantallas.
2. Diseño en Figma: con esta aplicación lo diseñé colocandole colores, tipo de letras a logo, al cuerpo y pie de pagina, colocando las interacciones de botones, etc., siempre mejorando la calidad del diseño que realicé en papel, lo puedes ver en siguiente enlace: https://www.figma.com/file/0L0CKjfK1bMYkHAEkLQo2Z/CIFRADO?node-id=0%3A1
3. Experiencias de Usuarios: una vez listo el diseño en figma se lo mostré a amigas y compañeras de Boodcamp para obtener feedback, lo único que me pidieron que cambiara era el color que lo oscureciera y otras que lo aclarara, realicé estos cambios pero no sé porque casi pierdo información así que lo dejé como quedó y el un futuro pretendo mejorarlo.

4. Visual Studio Code: 
4.1. HTML Semántico: 
Inicialmente hice dos paginas de HTML semántico para diferenciar las distintas pantallas o cajas, posteriormente, para crear el tercer botón de la primera pantalla integré ambos HTML en uno con la etiqueta <section> para poder ocultar una de las pantallas, mientras se utiliza la otra (ya que no estoy usando la condición if else). Botón que quiero integrar con los otros, en un futuro.
Primero diseñé la primera pantalla de acuerdo a figma, de arriba hacia abajo, comenzando por body, colocando títulos <h1> y <h3> que vendría siendo el logo de la aplicación. Luego los formularios con la etiqueta <form>, que de acuerdo a su funcionalidad le agregué titulos <label>, botones <button>, para que las pantallas interactúen entre sí. Finalmente agregue el pie de pagina con etiqueta <footer> donde está la información relevante para el usuario (link que por ahora no funciona), terminando con los derechos de autor. Para lograr que esta sección me quedara alineada y con saltos de líneas, coloque todas las etiquetas que estudié que me puedieran servir en esta APP, como me funciona y no interfieren entre ellas, las dejé, más adelante veo si es necesrio sacar las que no sirven.
Las secciones de ambas pantallas estan divididas por las etiquetas <div> y <p> de acuerdo a su funcionalidad.
Posteriormente copie y pegué la primera pantalla en un index2 y eliminé formulario donde se coloca el offset, modifiqué título del tercer formulario, en los botones modifique sus identidades y datos. Agregue una pregunta "¿Te gusta tu clave?", para que el usuario responda con hacer click al boton "guardar" o "volver". El botón guardar es un botón que no funciona, porque éste te lleva a una tercera pantalla donde se guarda la clave con su respectiva web y no es objetivo de este trabajo.

4.2. CSS: 
En un comienzo, como hice dos HTML, hice también dos CSS que están integradas, quiero que se vea más responsiva y en un futuro pretendo arreglar.
Fui diseñando de arriba hacia abajo línea por línea, en body inicialmente diseñé una caja completa con margenes,bordes y padding pero visualmente los margenes y bordes no eran de utilidad, asi que dejé sólo el padding que es el color de fondo de la APP, colocando sus elementos como altura, ancho, tipo de letra etc., propio de todo el cuerpo de la APP.
Luego diseñé parte por parte titulos, formularios, botones y pie de página, con sus respectivos elementos y medidas.
Posteriormente copie y pegué éste CSS a un CSS2 donde modifiqué de acuerdo al diseño de HTML de la segunda pantalla.
Por último volví agregar borde y margen a caja para que se vea cebtrada en la pantalla.

4.3. JAVASCRIPT: 
En la medida que iba estudiando javascript iba escribiendo las funcionalidades en la pagina de index.js respetando su estructura, como no me funcionaba y no entendía lo que hacía volví hacerlo, pero antes diseñé el mapa de flujo en papel y luego fui reeescribiendo en index.js, paso por paso las funcionalidades declarando las variables para que guarde los datos a usar. Aqui es donde aprendi a testear por lo que tuve que testear paso a paso, ocultando los pasos posteriores y asi fui modificando datos, variable y funciones hasta que me funcionara, pasaba al siguiente paso. Use principalmente document.getElementById, parseInt, addEventistener y otros.

4.4. JAVASCRIPT CIPHER:
Mientras estudiaba y diseñaba javascript me encontré con el video de Michelle donde explica la formula de ASCII lo escribi inmediatamente en cipher.js y lo fui modificando en la medida que iba avanzando con index.js, la formula final consta de un bucle for. 

## 5. Objetivos de aprendizaje

### HTML y CSS

* [x] [Uso de HTML semántico.](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
* [x] Uso de selectores de CSS.
* [x] Construir tu aplicación respetando el diseño realizado (maquetación).

### DOM

* [x] Uso de selectores del DOM.
* [x] Manejo de eventos del DOM.
* [] [Manipulación dinámica del DOM.](https://developer.mozilla.org/es/docs/Referencia_DOM_de_Gecko/Introducci%C3%B3n)
(appendChild |createElement | createTextNode| innerHTML | textContent | etc.)

### JavaScript

* [x] Manipulación de strings.
* [ ] Uso de condicionales (if-else | switch | operador ternario)
* [x] Uso de bucles (for | for..in | for..of | while)
* [x] Uso de funciones (parámetros | argumentos | valor de retorno)
* [x] Declaración correcta de variables (const & let)

### Testing

* [x] [Testeo unitario.](https://jestjs.io/docs/es-ES/getting-started)

### Estructura del código y guía de estilo

* [x] Organizar y dividir el código en módulos (Modularización)
* [x] Uso de identificadores descriptivos (Nomenclatura | Semántica)
* [x] Uso de linter (ESLINT)

### Git y GitHub

* [x] Uso de comandos de git (add | commit | pull | status | push)
* [x] Manejo de repositorios de GitHub (clone | fork | gh-pages)

### UX

* [x] Diseñar la aplicación pensando y entendiendo al usuario.
* [x] Crear prototipos para obtener feedback e iterar.
* [x] Aplicar los principios de diseño visual (contraste, alineación, jerarquía)

***

