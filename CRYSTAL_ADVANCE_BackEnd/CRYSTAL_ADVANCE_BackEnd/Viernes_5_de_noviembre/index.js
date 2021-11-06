

//Datos primitivos: caracteres, números (enteros (no tienen decimales) y reales) y booleanos (lógicos).
//------------------------------------------------------------------------
//Mostar datos:
nombre = "Luis Porras Guerrero";
console.log(typeof nombre); //Imprima el tipo de variable que es nombre

nombre = 15;
console.log(typeof nombre);

//Declarar listas:
lista = [5, 7, 10, 9, 6];
console.log(lista[3]);//Imprimir la posicion cero de la lista

//------------------------------------------------------------------------------

//Declarar objetos:
persona = {

    //Atributos:
    cedula: "118910663",
    Nombre: "Luis",
    edad: 25
}

console.log(persona.cedula); //Dentro de persona buscar la variable que se llame cédula

//-------------------------------------------------------------------------------

peso = 60.5;//Variables anonimas, no se especifica su tipo
var altura = 1.75; //Van a existir desde el momento que se declara hasta que se finaliza.
let largo = 15; //Solo va a existir durante su función
const gravedad = 9.18;
//delete peso; Eliminar la variable peso

delete altura;

//-------------------------------------------------------------------------------
//Crear funciones: con nombre, requerimiento y accion:
function Sumatoria(num1, num2){
    let total = num1+num2;
    console.log(total)
}


function Saludar(){
    setTimeout(()=>{

        console.log("Hola");

    },2500 //El tiempo que esperará


    )//Ocupa una accion y un tiempo
}

Saludar();
//-----------------------------------------------------------------------------
/*Traer algo que instale, en este caso el sweetalert2
const Sweet = require("sweetalert2")

Sweet.fire("Hola")//Es una alerta de navegador, por eso no se ejecuta

Para desinstalar el sweetalert2: npm uninstall sweetalert2*/

//LIBRERIA DE ACCIONES: PROMPT
const prompt = require("prompt");

prompt.start();//Para realizar solicitudes asincrónicas
//Es para solucitar el nombre y la edad mientras hace otras cosas, por ejemplo (asincrónico)
prompt.get(["edad", "nombre"], (err, result)=>{
    console.log(result.edad);
    console.log(result.nombre);
} );


const lector = require("prompt-sync")();

var nombre = lector("Digite su nombre");
console.log("Hola ", nombre);


