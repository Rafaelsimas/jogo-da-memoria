
const qtdCartas = perguntarQtdCartas()
const papagaios = inserirPapagaiosNoArray(qtdCartas)
renderiarNaTela(papagaios)

//perguntar quantidade de cartas
function perguntarQtdCartas(){

    let qtdCartas = parseInt(prompt('Com quantas cartas você quer jogar ?'))
    
    while(qtdCartas < 4 || qtdCartas > 16 || (qtdCartas % 2 ) === 1){
        qtdCartas = parseInt(prompt('Com quantas cartas você quer jogar ?'))
    }
    return qtdCartas
}
//inserir papagaios no array
function inserirPapagaiosNoArray(qtdCartas){
    const tipoDeCartas = ['bobross', 'explody', 'fiesta', 'metal', 'revertit', 'triplets', 'unicorn']
    
    const cartas = []
    console.log(cartas)
    
    console.log(tipoDeCartas)
    
    for(let i = 0; i < (qtdCartas/2); i++){
        const papagaio = tipoDeCartas[i]
        cartas.push(papagaio)
        cartas.push(papagaio)
    }

    cartas.sort(comparador)
    return cartas
}
//Renderizar na tela
function renderiarNaTela(cartas){
    const tabuleiro = document.querySelector(".tabuleiro");
    for(let i = 0; i < cartas.length; i++){
        tabuleiro.innerHTML += `
                <li onclick="virarCarta(this)" class="carta">
                    <div class="front -face face">
                        <img src="./assets/front.png" alt="">
                    </div>
                    <div class="back-face face">
                        <img src="./assets/${cartas[i]}parrot.gif" alt="">
                    </div>
                </li> 
        
        `;
         
    }
}

let primeiraCarta = null
let segundaCarta = null

function virarCarta(cartaClicada){

    if(cartaClicada.classList.contains('virada')){
        return
    }

    if(primeiraCarta === null){
        primeiraCarta = cartaClicada
  
    }else{
        segundaCarta = cartaClicada
        if(primeiraCarta.innerHTML === cartaClicada.innerHTML){
            resetarJogada()
        }else{
            setTimeout(desvirarCartas, 1000)
           primeiraCarta.classList.remove('virada')
        }
        }


    cartaClicada.classList.add('virada')

}

function desvirarCartas(){
    primeiraCarta.classList.remove('virada')
    segundaCarta .classList.remove('virada')
    resetarJogada()
}

function resetarJogada(){
    primeiraCarta = null;
    segundaCarta = null;
}

 function comparador(){
    return Math.random() - 0.5;
 }