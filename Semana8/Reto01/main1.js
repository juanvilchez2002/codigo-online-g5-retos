
//referencia al formulario
let fromToDo = document.getElementById("fromToDo");

//referencia a la lista de tarea
let ulTareas = document.getElementById("tareas");

let tareas = []; //aquí se almacenarar las tareas a mostrar

//Llevando a clase toda la función
class TODOLIST{
    //definiendo el constructor
    constructor(fromToDo, ulTareas, tareas){
        this.fromToDo = fromToDo;
        this.ulTareas = ulTareas;
        this.tareas = tareas;
    }

    //función que añade una tarea
    anadirTarea(){        
        //referencia al mismo objeto
        let that = this;
        
        fromToDo.addEventListener("submit", function(event){
            //event es el evento
            event.preventDefault();
            //formulario.name_input.value
            let nuevaTarea = fromToDo.tarea.value;
        
            //lo agregamos al arreglo tareas
            tareas.push(nuevaTarea);
        
            //formulario.reset() -> reinicia todo el formulario
            fromToDo.reset();
        
            //llamamos a dibujarTareas
            that.mostrarTareas();
        });
    }

    mostrarTareas(){
        //referencia al mismo objeto
        let that = this;
        //cada vez que se ejecute dibujarTareas, lo primero q se hace
        //es decir que el contenido UL de HTML va a ser "" nada
        //limpiamos el contenido de ulTareas
        ulTareas.innerHTML = "";
            
        //se va a encargar de dibujar las tareas y mostrarlas en 
        //el navegador
    
        tareas.forEach(function(tarea, posicion){
            //creamos un elemento li
            let li = document.createElement("li");
    
            //como esta vacio le agregamos la tarea
            li.innerHTML = tarea;
    
            //adicionamos a la etiqueta ul que es ulTareas
            ulTareas.appendChild(li);
    
            //añadir un evento a cada item/tarea
            //evento dobleClick
            li.addEventListener("dblclick", function(){
                //hace doble click me muestra la tarea
                console.log("click en ", tarea)
                
                //elimnando una tarea
                tareas.splice(posicion,1);
                console.log("despues de eliminar", tareas);
    
                //llamamos de nuevo dibujarTareas
                that.mostrarTareas();
            })
        });
    }
}

let llamarClase = new TODOLIST(fromToDo, ulTareas, tareas);
llamarClase.anadirTarea();
llamarClase.mostrarTareas();