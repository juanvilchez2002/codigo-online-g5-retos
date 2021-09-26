/*
    Desarrolle el siguiente algoritmo:
    El consultorio del Dr. Lorenzo T. Mata Lozano
    tiene como política cobrar la consulta con base
    en el número de cita, de la siguiente forma:
        • Las tres primeras citas a $200.00 c/u.
        • Las siguientes dos citas a $150.00 c/u.
        • Las tres siguientes citas a $100.00 c/u.
        • Las restantes a $50.00 c/u, mientras dure el
        tratamiento.
    Se requiere un algoritmo para determinar:
        a) Cuánto pagará el paciente por la cita.
        b) El monto de lo que ha pagado el paciente por
        el tratamiento.
    Para la solución de este problema se requiere
    saber qué número de cita se efectuará, con el
    cual se podrá determinar el costo que tendrá la
    consulta y cuánto se ha gastado en el
    tratamiento. Con este análisis se puede
    determinar que las variables que se van a
    utilizar son las que se muestran en la tabla
 */

console.log("Consultorio Dr. Lorenzo T. Mata Lozano.");

let primerasCitas = 200.00;
let segundasCitas = 150.00;
let tercerasCitas = 100.00;
let citasRestantes = 50.00;

let nroCita = +prompt("Ingrese el Nro de Cita de su Tratamiendo: ");
let tratamiento = nroCita;


let flag_1 = true;
let flag_2 = true;
let flag_3 = true;

let mensaje="";

let costoTratamiento = 0.0;
let costoTratamientoTotal = 0.0;

do{
    if(flag_1 == true){

        if(nroCita >= 3){
            costoTratamiento = 600.0;
            costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
            flag_1 = false;
            mensaje = `El costo de sus 3/${tratamiento} es: ${costoTratamiento}`;
            nroCita = nroCita - 3;
        }else{
            costoTratamiento = nroCita*200.00;
            costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
            mensaje = `El costo de sus ${nroCita}/${tratamiento} es: ${costoTratamiento}`;
            nroCita =0;
        }
    }else if(flag_2 == true){

        if(nroCita >= 2){
            costoTratamiento = 300.0;
            costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
            flag_2 = false;
            mensaje = mensaje+`\nEl costo de sus 2/${tratamiento} es: ${costoTratamiento}`;
            nroCita = nroCita - 2;
        }else{
            costoTratamiento = nroCita*150.00;
            costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
            mensaje = mensaje+`\nEl costo de sus ${nroCita}/${tratamiento} es: ${costoTratamiento}`;
            nroCita =0;
        }
    }else if(flag_3 == true){

        if(nroCita >= 3){
            costoTratamiento = 300.0;
            costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
            flag_3 = false;
            mensaje = mensaje+`\nEl costo de sus 3/${tratamiento} es: ${costoTratamiento}`;
            nroCita = nroCita - 3;
        }else{
            costoTratamiento = nroCita*100.00;
            costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
            mensaje = mensaje+`\nEl costo de sus ${nroCita}/${tratamiento} es: ${costoTratamiento}`;
            nroCita =0;
        }
    }else{
        costoTratamiento = nroCita*50.00;
        costoTratamientoTotal = costoTratamientoTotal + costoTratamiento;
        mensaje = mensaje+`\nEl costo de sus ${nroCita}/${tratamiento} es: ${costoTratamiento}`;
        nroCita =0;
    }
}while(nroCita > 0);

mensaje = mensaje+`\nEl costo total de sus ${tratamiento} citas es: ${costoTratamientoTotal}`;

console.log(mensaje);