/**
 *  Desarrolle el siguiente algoritmo:
    “El náufrago satisfecho” ofrece
    hamburguesas sencillas, dobles y triples,las
    cuales tienen un costo de $20.00, $25.00 y
    $28.00 respectivamente. La empresa acepta
    tarjetas de crédito con un cargo de 5 % sobre
    la compra.
    Suponiendo que los clientes adquieren sólo
    un tipo de hamburguesa, realice un algoritmo
    para determinar cuánto debe pagar una
    persona por N hamburguesas.
 * 
 */

console.log("Bienvenido a 'El Náufrago Satisfecho'");

let qtySimples = 0;
let qtyDobles = 0;

let precioSimple = 20.0;
let precioDoble = 25.00;

let pagoCompra = 0.0;

let flag = false;

/*
    realizando la pregunta ingresando dato por dato
*/

do{

    let elc = +prompt("Seleccione su pedido: \n1. para una Simple \n2. para Doble \n3. para finalizar el pedido");

    switch(elc){
        case 1:
            console.log("Solicito una Simple¡¡¡\n");
            qtySimples++;
            break;
        case 2:
            console.log("Solicito una Doble!!!\n");
            qtyDobles++;
            break;
        case 3:
            console.log("Finalizo el pedido¡¡¡\n");
            flag = true;
            break;
        default:
            console.log("Opción Incorrecta\n"); 
    }
}while(flag==false);

flag = false;

let comision=0;

do{
    let elcP = +prompt("Seleccione una forma de Pago:\n11. Efectivo \n2. Tarjeta Crédito.");

    switch(elcP){
        case 1:
            console.log("Selecciono pago en efectivo.");
            pagoCompra=qtySimples*precioSimple+qtyDobles*precioDoble;
            flag=true;
            break;
        case 2:
            console.log("Selecciono pago con Tarjeto de Crédito.");
            comision = (qtySimples*precioSimple+qtyDobles*precioDoble)*0.05;            
            pagoCompra=qtyDobles*precioDoble+comision+qtySimples*precioSimple;
            flag=true;
            break;
        default:
            console.log("Eleccion erronea...");
    }
}while(flag == false);

console.log(`Cuenta a pagar:\n
Cantidad de Simples: ${qtySimples}
Cantidad de Dobles: ${qtyDobles}

Precio de Simple: ${precioSimple}
Precio de Doble: ${precioDoble}

Comision por Tarjeta: ${comision}

Precio Total: ${pagoCompra}`)