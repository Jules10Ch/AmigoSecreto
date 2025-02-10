
let amigos = [];

/*function inicio(){
    if(amigos === null){
        return
    }else{
        agregarAmigo();
    }
}*/

//document.getElementById("boton").onclick = function() {(agregarAmigo)};

function agregarAmigo(){

    
    let amigo = document.getElementById("amigo").value;

    if( amigo == "" ){
        alert("Por favor inserte un nombre");
    }else{
    amigos.push(amigo)
    console.log(amigos);
    limpiarCaja();
    actualizarLista();
    }
    
}



function limpiarCaja(){
    document.querySelector("#amigo").value = "";
    
}


function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de agregar nuevos elementos
    lista.innerHTML = "";
    
    // Recorrer el array y agregar cada amigo como un elemento <li>
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
    
}

