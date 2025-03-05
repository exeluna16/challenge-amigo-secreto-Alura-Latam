let listaAmigos = [];


function agregarAmigo(){
    let nombreAmigo = document.querySelector('#amigo').value;
    
    if(nombreAmigo == ''){
        alert('Por favor, inserte un nombre');
    }else{
        
        listaAmigos.push(nombreAmigo);
        //alert(listaAmigos);
        document.querySelector('#amigo').value = '';
        
    }
    
}