let profesores=[

{
    nombre:'Mariano',
    apellido:'Gonzales',
    cargo:'Profesor',
    experiencia:'5 años'
},
{
    nombre:'Ana',
    apellido:'Martinez',
    cargo:'Tutora',
    experiencia:'1 año'

}
,
{
    nombre:'Camila',
    apellido:'Baliani',
    cargo:'Profesora',
    experiencia:'7 años'

},
{
    nombre:'Oscar',
    apellido:'Ramirez',
    cargo:'Tutor',
    experiencia:'6 meses'

},

{
    nombre:'Brian',
    apellido:'Echarren',
    cargo:'Tutor',
    experiencia:'4 meses'

}

]


    for (let i = 0; i < profesores.length; i++) {
        let capturandoTabla=document.querySelector('table')

        let creandoTR=document.createElement('tr')

        capturandoTabla.appendChild(creandoTR)
        

        let creandoTDNombre=document.createElement('td')
        creandoTR.appendChild(creandoTDNombre)

        creandoTDNombre.innerHTML=profesores[i].nombre

        let creandoTDApellido = document.createElement('td')
        creandoTDApellido.innerHTML=profesores[i].apellido
        creandoTR.appendChild(creandoTDApellido)

        let creandoTDCargo=document.createElement('td')
        creandoTDCargo.innerHTML=profesores[i].cargo
        creandoTR.appendChild(creandoTDCargo)

        let creandoTDExperiencia=document.createElement('td')
        creandoTDExperiencia.innerHTML=profesores[i].experiencia
        creandoTR.appendChild(creandoTDExperiencia)

    
    }
