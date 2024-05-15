//Esto nos manda una alerta en pantalla
alert(Sexo);

//tipo de dato: string
var nombre;
nombre = prompt("Ingresa tu nombre", "Valor");

//tipo de dato: numérico
edad = prompt("Ingresa la edad");

alert(nombre);
document.write(nombre + " " + edad);
console.log(nombre);

//Object - Objeto
var object = {
    color: "Black",
    size: 12
}

//Boolean - Booleano
var booleano = true;
var boleano = false;

//Undefinded
var CharlieGames28;
document.write(CharlieGames28)

//Null
var numero2 = 10;
//-----
var numero2 = null;

//NaN
var texto2 = "Hola cómo estás?";
document.write(texto2 * 2);

//Array - Arreglo
var amigos = ["Carlos", "Alejandro", "Cesar"];
document.write(amigos[0])
amigos[2] = "Arturo";
amigos[3] = "Manuel";
document.write("Tienes" + amigos.length + "amigos");
amigos[amigos.length] = "Fernando";
amigos.push("Luis", "Abio");
amigos.pop();
var amigos2 = ["Santiago", "Camilo", "Cristian"];
var amigos3 = amigos.concat(amigos2);
document.write(amigos3);
document.write(amigos.join(" : "));
var ordenados = amigos.sort();
//var ordenados = amigos.reverse();
document.write(ordenados);

//CONDICIONALES
var nombre = prompt("Ingresa tu nombre"),
    edad = prompt("Ingresa tu edad");
if (nombre=="Carlos"){
    document.write("Bienvenido " + nombre);
} else{
    document.write("Bienvenido anónimo");
}
//and: &&
//or: ||
//comprobar valor: ===
if (edad >= 18 ){
    document.write("Bienvenido, eres mayor de edad");
} else{
    document.write("No eres bienvenido por no ser mayor de edad");
}

//CICLOS
var numeroDeUsuarios = 49
for (i=0; i<=numeroDeUsuarios; i++){
    document.write("Fuck yeah!" + "<br>");
}
var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
for (i=0; i<=dias.length - 1; i++){
    document.write(dias[i] + "<br>");
}
var i = 0;
while (i<=10){
    document.write( i + "<br>" );
    i++;
}

//FUNCIONES
function saludo(nombre){
    document.write("Buenos días" + nombre);
}
saludo("Carlos");
function suma(numero1, numero2){
    var numero1 = parseFloat(document.getElementById("numero1").value);
    var numero2 = parseFloat(document.getElementById("numero2").value);
    var resultado = numero1 + numero2
    return resultado;
}
document.write(suma(10, 20));
function numeroMaximo (valor1, valor2){
    if (valor1 > valor2){
        return valor1;
    } else {
        return valor2;
    }
}
document.write("El número máximo es:" + numeroMaximo(10, 20));

//SCOPE JAVASCRIPT
//Global - Podemos acceder a ellas desde cualquier parte del código
//Local - Variables creadas dentro de una función, solo pueden ser accedidas desde su función o una función anidada
var variableGlobal = "Esta es Global";
var miFuncion = function(){
    var variableLocal = "Esta es local";
    alert(variableLocal);
    alert(variableGlobal);
    variableGlobal = "Esta es Global, modificada";
    alert(variableGlobal);
    var FuncionLocal = function(){
        var variableLocal = "Esta es variable local, dentro de función local";
        alert(variableLocal);
    }
    FuncionLocal();
}
miFuncion();
alert (variableGlobal);
alert(variableLocal);

//Métodos para cadenas de texto
var texto = "Carlos Fernando";
var nuevoTexto = texto.substr(0, 6);
document.write(nuevoTexto);

var texto = "Carlos Fernando";
var posicionLetra = texto.indexOf("a", 4);
document.write(posicionLetra);

var texto = "Carlos Fernando";
var texto2= texto.indexOf("o");
var posicionLetra = texto.indexOf("o", texto2);
document.write(posicionLetra);

var texto = "Carlos Fernando";
var posicionLetra = texto.lastIndexOf("a");
document.write(posicionLetra);

var texto = "Carlos Fernando";
var nuevoTexto = texto.replace("Carlos", "Charlie");
document.write(nuevoTexto);

var texto = "Carlos Fernando";
var nuevoTexto = texto.toUpperCase();
document.write(nuevoTexto);
var nuevoTexto2 = nuevoTexto.toLowerCase();
document.write(nuevoTexto2);

//Document Object Model
var elementosP = document.getElementsByTagName("p");
var segundoParrafo = document.getElementById("segundo");
//Creando nodos del DOM
//1. - Crear el elemento
var elemento = document.createElement("h2");
//2. - Crear un nodo de texto
var contenido = document.createTextNode("Este es nuestro titular");
//3. - Añadir el nodo de texto al elemento
elemento.appendChild(contenido);
//4. - Agregar atributos al elemento
elemento.setAttribute("align", "center");
//5. - Agregar el elemento al documento
document.getElementById("subtítulo").appendChild(elemento);
//Otro ejemplo
var elemento2 = document.createElement("li"),
    contenido2 = document.createTextNode("Nuevo Texto");
elemento2.appendChild(contenido2);
var padre = document.getElementById("lista");
//Otra forma: var padre = document.getElementsByTagName("li")[0].parentNode;
//Insertar al final:
padre.appendChild(elemento2);
//Insertar al inicio:
//var padre = document.getElementsByTagName("li")[0].parentNode,
//  primerElemento = document.getElementsByTagName("li")[0];
//padre.insertBefore(elemento2, primerElemento);

//Modificar nodos del DOM
var primerElemento = document.getElementById("primero");
primerElemento.innerHTML = "Nuevo texto <i class=\"foo\">CharlieGames28</i>";
//otra manera: primerElemento.textContent = "Nuevo texto";
//Reemplazar nodos del DOM
var elemento2 = document.createElement("li"),
    contenido2 = document.createTextNode("Nuevo Texto");
elemento2.appendChild(contenido2);
var padre = document.getElementsByTagName("li")[0].parentNode,
    referencia = document.getElementsByTagName("li")[0];
padre.replaceChild(elemento2, referencia);

//Eliminar nodos del DOM
var elemento2 = document.createElement("li"),
    contenido2 = document.createTextNode("Nuevo Texto");
elemento2.appendChild(contenido2);
var padre = document.getElementsByTagName("li")[0].parentNode,
    referencia = document.getElementsByTagName("li")[0];
padre.removeChild(referencia);

//Acceso a los atributos del DOM
var elemento = document.createElement("div"),
    padre = document.getElementById("contenedor"),
    referencia = document.getElementsByTagName("div")[0];
elemento.setAttribute("class", "azul");
padre.insertBefore(elemento, referencia);

//Modificando el estilo de los elementos
var encabezado = document.getElementById("encabezado");
encabezado.className = "titulo tituloGrande";
encabezado.style.background = "navy";
encabezado.style.color = "#fff";
encabezado.style.paddingTop = "20px";
encabezado.className = encabezado.className.replace("tituloGrande", "");

//(PRÁCTICA) Modificando el estilo de los elementos
var zoom = function(){
    var thumb = document.getElementById("thumb");
    if (thumb.className == "thumb"){
        thumb.setAttribute("class", "thumb grande");
    } else {
        thumb.setAttribute("class", "thumb");
    }
}

//Eventos del DOM
(function(e){
    var saludo = function(){
        alert("Saludo");
        e.preventDefault(); 
    };
    var boton = document.getElementById("boton");
    boton.addEventListener("click", saludo);
//    boton.removeEventListener("click", saludo);
}())

//Formularios
(function(){
    var formulario = document.getElementByName("formulario")[0],
        elementos = formulario.elements,
        boton = document.getElementById("btn");
    var validarNombre = function(e){
        if(formulario.nombre.value == 0){
            alert("Completa el campo nombre");
            e.preventDefault();
        }
    };
    var validarRadio = function(e){
        if (formulario.sexo[0].checked == true || formulario.sexo[1].checked == true){
        } else {
            alert("Completa el campo sexo");
            e.preventDefault();
        }
    };
    var validarCheckbox = function(e){
        if(formulario.terminos.checked == false){
            alert("Acepta los Términos y Condiciones");
            e.preventDefault();
        }
    }
    var validar = function(e){
        validarNombre(e);
        validarRadio(e);
        validarCheckbox(e);
    };
    formulario.addEventListener("submit", validar);
}())

//Timers, Timeout e Interval
(function(){
    var contador = 0;
//Timeout
    var saludo = function(){
        console.log("Saludo!");
        contador++;
        console.log(contador);
        if (contador === 5){
            clearInterval(intervalo)
        }
    };
    setTimeout(saludo, 3000);
//Interval
     var intervalo = setInterval(saludo, 3000);
})

//Fechas en Javascript
(function(){
    var fecha = new Date();
    document.write(fecha)
    console.log(fecha.getHours()-12);
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());
    var semana = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
    console.log(fecha.getDay());
    console.log(fecha.getDate());
    console.log(fecha.getMonth());
    console.log(fecha.getFullYear());
})