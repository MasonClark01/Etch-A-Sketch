const container = document.querySelector(".container")
for(let i = 0; i < (16*16); i++){
    const d = document.createElement('div')
    d.classList.add("box")
    container.appendChild(d)
}