/**
 *  Desarrolle el siguiente algoritmo:
    Un productor de leche lleva el registro de lo
    que produce en litros, pero cuando entrega le
    pagan en galones. Realice un algoritmo, y
    represéntelo en JS, que ayude al productor
    a saber cuánto recibirá por la entrega de su
    producción de un día (1 galón
    = 3.785 litros).
    Si se analiza el problema se puede establecer
    que los datos que se necesitan para resolver el problema son los que
    se muestran en la tabla

    a) que datos necesito:
        * cantidad de litros de leche
        * precio de la leche por galones
        * conversión de litros de leche a galon
        * precio total por la leche
    
    b) de donde obtengo los datos:
        * la conversión se tiene 1galon = 3.785litros
        * la cantidad de litros debe ser ingresada
        * el precio por galon de leche debe ser ingresada
    
    c) esos datos en que forma estan:
        * litros debe ser entero
        * precio del galon debe ser real
        * cantidad de galones debe ser real
        * ganancia debe ser real

 */
    
    //ingresamos la cantidad de leche en litros
    let litroLeche = +prompt("Buenos días!!!\n Ingrese la cantidad de litros leche producida: ");
    
    
    //flag para terminar bucle
    let flag = false;

    do{

        let eleccion = +prompt("Eliga una Opción:\n 1. Corregir la cantidad de litros de Leche Ingresada.\n 2. Adicionar litros de leche.\n 3. Procesar Ganancia por la leche.");
        
        switch(eleccion){
            case 1:
                litroLeche = +prompt("Corriga la cantidad de litros de leche: ");
                break;
            case 2:
                let adicionar = +prompt("Ingrese los litros de leche a adicionar: ");
                litroLeche = litroLeche+adicionar;
                break;
            case 3:
                alert("Ingreso de datos de Leche terminado...:");
                flag = true;
                break;
            default:
                alert("Ingrese un valor correcto....:");
        }
    }while(flag == false);

    //realizando la conversión de litros 
    let galonLeche = litroLeche/3.785;

    flag=false;

    do{
        precioGalon = +prompt("Ingrese costo por galon de leche:");

        if(precioGalon != "" || precioGalon!= 0.0){
            flag=true;
            continue;
        }

        alert("Ingese un valor correcto...")

    }while(flag == false)
            
    let gananciaLeche = precioGalon*galonLeche;

    console.log(`La ganancia por la entrega es: 
    Litros de Leche: ${litroLeche}
    Galon de Leche: ${galonLeche}
    Ganancia total: ${gananciaLeche} `);

    //flag para terminar bucle

