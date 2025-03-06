let listaAmigos = [];

function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value;
    
    if(nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    }else{
        
        listaAmigos.push(nombreAmigo);
        document.querySelector('#amigo').value = '';
        mostrarAmigo();
    }
    
}

function mostrarAmigo(){
    let lista = document.querySelector('#listaAmigos');
    lista.innerHTML =  '';
    
    for (let indice = 0; indice < listaAmigos.length; indice++) {
        const nombreDeAmigo = listaAmigos[indice];
        const elementoLista = document.createElement('li');
        elementoLista.innerText = nombreDeAmigo;
        lista.appendChild(elementoLista);
    }
}