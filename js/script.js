/*La información detallada incluye la bandera del país, la capital, 
la población y el lado de la carretera donde se circula. 
Este flotante se quedará fijo y centrado hasta que se cierre*/
/* La aplicación está diseñada con un enfoque simple y 
utiliza funciones asíncronas para manejar las solicitudes 
a la API. 
Recuerda que podrás usar fetch, Async/Await...*/


const apiUrl = 'https://restcountries.com/v3/all';
console.log(apiUrl);
const contenedorBandera = document.getElementById('countries-list');

function traerBanderas () {
    fetch(apiUrl)
    .then((response)=>{
        if(!response.ok){
            throw new Error("no se ha podido obtener resultados");
        }else {
            return response.json();
        }
        
    }).then (data =>{
        const pais = data.sort((a, b) => 
            //localeCompare: hace comparación de los string teniendo en cuenta tildes, mayúsculas y minúsuclas
            a.name.common.localeCompare(b.name.common)
        );
        pais.forEach(pais => {
            const template = document.createElement('div');
            template.classList.add('recuadroBandera');
            template.innerHTML = 
            `
            <img src="${pais.flags[0]}" class="bandera">
            <p>${pais.name.common}</p>`;
            template.addEventListener('click', ()=>{
                template.classList.add('overlay');
                template.innerHTML = `
                <img src="${pais.flags[0]}">
                <p>${pais.name.common}</p>
                <p>${pais.population}</p>
                <p>${pais.capital}</p>
                <p>${pais.side}</p>
                <button id="boton-cerrar">Cerrar</button>`
                const botonCerrar = document.getElementById('boton-cerrar');
                botonCerrar.addEventListener('click', ()=>{
                    template.classList.remove('overlay');
                })
            })
            
            contenedorBandera.appendChild(template);;
        });
    }).catch(error =>{
        console.error("no se encuentra la página"); 
    });
}

traerBanderas();

//Crear botón que traiga adelante la bandera seleccionada y contenga un
// botón para cerrarla

function clickBandera() {
    const banderas = document.querySelector('.recuadroBandera')
}

