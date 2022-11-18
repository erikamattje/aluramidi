function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play(); //selecionando um objeto de id som_tecla_pom dentro do document. O ponto após acessa as funcionalidades do resultado dessa busca do querySelector
}

//selecionando um objeto de classe tecla_pom dentro do document
//Atribui o som no clique, não tem os parenteses da função pra não executar automaticamente quando a página carrega.


/*function tocaSom(nome){
    document.querySelector(`'#som_tecla_'${nome}`).play();
}

document.querySelector('.tecla_clap').onclick = tocaSom(clap);
*/

const listaDeTeclas = document.querySelectorAll('.tecla'); //seleciona as classes 'tecla' 

let i = 0;

while ( i< listaDeTeclas.length ) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    
    tecla.onclick = function(){
        tocaSom(idAudio);
    }
    i++;

    console.log(i); 
}

