var aluno = [], nota1 = [], nota2 = [], media = [], resultado = [], mensao = [];
var valorCampo1 = [], valorCampo2 = [], valorCampo3 = [], c = 0, i = 1, j = 1, linha = [];

var adicionar = document.getElementById('adicionar')
adicionar.addEventListener('click', adicionarAluno)

var enviar = document.getElementById('enviar')
enviar.addEventListener('click', enviarNotas)

function adicionarAluno() {
    valorCampo1[c] = document.querySelector('[name="aluno"]')
    valorCampo2[c] = document.querySelector('[name="nota1"]')
    valorCampo3[c] = document.querySelector('[name="nota2"]')

    if (valorCampo1[c].value === '') {
        alert('Para cadastrar as notas, o nome do aluno não pode estar vazio.')
    } else {
        aluno[c] = String(valorCampo1[c].value).toUpperCase()
        nota1[c] = Number(valorCampo2[c].value).toFixed(2)
        nota2[c] = Number(valorCampo3[c].value).toFixed(2)
        media[c] = (nota1[c] * 0.4) + (nota2[c] * 0.6)
        media[c] = media[c].toFixed(2)
        if (media[c] >= 5) {
            resultado[c] = 'APROVADO'
        } else if (media[c] >= 3 && media[c] < 5) {
            resultado[c] = 'RECUPERAÇÃO'
        } else {
            resultado[c] = 'REPROVADO'
        }
        if (media[c] >= 9) {
            mensao[c] = 'SS'            
        } else if (media[c] >= 7 && media[c] < 9) {
            mensao[c] = 'MS'
        } else if (media[c] >= 5 && media[c] < 7) {
            mensao[c] = 'MM'
        } else if (media[c] >= 3 && media[c] < 5) {
            mensao[c] = 'MI'
        } else if (media[c] > 0 && media[c] < 3) {
            mensao[c] = 'II'
        } else {
            mensao[c] = 'SR'
        }
    
        // console.log(aluno)
        // console.log(nota1)
        // console.log(nota2)
        // console.log(media)
        // console.log(resultado)
    
        document.getElementById('campo1').value = '' //limpa o formulário
        document.getElementById('campo2').value = ''
        document.getElementById('campo3').value = ''
        
        i++
        count = document.querySelector('fieldset')
        count.innerText = i + 'º'
    
        c++
    }
}

function enviarNotas() {
    if (aluno.length == 0) {
        alert('Nenhum aluno foi cadastrado!\nCadastre ao menos um aluno para aparecer o resultado.')
    } else {
        let container = document.querySelector('body') // acessa a o body do html
        let sectionResultado = document.createElement('section') // cria um novo elemento de tag section
        sectionResultado.classList.add('resultado') // adiciona a classe "resultado" dentro da tag section
        container.appendChild(sectionResultado) // adiciona a nova section dentro do body
    
        let tabela = document.createElement('table')
        let cabeca = document.createElement('thead')
        let corpo = document.createElement('tbody')
        let linhaH = document.createElement('tr')
        let col0 = document.createElement('th')
        col0.innerText = '#'
        let col1 = document.createElement('th')
        col1.innerText = 'Aluno'
        let col2 = document.createElement('th')
        col2.innerText = '1º Nota'
        let col3 = document.createElement('th')
        col3.innerText = '2º Nota'
        let col4 = document.createElement('th')
        col4.innerText = 'Média'
        let col5 = document.createElement('th')
        col5.innerText = 'Resultado'
        let col6 = document.createElement('th')
        col6.innerText = 'Mensão'
    
        for (let c = 0; c < aluno.length; c++){
            linha[c] = document.createElement('tr')
            coluna0 = document.createElement('td')
            coluna0.classList.add('colunasP')
            coluna1 = document.createElement('td')
            coluna1.classList.add('colunasG')
            coluna2 = document.createElement('td')
            coluna2.classList.add('colunasP')
            coluna3 = document.createElement('td')
            coluna3.classList.add('colunasP')
            coluna4 = document.createElement('td')
            coluna4.classList.add('colunasP')
            coluna5 = document.createElement('td')
            coluna5.classList.add('colunasM')
            coluna6 = document.createElement('td')
            coluna6.classList.add('colunasP')
            coluna0.innerText = j + 'º'
            coluna1.innerText = aluno[c]
            coluna2.innerText = nota1[c]
            coluna3.innerText = nota2[c]
            coluna4.innerText = media[c]
            coluna5.innerText = resultado[c]
            coluna6.innerText = mensao[c]
            linha[c].appendChild(coluna0)
            linha[c].appendChild(coluna1)
            linha[c].appendChild(coluna2)
            linha[c].appendChild(coluna3)
            linha[c].appendChild(coluna4)
            linha[c].appendChild(coluna5)
            linha[c].appendChild(coluna6)
            corpo.appendChild(linha[c])
            j++
        }

        linhaH.appendChild(col0)
        linhaH.appendChild(col1)
        linhaH.appendChild(col2)
        linhaH.appendChild(col3)
        linhaH.appendChild(col4)
        linhaH.appendChild(col5)
        linhaH.appendChild(col6)
        cabeca.appendChild(linhaH)
        tabela.appendChild(cabeca)
        tabela.appendChild(corpo)
        sectionResultado.appendChild(tabela)
    }
}