/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */ 
 
 /*
 ##############
 # OPERADORES #
 ##############
 */
 
 //ARITMETICOS 
 
let suma:number = 5+2
console.log("Resultado suma = " + suma)

let resta:number = 6-2
console.log("Resultado resta = " + resta)

let multiplicacion = 3*2
console.log("Resultado multiplicacion = " + multiplicacion)

let division = 8/4
console.log("Resultado division = " + division)

let resto_modulo = 5%2
console.log("Resultado resto(modulo) = " + resto_modulo)

let potencia = 3**2
console.log("Resultado potencia = " + potencia)

let g=1; 
g++ //Incremento
console.log("Incremento de g: " + g)


let f=5; 
f-- //Decremento
console.log("Decremento de f: " + f)

//ASIGNACION

let x = 2 //Asignación simple 
console.log("Valor de x asignado: " + x)
x+= 5 //suma y asigna
console.log("Valor de x suma-asignado: " + x)
x-=3 
console.log("Valor de x resta-asignado: " + x)

x*=5 
console.log("Valor de x multiplica-asignado: " + x)

x/=4 
console.log("Valor de x divide-asignado: " + x)

x%=2 
console.log("Valor de x modulo-asignado: " + x)

x**=4 
console.log("Valor de x potencia-asignado: " + x)

//COMPARACION

let aNumero:number = 3
let aLetra:string = '3'

//tuve que comentar porque ts lo ve con error al compilar por la dif de tipo.
//console.log("Comparación simple (==): " + (aNumero == aLetra))     // true
//console.log("Comparación estricta (===): " + (aNumero === aLetra)) // false

//console.log("Diferencia simple (!=): " + (aNumero != aLetra))      // false
//console.log("Diferencia estricta (!==): " + (aNumero !== aLetra))  // true

console.log("Comparo 5 con aNumero.")
console.log("Menor: " + (5 < aNumero))
console.log("Mayor que: " + (5 > aNumero))

console.log("Mayor o igual que: " + (5 >= aNumero))
console.log("Comparo 3 menor o igual... " + (3 <= aNumero))

//LOGICOS

let tienePasaje:boolean = true
let tieneHotel:boolean = false
 console.log("¿Tiene todo resuelto? " + (tieneHotel && tienePasaje))
 console.log("¿Le falto reservar hotel? " + (!tieneHotel))
 console.log("¿Resolvio algo? " + (tieneHotel || tienePasaje))
 
 //BIT A BIT 
 
 const a = 5      // 0101 en binario
const b = 3      // 0011 en binario

console.log("AND (a & b):", a & b)   // 0101 & 0011 = 0001 (1)
console.log("OR (a | b):", a | b)    // 0101 | 0011 = 0111 (7)
console.log("XOR (a ^ b):", a ^ b)   // 0101 ^ 0011 = 0110 (6)
console.log("NOT (~a):", ~a)         // ~0101 = 1010 => -6 (por cómo representa JS los negativos)
console.log("Desplazamiento izquierda (a << 1):", a << 1) // 0101 -> 1010 (10)
console.log("Desplazamiento derecha (a >> 1):", a >> 1)   // 0101 -> 0010 (2)
console.log("Desplazamiento derecha sin signo (a >>> 1):", a >>> 1) // Igual que >> para positivos

//TERNARIO

let edad:number = 20

console.log("El chico es: " + (edad >= 18 ? "Mayor" : "Menor"));

//DE TIPO 


console.log("La edad la defini como numero " + (typeof edad === "number"))
let algo: any = "Hola mundo";
let largo:number = (algo as string).length;

console.log("Largo: " + largo)

interface Mascotas {
  id: string,
  name: string,
  age: number,
  todasVacunas: boolean
}

const perro: Mascotas = {
  id: '1',
  name: 'Toby',
  age: 2,
  todasVacunas: true
}

console.log('Registramos las vacunas?: ', 'todasVacunas' in perro)
console.log('¿Tenemos la "raza" del objeto perro?: ', 'raza' in perro)

 /*
 ###############
 # ESTRUCTURAS #
 # DE CONTROL  #
 ###############
 */
 
 let numerito:number = 12
 
 //CONDICIONALES 
 
 if ((numerito%5) == 0) {
    console.log("El numero es multiplo de 5")
} else if ((numerito%7) == 0) {
    console.log("El numero es multiplo de 7")
} else {
    console.log("El numero no es multiplo ni de 5 ni de 7 o.o")
}

//SWITCH
let opcion:number = 10

switch (opcion) {
    case 1:
        console.log("Opcion 1")
        break;
    case 2:
        console.log("Opcion 2")
        break;
	case 3:
        console.log("Opcion 3")
        break;
	case 4:
        console.log("Opcion 4")
        break;
    default:
        console.log("La opcion no esta en la lista")
}

//BUCLE FOR

for (let i = 0; i < 5; i++) {
  console.log("i vale: ", i);
}

let personajes = ["Goku", "Naruto", "Ichigo", "Peter Parker"];

for (let personaje of personajes) {
  console.log(personaje);
}

let mascota = { nombre: "Toby", edad: 3, raza: "Husky" };

for (let clave in mascota) {
  console.log(clave, ":", mascota[clave as keyof typeof mascota]);
}

//CICLO while

let numeroAUsar:number = 0
while(numeroAUsar < 6){
	console.log(numeroAUsar)	
	numeroAUsar++;
}

//do while

let numero3 = 0;

do {
  console.log("Número:", numero3);
  numero3++;
} while (numero3 < 3);

/*
########
# RETO #
########
*/

for (let i = 10; i < 56; i++) {
  if((i%2 == 0) && (i != 16) && (i%3 != 0)){
	  console.log(i)
  }
}