const mario = document.querySelector('.mario'); // Seleciona o elemento com a classe 'mario' (presumivelmente uma imagem do Mario)
const pipe = document.querySelector('.pipe'); // Seleciona o elemento com a classe 'pipe' (presumivelmente um obstáculo)

// Função para fazer o Mario pular
const jump = () => {
    mario.classList.add('jump'); // Adiciona a classe 'jump' ao elemento do Mario
    setTimeout(()=> {
        mario.classList.remove('jump'); // Remove a classe 'jump' após 500 milissegundos
    }, 500);
}

// Loop principal do jogo, verifica constantemente as posições do Mario e do cano
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft; // Posição horizontal do cano em relação ao seu contêiner
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', ''); // Posição vertical do Mario

    console.log(marioPosition); // Mostra a posição do Mario no console (para debug)

    // Verifica se o Mario colidiu com o cano
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none"; // Remove a animação do cano
        pipe.style.left = `${pipePosition}px`; // Mantém o cano na posição de colisão

        mario.style.animation = "none"; // Remove a animação do Mario
        mario.style.bottom = `${marioPosition}px`; // Mantém o Mario na posição de colisão

        mario.src = './images/game-over.png'; // Altera a imagem do Mario para indicar o fim do jogo
        mario.style.width = '75px'; // Define a largura da imagem do Mario
        mario.style.marginLeft = '50px'; // Define a margem esquerda da imagem do Mario

        clearInterval(loop); // Para o loop principal do jogo
    }
}, 10); // Verifica a cada 10 milissegundos

// Adiciona um evento de escuta para o pressionamento da tecla, que aciona a função de pulo do Mario
document.addEventListener('keydown', jump);
