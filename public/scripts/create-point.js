// DIA 2
function populateUFs () {
        const ufSelect = document.querySelector ("select[name=uf]")
        
        fetch ("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
        .then ( res => res.json () )
        .then ( states => {

            for ( const state of states ) {
                ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
            } 
    } )
}

    populateUFs ()

    function getCities (){
        const citySelect = document.querySelector ("select[name=city]")  // ou ("[name=city]")
        const stateInput = document.querySelector ("input[name=state]")  // ou ("[name=state]")

        const ufValue = event.target.value  // event.target é o select
        // mudança da aparição no http
        const indexOfSelectedState = event.target.selectedIndex
        stateInput.value = event.target.options [indexOfSelectedState].text
        
        const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

        citySelect.innerHTML = "<option value>Selecione a Cidade</option>"
        citySelect.disabled = true
       
        fetch (url)
        .then ( res => res.json () )
        .then ( cities => {
            
            for ( const city of cities ) {
                citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
            }
            
            citySelect.disabled = false    // Habilita para selecionar a caixa da Cidade
        } )
    }


    document
        .querySelector ("select[name=uf]")
        .addEventListener ("change",  getCities)
// DIA 2

// DIA 3
// Ítens de coleta
// pegar todos os li's

    const itemsToCollect = document.querySelectorAll (".items-grid li")
    
    for (const item of itemsToCollect) {
        item.addEventListener("click", handleSelectedItem)
    }

     
    // atualizar o campo escondido com os ítens selecionados.
    const collectedItems = document.querySelector ("input[name=items]")

    // verificação de ítens selecionados
    let selectedItems = []

    function handleSelectedItem (event) {
        const itemLi = event.target

            // Add ou remove uma classe c javascript, toggle -> adiciona ou remove
        itemLi.classList.toggle ("selected")

        const itemId = itemLi.dataset.id

    // verificar se existem ítens selecionados, se sim
    // pegar os ítens selecionados.

        // forma simplificada
        // const alreadySelected = selectedItems.findIndex (item => item == itemId)  ou 
        // const alreadySelected = selectedItems.findIndex (item => {
        //     return item == itemId
        // })

        const alreadySelected = selectedItems.findIndex ( item => {
            const itemFound = item == itemId  // true ou false
            return itemFound
        })

        // se ja estiver selecionado,
        if ( alreadySelected >= 0 ) {  // ou != -1 
            //tirar da seleção.
            const filteredItems = selectedItems.filter ( item => {
                const itemIsDifferent = item != itemId // false
                return itemIsDifferent
            })

            selectedItems = filteredItems
        } else {
            // se não estiver selecionado,
            // adicionar à seleção.
            selectedItems.push (itemId)
        }
        // atualizar o campo escondido com os ítens selecionados.
        collectedItems.value = selectedItems
}

