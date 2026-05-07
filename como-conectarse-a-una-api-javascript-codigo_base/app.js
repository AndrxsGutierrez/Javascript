const cargarPelicula = async() => {

    try {
        const respuesta = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=c538e7dfb628462e4e21bd3a38b97ed7&language=es-MX')


    console.log(respuesta)
    // si la respuesta es correcta
    if (respuesta.status === 200) {
    const datos = await respuesta.json()

    let peliculas = ''
    datos.results.forEach(pelicula => {
        peliculas += `
        <div class="pelicula">
            <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}"> 
            <h3 class="titulo">${pelicula.title}</h3>
        </div>
        
        
        `;
    });
    document.getElementById('contenedor').innerHTML = peliculas

    } else if (respuesta.status === 401) {
        console.log('pusiste la llave mal')
    } else if (respuesta.status === 404) {
        console.log('La pelicula que existe no existe')
    } else {
        console.log('Hubo un error raro y no sabemos que paso')
    }

    } catch(error){
        console.log(error);
        
    }
}
    

cargarPelicula()