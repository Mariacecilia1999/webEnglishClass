let enviar = document.getElementById('enviar')
let ocultar = document.getElementById('mensajeEnviado')
ocultar.style.display='none'

enviar.onclick = function(){ 
    let mainSumate = document.getElementById('mainSumate')
    mainSumate.style.height='60vh'

    let ocultarFormulario = document.getElementById('sumate')
    ocultarFormulario.className='claseOcultarForm'
    
    

    let capturandoDiv = document.getElementById('mensajeEnviado')
    capturandoDiv.style.display='block'
    capturandoDiv.className='claseCapturandoDiv'

    let creandoH2 = document.createElement('h2')
    creandoH2.innerHTML='Mensaje enviado'

    capturandoDiv.appendChild(creandoH2)

    let nombre = document.getElementById('nombre').value
    let apellido = document.getElementById('apellido').value

    let creandoP=document.createElement('p')
    capturandoDiv.appendChild(creandoP)
    creandoP.innerHTML=`Muchas gracias por tu mensaje ${nombre} ${apellido}`
    creandoP.className='claseParrafo'

   
    if((nombre.length < 3 && apellido.length < 3  )){
        creandoH2.innerHTML='Error al enviar mensaje'
        creandoP.innerHTML='Por favor escribe un nombre y apellido valido'
    }


    else if(nombre.length < 3 || !(isNaN(nombre))){
        creandoH2.innerHTML='Error al enviar mensaje'
        creandoP.innerHTML='Por favor escribe un nombre valido'
    }

    else if(apellido.length < 3 || !(isNaN(apellido))){
        creandoH2.innerHTML='Error al enviar mensaje'
        creandoP.innerHTML='Por favor escribe un apellido valido'
    }

}
    
