const url = "https://pokeapi.co/api/v2/pokemon/1/";

fetch(url)
.then((resp) =>{
    console.log(resp);
    return resp.json()
})
.then(data=>{
    console.log(data);
    console.log(data.name);
    console.log(data.base_experience);    
    console.log(data.game_indices);
    console.log(data.location_area_encounters);
    console.log(data.moves.length);
    console.log(data.sprites.front_shiny)
})