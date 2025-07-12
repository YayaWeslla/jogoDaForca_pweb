/*1. O programa escolhe uma palavra secreta de uma lista(crie uma lista com no minimo 20 palavras). A cada rodada o computador escolhe uma palavra aleatória. 
    2. O jogador tenta adivinhar a palavra, letra por letra. 
    3. A cada erro, uma parte do "boneco" da forca é desenhada (no nosso caso, apenas contamos os erros).
    4. A cada rodada exibe estado atual da palavra
    5. Caso o boneco fique completo informar ao usuário que ele não conseguiu
    6. Caso complete a palavra informar que o usuário conseguiu
    7. Manter no looping até que o usuário encerre a aplicação*/

function escolherPalavra() {
    const palavras = ["amora", "uva", "manga", "abacaxi","banana", "morango","caju" ,"laranja", "javascript", "programacao", "computador", "internet", "tecnologia",
        "desenvolvimento", "fóssil", "satélite", "cenário", "esfinge", "lanterna", "coral"];
    const palavraSorteada = Math.floor(Math.random() * palavras.length); //Sorteia uma palavra do vetor de palavras
    return palavras[palavraSorteada];
}

function exibirEstado(palavra, letrasCorretas) {
    return palavra.split("").map(letra => letrasCorretas.includes(letra) ? letra : "_").join(" ");
    /*.split("") // Divide a palavra em um array de letras
      .map(letra => letrasCorretas.includes(letra) ? letra : "_") // Substitui letras não adivinhadas por "_"
      .join(" "); // Junta tudo com espaço entre os caracteres */
}

function jogarForca() {
    let continua;

    do {
        alert("Bem-vind@ ao jogo da forca!\nSua missão é adivinhar qual é a palvra que o computador escolheu chutando as letras dela, a cada erro uma parte do boneco surge.\nBom jogo ;)");
        const palavraSecreta = escolherPalavra();
        const letrasCorretas = [];
        const letrasErradas = [];
        const partesBoneco = ["cabeça", "tronco", "braço esquerdo", "braço direito", "perna esquerda", "perna direita"];
        const maxErros = partesBoneco.length;
        let venceu = false;

        while (letrasErradas.length < maxErros && !venceu) {
            alert(`\nPalavra: ${exibirEstado(palavraSecreta, letrasCorretas)}`);
            alert(`Erros: ${letrasErradas.join(", ")} (${letrasErradas.length}/${maxErros})`);

            const tentativa = prompt("Digite uma letra: ").toLowerCase();

            if (tentativa.length !== 1 || !/[a-z]/.test(tentativa)) {
                alert("Por favor, insira apenas uma letra válida.");
                continue;
            }

            if (letrasCorretas.includes(tentativa) || letrasErradas.includes(tentativa)) {
                alert("Você já tentou essa letra!");
                continue;
            }

            if (palavraSecreta.includes(tentativa)) {
                letrasCorretas.push(tentativa);
                alert("Boa! Você acertou uma letra.");
            } else {
                letrasErradas.push(tentativa);
                alert(`Ops! Essa letra não está na palavra. Surgiu a parte: [${partesBoneco[letrasErradas.length - 1]}] do boneco na forca`);
            }

            if (exibirEstado(palavraSecreta, letrasCorretas).replace(/\s/g, "") === palavraSecreta) {
                venceu = true;
            }
        }

        if (venceu) {
            alert(`\nParabéns! Você adivinhou a palavra: ${palavraSecreta}`);
        } else {
            alert(`\nQue pena! Você perdeu. A palavra era: ${palavraSecreta}`);
        }

        continua = prompt("Deseja continuar jogando? (1-SIM | 2-NÃO):");
    } while (continua == 1);

    alert("Até a próxima partida!")
}

jogarForca();

/*const palavras = [
  , "software", "hardware", "algoritmo", "variavel",
  "constante", "funcoes", "sintaxe", "framework", "biblioteca",
  "aplicativo", "servidor", "cliente", "navegador", "sistema"
];*/