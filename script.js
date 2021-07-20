document.body.addEventListener('keyup', (event)=> {
    playSound( event.code.toLocaleLowerCase() );

}); //keyup: quando aperta a tecla e solta ela. //sempre que uma tecla for clicada
//vai executar essa função. 

document.querySelector('.composer button').addEventListener('click', ()=> {
    let song = document.querySelector('#input').value;

    if(song !== ''){
        let songArray = song.split(''); //vai gerar um array com cada letra da string sendo um item do array
        playComposition(songArray);
    }

});//quando der um clique ele executa a função. 
//Essa função vai saber o que foi digitado;

function playSound(sound){
    let audioElement = document.querySelector(`#s_${sound}`); //selecionou o arq de audio
    let keyElement = document.querySelector(`div[data-key="${sound}"]`); //seleciona as teclas que estão sendo tocadas

    if(audioElement) {
        audioElement.currentTime = 0; //vai pegar o ponteiro do audio e voltar pro 0.
        audioElement.play(); //essa é a função que vai tocar o som disponível
    }

    if(keyElement){
        keyElement.classList.add('active')//vai adicionar uma class específica do CSS para ativar a cor da letra que está sendo apertada
        
        setTimeout(()=> {
            keyElement.classList.remove('active'); //vai remover a class após 300 milisegundos
        }, 300);
    } 
}

function playComposition(songArray){
    let wait = 0;     //vai setar o tempo que cada um vai tocar

    for(let songItem of songArray){
        setTimeout(()=> {
            playSound(`key${songItem}`);

        }, wait);

        wait += 250; //setando as diferenças de tempo pra cada uma letra e aumentando 250 pra cada uma       
    }
} //Essa função vai tocar as letras que estiver no array. Agenda o tempo de cada uma das teclas