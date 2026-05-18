console.log('Conectado')
setInterval(() =>{
    fetch('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => response.json()) //convierte la peticion en obj
    .then(data => {
        const imagen = document.getElementById('contenedor-img');
        imagen.innerHTML = '' //elimina todo lo que este dentro del contenedor
        
        data.forEach(item => {
            const nueImg = document.createElement('img');
            nueImg.src = item.url; // le asigno la url 
            nueImg.className = 'foto';
            imagen.appendChild(nueImg) //lo agrega dentro del container
        })
    }
    ).catch(error => (console.error('Error en la peticion', error)));
},2000);