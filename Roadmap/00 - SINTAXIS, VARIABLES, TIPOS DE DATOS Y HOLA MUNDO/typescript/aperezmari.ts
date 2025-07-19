/*
Importante:
Recuerden que typescript en ejecución se ejecuta como un javascript. 

Pra correr el archivo hay dos formas. Uno compilando primero a JS y luego con otro comando para ejecutarlo, en el segundo es todo conun comando.
En ambas se compila y ejecuta. 
Compilando:
1) Si no tenemos TS lo instalamos corriendo: npm install -g typescript
2) Usamo el comando tsc <nombre_Archivo>.ts  para compilar
3)Ejecutamos con node <nombre_Archivo>.ts

Con un solo comando:
1) instalamos con: npm install -g ts-node
2) ejecutamos con: ts-node <nombre_archivo>.ts

Si tenemos varios archivos corremos: tsc --init  creando el config.json y luego ejecutamos y compilamos todos con tsc

Si falla la compilación por: TypeError: Unknown file extension ".ts". Tenes estas soluciones:
1) Le explicamos a node como manejar los archivos.ts correctamente como módulo ES usando ts-node con el comando:
	ts-node --loader ts-nodeesm <nombre_archivo>.ts
2) Si contamos con un tsconfig.json agregamos:
		{
		  "compilerOptions": {
			"module": "CommonJS"
		  }
		}
3) O directamente ejecutando: 
	ts-node --compiler-options '{"module":"CommonJS"}' <nombre_archivo>.ts
A mi me funciono el 3ro.
 */

// Sitio web oficial: https://www.typescriptlang.org/docs/


/*
Comentario de varias lineas
owo uwuwwuwu
*/

//VARIABLES Y CONSTANTES

var variable1:String = 'Esta es una variable global/funcion'
let variableLet:String = 'Esta es otra variable son solo del bloque (entre "{}")'
const constante1:Number = 2

/*
####################
# TIPOS PRIMITIVOS #
####################

number: Representa valores numéricos, tanto enteros como de punto flotante. 
string: Representa secuencias de caracteres, como texto. 
boolean: Representa valores lógicos, true o false. 
null: Representa la ausencia intencional de un valor. 
undefined: Representa una variable que ha sido declarada pero no se le ha asignado un valor. 
symbol: Representa valores únicos e inmutables que se utilizan como identificadores de propiedades en objetos. 
bigint: Representa números enteros mayores que el rango permitido por el tipo number (253 - 1). 

*/

let edadActual:number = 25
let numeroGrande:bigint = 23456789123456n; //Recordar siempre el n al final
let hex: number = 0xf00d;
let binario: number = 0b1011;
let octal: number = 0o772;

let climaActual:string = 'Soleado y frio'
let esArgenino:boolean = true
let algoRandom:any = 'Cualquiercosa'
let masTarde:undefined = undefined //Se puede iniciar vacio tmb. 

let username: symbol = Symbol("pepe");

//Si no ponemos tipo ts va a inferir el tipo
const languageName = 'Typescript'

console.log(`Hola! ${languageName}`)