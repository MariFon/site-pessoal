function MostrarCampoPesquisar() {
    let campo = document.querySelector("#campo")
    if (campo.style.display == "inline") {
        campo.style.display = "none"
    } else {
        campo.style.display = "inline"
    }
}

//objetos + array
projeto1 = {
    titulo: 'Calculadora',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de uma calculadora de média simples',
    foto: 'calculadora.PNG'
}

projeto2 = {
    titulo: 'Conversor',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de um conversor de moedas bitcoin',
    foto: 'conversor.PNG'
}

projeto3 = {
    titulo: 'Mentalista',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de um jogo de advinhação',
    foto: 'mentalista.PNG'
}

projeto4 = {
    titulo: 'Mariflix',
    descricao: 'Projeto desenvolvido utilizando javascript, html e css de uma página para ver filmes',
    foto: 'mariflix.PNG'
}

let projetos = [projeto1, projeto2, projeto3, projeto4]

let projetoAtual = 0

function ProximoProjeto(){
   if(projetoAtual < 3){
     projetoAtual++  
   }else{
       projetoAtual = 0
   }
    
    titulo = document.querySelector(".titulo-projeto")
    titulo.innerHTML = projetos[projetoAtual].titulo

    descricao= document.querySelector(".texto-corpo")
    descricao.innerHTML= projetos[projetoAtual].descricao

    imagem = document.querySelector(".foto-perfil")
    imagem.src= "imagens/" + projetos[projetoAtual].foto
}
