


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
let body = document.querySelector('body');

getData()
    .then((misDatos)=>{
        let htmlProd = "";
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
        console.log(htmlProd);
        body.innerHTML = `
                            <main class="container mt-2">
                                <div class="row">                                    
                                    ${htmlProd}
                                <div>
                            </main>`;
        console.log(body.innerHTML);
    })
    .catch(err => console.log(err));

