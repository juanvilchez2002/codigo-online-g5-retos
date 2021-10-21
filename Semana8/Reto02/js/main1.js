const url = "https://pokeapi.co/api/v2/pokemon/1/";

fetch(url)
.then(resp => resp.json())
.then(data=>{
    console.log(data);
    console.log(data.name);
    console.log(data.base_experience);    
    console.log(data.game_indices);
    console.log(data.location_area_encounters);
    console.log(data.moves.length);
    console.log(data.sprites.front_shiny)
})


const url1 = "https://616b5ec116c3fa0017171696.mockapi.io/usuario_prueba";

const getData = async()=>{
    try{
       let respt = await fetch(url1);
       let datos = await respt.json();
       console.table(datos);
       return datos;
    }catch(err){
        console.log(err);
    }
}


//creando un selector para la etiqueda <body></body>
let body = document.querySelector("body");

getData()
    .then((misDatos)=>{
        let htmlProd = "";
        misDatos.forEach(date => {
            htmlProd += `
                <tr>
                    <td>${date.nombre}</td>
                    <td>${date.correo}</td>
                    <td>
                        <img src=${date.foto}>
                    </td>
                </tr>`
        });
        body.innerHTML = `<table border=1>
                                ${htmlProd}
                          </table>`
    })
    .catch(err => console.log(err));