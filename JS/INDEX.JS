document.addEventListener('DOMContentLoaded', function () {
    obtenerPersonajes();
});

function crearListaDinamica(personajes) {

    /*          <tr>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                  <td><button></button></td>
                  <button type="button" class="btn">Base class</button>

                </tr>
    */
// creo todos los elementos que voy a crear dinamicamente
    const tr = document.createElement('tr');
    
    const tdNombre = document.createElement('td');
    
    tdNombre.textContent = personajes.name;
    const tdGenero = document.createElement('td');
    tdGenero.textContent = personajes.gender;
// en este td voy a guardar el boton que cree   
    const tdEstado = document.createElement('td');
    tdEstado.textContent = personajes.status;
//creo el boton
    const tdBoton = document.createElement('td');
    
//asigno los valores del boton llamando a la funcionalidad de eliminar    
    const boton =document.createElement('button');
    boton.setAttribute('type', 'button');
    boton.setAttribute('style', 'background-color: red');
    boton.setAttribute('onclick', 'eliminar(this)');
    boton.classList.add('btn');
    boton.textContent = 'Eliminar'

//hago las relaciones 
    tr.appendChild(tdNombre);
    tr.appendChild(tdGenero);
    tr.appendChild(tdEstado);
    tr.appendChild(tdBoton)
    tdBoton.appendChild(boton)

    return tr;

}

//con este funcion obtengo los datos de los personajes de la API
async function obtenerPersonajes() {
    const url = 'https://rickandmortyapi.com/api/character';

    try {
        const personajes = await fetch(url);
        const personajesJSON = await personajes.json();
        console.log(personajesJSON);
        recorrerPersonajes(personajesJSON.results)
    } catch {


    }


}

//con esta funcion recorro todos los personajes y los inserto a la lista que llame relleno
function recorrerPersonajes(personajes) {

    const relleno = document.getElementById('relleno');
   
    personajes.forEach(personajes => {

        const lista = crearListaDinamica(personajes);
      
        relleno.appendChild(lista);
        


    });

}


//creo la funcion de eliminar un elemento de la tabla, esta luego la llamo en la funcion onclick del boton
function eliminar(personajes) {
  
    let row = personajes.parentNode.parentNode;
    let table = document.getElementById('relleno'); 
    table.deleteRow(row.rowIndex);
  
  };