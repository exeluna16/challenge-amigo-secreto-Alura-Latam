let listaAmigos = [];

//Toma el nombre del amigo ingresado por el usuario y lo agrega a la lista. En caso de que ya exista o no se ingrese nada se notifica al usuario. 
function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value;
    if(nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    }else if(amigoExistente(nombreAmigo)){//si el amigo ya esta en la lista ingrea por aquí
        alert('El amigo que intenta agregar ya existe en la lista');
        limpiarCampoNombreAmigo();
    }else{
        listaAmigos.push(nombreAmigo);//agrega el amigo a la lista
        limpiarCampoNombreAmigo();
        mostrarAmigo();
    }
    limpiarResultado();
}

//Muestra en la pagina uno por uno los nombres de los amigos en la lista.
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

function existenAmigos(){
    return listaAmigos.length > 0;
}

function mostarAmigoElegido(amigo){
    document.querySelector('#resultado').innerText = amigo;
}

function limpiarLista(){
    document.querySelector('#listaAmigos').innerHTML = '';
    listaAmigos = [];
}

function limpiarResultado(){
    document.querySelector('#resultado').innerText = '';
}

function amigoExistente(amigo){
    /*
        Esta función comprueba si un amigo ya se agregó a la lista
        pero no diferencia entre minusculas y mayusculas, por lo tanto se la puede mejorar
    */
    return listaAmigos.includes(amigo);
}

//Saca un número random, ese número es el indice que corresponde a un amigo.  Luego solo limpia los campos
function sortearAmigo(){
    if(existenAmigos()){
        let indiceAmigoElegido = Math.floor(Math.random() * listaAmigos.length);
        mostarAmigoElegido(listaAmigos[indiceAmigoElegido]);
        limpiarLista();
        limpiarCampoNombreAmigo();
    }else{
        alert("Debe ingresar por lo menos un amigo");
    }
}

function limpiarCampoNombreAmigo(){
    document.querySelector('#amigo').value = '';
}