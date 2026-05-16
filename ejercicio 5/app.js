const contBtn = document.getElementById('btn');

const div = document.createElement('div');
div.id = "container";

div.innerHTML = `
    <input id="input" type="text">
    <button id="boton">Enviar</button>
`;

contBtn.appendChild(div);

const valueBtn= document.getElementById('boton');
const input=document.getElementById('input');

valueBtn.addEventListener('click',()=>{

    fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags')
    .then(response => response.json())
    .then(data => {

        const lis = document.getElementById('listado');
        lis.innerHTML = '';
        const texto = input.value.toLowerCase();

        const filtrados = data.filter(i =>
        i.name.common.toLowerCase().includes(texto));

        filtrados.forEach(i => {
            const li = document.createElement('li');

            li.innerHTML = `
                <h3>${i.name.common}</h3>
                <p>Capital:  ${i.capital}</p>
                <p>Población: ${i.population}</p>
                <p>Continente: ${i.region}</p>
                <img src="${i.flags.png}" width="150">
            `;
            lis.appendChild(li);
        });

    })
    .catch(error =>
    console.error('Error en la petición', error));

})

