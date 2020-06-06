const buttonSearch = document.querySelector ("#page-home main a")
const modal = document.querySelector ("#modal")
const close = document.querySelector ("#modal .header a")
 
buttonSearch.addEventListener ("click", () => {  // Houve o evento de clique
        modal.classList.remove ("hide")
})

close.addEventListener ("click", () => {
    modal.classList.add ("hide")
})