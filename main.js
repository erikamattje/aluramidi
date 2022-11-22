function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play(); //selecionando um objeto de id som_tecla_pom dentro do document. O ponto após acessa as funcionalidades do resultado dessa busca do querySelector
}

const listaDeTeclas = document.querySelectorAll('.tecla'); //seleciona as classes 'tecla' 


for ( let i=0; i< listaDeTeclas.length; i++ ) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string
    
    tecla.onclick = function(){
        tocaSom(idAudio);

    }   
    //adicionando uma classe
    tecla.onkeydown = function(){
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }
}



  