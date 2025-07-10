import chalk from 'chalk';
import { format } from 'date-fns';

console.log(chalk.green("Hola, soy Nicolás” en color verde"))

console.log(chalk.green("Hola, soy Dylan” en color verde"))

console.log(chalk.green("Hola, soy Hugo en color verde"))

console.log(chalk.green("Hola, soy Félipe en color verde"))

const hoy = new Date();
const fechaFormateada = format(hoy, 'dd/MM/yyyy');
console.log(chalk.blue(fechaFormateada));

const entrega = new Date(hoy.getFullYear(), 5, 5); 

if (hoy < entrega) {
  console.log(chalk.yellow(`Fecha de entrega: ${fechaFormateada}`));
} else {
  console.log(chalk.red(`Fecha de entrega: ${fechaFormateada}`));
}