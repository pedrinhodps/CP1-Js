alert('Bem-vindo ao sistema de biblioteca de vinhos da Vinhara Agnello!')
 
const vinhosArray = []

function adicionarVinho()
{
    const nome = window.prompt("Informe o nome do vinho a ser adicionado :")
    const tipo = window.prompt("Informe o tipo do vinho (Exemplo: Seco, Tinto, Suave, etc.) :")
    const safra = window.prompt("Informe a safra de seu vinho :")
    const preco = window.prompt("Informe o preço a ser cobrado pelo vinho :")
 
 
    const vinhoObj = {
        nome: nome,
        tipo: tipo,
        safra: safra,
        preco: preco,
    }
 
    vinhosArray.push(vinhoObj)
}

const sectionList = document.createElement("section")
document.body.appendChild(sectionList)

function listarVinho()
{
    sectionList.innerHTML = ''

    for(let i = 0; i <= vinhosArray.length; i++){
        vinhoNome = 'Nome: ' + vinhosArray[i].nome

        vinhoTipo = 'Tipo: ' + vinhosArray[i].tipo

        vinhoSafra = 'Safra: ' + vinhosArray[i].safra

        vinhoPreco = 'Preço: ' + vinhosArray[i].preco

        sectionList.innerHTML += `
            <li>${vinhoNome}</li>
            <li>${vinhoTipo}</li>
            <li>${vinhoSafra}</li>
            <li>${vinhoPreco}</li>
            <hr>
        `
    }
}