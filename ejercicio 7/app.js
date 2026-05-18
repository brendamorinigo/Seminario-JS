function generarLi(dato) { //toma el archivo y lo muestra en el html

    const lis = document.getElementById('listado'); //lugar donde voy a mostrar el contenido del arch
    lis.innerHTML = '';//vacio todo contenido html aterior que pudiera tener la seccion

    dato.forEach(item => { //recorro los elementos

        const li = document.createElement('li'); //para cada elemento creo un li
        //contenido que voy a mostrar dentro de cada li
        li.innerHTML = ` 
            <div class='container-li'>
            <h3>${item.name}</h3>
            <button class='verMas'>Ver mas</button> 
            </div>
        `;
        const btn = li.querySelector('.verMas');

        btn.addEventListener('click', () => { //si selecciona ver mas muestro la informacion. 

            li.innerHTML = `   
        <div class='container-li'>
            <h3>${item.name}</h3>
            <p>${item.hair_color}</p>
            <p>${item.skin_color}</p>
            <p>${item.eye_color}</p>
            <div class="films"></div> 
        </div>
    `;//dentro del div clase films voy a poner lass peliculas si las tien

        const filmsContainer = li.querySelector('.films'); //selecciono donde las voy a poner

            item.films.forEach(url => {//las peliculas son conjunto de url a la api, por lo tanto debo hacer una peticion a cada url y soliciar el titulo

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        filmsContainer.innerHTML += `<p>Película: ${data.title}</p>`; //si tiene peliculas las muestro dentro del li creado. uso += para no reemplazar el contenido actual del li
                    });

            });
        })
        lis.appendChild(li);
    });
}

fetch('https://swapi.info/api/people') //solicito los datos
    .then(response => response.json()) //si me responde con un archivo lo proceso
    .then(data => {

        generarLi(data);
    })
    .catch(error => //sino informo el error
        console.error('Error en la petición', error)
    );

