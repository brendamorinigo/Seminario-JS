const contBtn = document.getElementById('btn');

const div = document.createElement('div');
div.id = "container";

div.innerHTML = `
    <input id="input" type="text">
    <button id="boton">Enviar</button>
`;

contBtn.appendChild(div);

const valueBtn = document.getElementById('boton');
const input = document.getElementById('input');

function generarLi(dato) {

    const lis = document.getElementById('listado');
    lis.innerHTML = '';

    dato.forEach(item => {

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
}

fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags')
    .then(response => response.json())
    .then(data => {

        generarLi(data);

        valueBtn.addEventListener('click', () => {

            const texto = input.value.toLowerCase();

            const filtrados = data.filter(i =>
                i.name.common.toLowerCase().includes(texto)
            );

            generarLi(filtrados);

        });

    })
    .catch(error =>
        console.error('Error en la petición', error)
    );




