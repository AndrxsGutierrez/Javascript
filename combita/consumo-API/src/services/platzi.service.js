export async function traerData() {
    // ajax viejo                todos son mesajeros
    // fetch nativo
    // axios sintaxsis mejor ue fetch son casi igual
    const response = await fetch('https://api.escuelajs.co/api/v1/categories')  // peticion por detras utiliza una promesa, awaait esa variable no la llena hasta que la peticion no tenga una respuesta como tal hasta que no regrese y me traiga los datos
    console.log(response); 
    const data = await response.json()
    console.log(data);

    return data
}