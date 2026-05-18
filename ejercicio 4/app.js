console.log('Conectado ej4');

fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags')
    .then(response => response.json())
    .then(data => {
        const lis = document.getElementById('listado');
        lis.innerHTML = '';

        data.forEach(item => {
            const li = document.createElement('li');

            li.innerHTML = `
                <h3>${item.name.common}</h3>
                <p><strong>Capital:</strong> ${item.capital}</p>
                <p><strong>Población:</strong> ${item.population}</p>
                <p><strong>Continente:</strong> ${item.region}</p>
                <img src="${item.flags.png}" width="150">
            `;
            lis.appendChild(li);
        });

    })
    .catch(error =>
        console.error('Error en la petición', error));