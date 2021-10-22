//definiendo dnd obtendremos la data
const url1 = "https://616b5ec116c3fa0017171696.mockapi.io/usuario_prueba";

//definiendo la clase
class toDoAPP{
    //definiendo el contructor
    constructor(direc){
        this.direc = direc;
        //llamando una función para al inicializar la clase
        this.mostrarData()
    }

    //definiendo la función que obtendra la data
    async obtenerData(){
        try {
            let respuesta = await fetch(this.direc);
            let datos = await respuesta.json();
            console.table(datos);
            return datos;
        } catch (error) {
            console.log(error);
        }
    }

    //defiinendo la función que mostrara la data
    async mostrarData(){
        try {

            let htmlProd ="";

            let misDatos = await this.obtenerData();

            
            misDatos.forEach(date => {
                htmlProd += `
                    <div class="card col-lg-4 col-md-6 col-sm-12">
                        <img src="${date.foto}" class="card-img-top mt-2" alt="avatar de ${date.nombre}" >
                        <div class="card-body text-center">
                            <h5 class="card-title">${date.nombre}</h5>
                            <p class="card-text">${date.correo}</p>
                        </div>
                    </div>`
            });

            body.innerHTML = `
                            <main class="container mt-2">
                                <div class="row">                                    
                                    ${htmlProd}
                                <div>
                            </main>`;

        } catch (error) {
            console.log(error);
        }
    }
}

//creando un selector para la etiqueda <body></body>
let body = document.querySelector('body');

//creando un objeto de la clase
let nuevaData = new toDoAPP(url1)

console.log(nuevaData);
//nuevaData.mostrarData();