const prompt = require('prompt-sync')({sigint: true})

var aluno = [], nota1 = [], nota2 = [], media = [], mediaTurma = 0, somaMedias = 0, resultado = [], resp1 = '', resp2 = '', i = 0;
console.log('----------------------- AVALIADOR DE NOTAS -----------------------')
resp1 = prompt('Gostaria de cadastrar as notas de um aluno [S/N]? ')
resp1 = resp1.toUpperCase()
while (resp1 !== 'S' && resp1 !== 'N') {
    console.log('Resposta inválida! Por gentileza, digite: [S] para sim e [N] para não.')
    resp1 = prompt('Gostaria de cadastrar as notas de um aluno [S/N]? ')
    resp1 = resp1.toUpperCase()
    // console.clear()
}
while (resp1 === 'S' && resp2 !== 'N') {
    aluno[i] = prompt('Primeiro nome do aluno: ')
    aluno[i] = aluno[i].toUpperCase()
    nota1[i] = Number.parseFloat(prompt('Nota do 1º bimestre: ')).toFixed(2)
    nota2[i] = Number.parseFloat(prompt('Nota do 2º bimestre: ')).toFixed(2)
    media[i] = Number.parseFloat((nota1[i] * 0.4) + (nota2[i] * 0.6)).toFixed(2)
    console.log(typeof media[i])
    if (media[i] >= 5) {
        resultado[i] = 'APROVADO'
    } else if (media[i] >= 3 && media[i] < 5) {
        resultado[i] = 'RECUPERAÇÃO'
    } else {
        resultado[i] = 'REPROVADO'
    }
    somaMedias += Number.parseFloat(media[i]) //Number.parseFloat() foi necessário, pois antes estava concatenando
    i++
    // console.clear()
    resp2 = prompt('Gostaria de cadastrar um novo aluno [S/N]? ')
    resp2 = resp2.toUpperCase()
    // console.clear()
    while (resp2 !== 'S' && resp2 !== 'N') {
        console.log('Resposta inválida! Por gentileza, digite: [S] para sim e [N] para não.')
        resp2 = prompt('Gostaria de cadastrar um novo aluno [S/N]? ')
        resp2 = resp2.toUpperCase()
        // console.clear()
    }
}

mediaTurma = (somaMedias / aluno.length)

if (resp1 === 'N') {
    console.log('Tudo bem. Até a próxima!')
    console.log('------------------------------------------------------------------')
} else if (resp2 === 'N') {
    console.log('----------------------- RESULTADO DA TURMA -----------------------')
    console.log('NOME        NOTA 1B        NOTA 2B        MEDIA        RESULTADO')
    for (i = 0; i < aluno.length; i++){
        console.log(`${aluno[i]}`+ '     ' +`${nota1[i]}`+ '     ' +`${nota2[i]}`+ '     ' +`${media[i]}`+ '     ' +`${resultado[i]}`)
    }
    console.log(`Média da turma: ${mediaTurma}`)
    console.log('------------------------------------------------------------------')
    console.log('APROVADO: o aluno está aprovado e pode seguir o curso.')
    console.log('RECUPERAÇÃO: o aluno pode fazer a prova substitutiva para tentar passar.')
    console.log('REPROVADO: o aluno terá que refazer a disciplina.')
    console.log('------------------------------------------------------------------')
}

// perguntar se quer adicionar um novo aluno e suas notas
// se sim, perguntar o nome do aluno, a nota do primeiro e do segundo bimestre e fazer a média ponderada,
// 0.4 para a nota do primeiro bimestre e 0.6 para a nota do segundo
// as notas devem e o resultado final devem possuir duas casas decimais
// se a nota final foi maior ou igual a 5, então o aluno estará aprovado. Se não, estará reprovado.
// recomeçar até que a pessoa não queira cadastar mais ninguém