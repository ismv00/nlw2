// Procurar o botão
document.querySelector('#add-time')
// Quando clicar no botão
.addEventListener('click', cloneField)


// executar uma ação

function cloneField(){
   // duplicar os campos
    // quais campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)// boolean: true ou false

    // Limpar os campos: que campos?

    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campo, limpar
    fields.forEach(function(field) {
        // pegar o field do momento e limpa
        field.value = ''
    })



    // colocar na página
        // onde na página?
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
    