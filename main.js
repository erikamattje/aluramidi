function tocaSomPom(){
    document.querySelector('#som_tecla_pom').play(); //selecionando um objeto de id som_tecla_pom dentro do document. O ponto após acessa as funcionalidades do resultado dessa busca do querySelector
}

//selecionando um objeto de classe tecla_pom dentro do document
//Atribui o som no clique, não tem os parenteses da função pra não executar automaticamente quando a página carrega.

document.querySelector('.tecla_pom').onclick = tocaSomPom; 


/*function tocaSom(nome){
    document.querySelector(`'#som_tecla_'${nome}`).play();
}

document.querySelector('.tecla_clap').onclick = tocaSom(clap);
*/

document.querySelectorAll('.tecla')

