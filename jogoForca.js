/*1. O programa escolhe uma palavra secreta de uma lista(crie uma lista com no minimo 20 palavras). A cada rodada o computador escolhe uma palavra aleatória. 
    2. O jogador tenta adivinhar a palavra, letra por letra. 
    3. A cada erro, uma parte do "boneco" da forca é desenhada (no nosso caso, apenas contamos os erros).
    4. A cada rodada exibe estado atual da palavra
    5. Caso o boneco fique completo informar ao usuário que ele não conseguiu
    6. Caso complete a palavra informar que o usuário conseguiu
    7. Manter no looping até que o usuário encerre a aplicação*/

function jogarForca(){
    let palavras = ["amora", "uva", "manga"];
    let palavraSorteada;
    let continua;
    let letra;

    //Sorteia uma palavra do vetor de palavras
    palavraSorteada = palavraSorteada.at(Math.floor(Math.random() * palavras.length))

    alert("Bem-vind@ ao jogo da forca!\nSua missão é adivinhar qual é a palvra que o computador escolheu chutando as letras dela, a cada erro uma parte do boneco surge.\nBom jogo ;)");
    
    do{
        for(let i = 0; i <= 5; i++){
            alert("Você tem até 5 tentativas antes que o boneco seja enforcado!");
            letra = prompt("Informe uma letra:");
            for(let j = 0; j <= palavraSorteada.length; j++){
                if(letra == palavraSorteada.at(j)){
                    
                }
            }

        }
        continua = prompt("Deseja continuar jogando? (1-SIM | 2-NÃO):");
    }while(continua == 1);

}

jogarForca();