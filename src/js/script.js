// Seleção de elementos 
let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#btnSortear')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

btnSortear.addEventListener('click', function() {
    // Adicionar a animação
    imgDado.classList.add('animar')
    sorteado.classList.add('aparecer')

    // tocar o efeito sonoro
    dadoRolando.play()

    // Ocultar o botão Sortear 
    btnSortear.style.display = 'none'

    // usar setTimeout para executar as açoes apos 1.75 segundos
    setTimeout(() => {
        // Armazenar numero sorteado na variavel 

        numeroSorteado = getRamdomInt(1,6)

        //definir atributo src com base no numero
        imgDado.setAttribute('src', 'src/images/' + numeroSorteado + '.png')

        //escrever no paragrafo o numero sorteador 
        sorteado.textContent = numeroSorteado

        // exibir o botão sortear
        btnSortear.style.display = 'inline-block'

        //retirar a animação 
        imgDado.classList.remove('animar')
        sorteado.classList.remove('aparecer')
    }, 1750);
})

// função que gera numero rendomico inteiro 
// incluido o minimo e o maximo 

function getRamdomInt(min, max){
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}