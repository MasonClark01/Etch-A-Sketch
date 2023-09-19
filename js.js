let selectedColor = "rgb(0, 0, 0)"
let rainbowMode = false
const container = document.querySelector(".container")
const reset = document.querySelector(".reset")
const rainbow = document.querySelector(".rainbow")

for(let i = 0; i < (16*16); i++){
    const d = document.createElement('div')
    d.classList.add("box")
    d.addEventListener("mouseleave", function (e){
        e.target.style.backgroundColor = selectedColor
        e.target.classList.add("active")
    })
    container.appendChild(d)
}
const gridBoxes = document.getElementsByClassName("box")

function clearBoxes(){
    for(gridBox in gridBoxes){
        if(gridBoxes[gridBox]?.classList){
            if(gridBoxes[gridBox].classList.contains("active")){
                console.log(gridBox)
                gridBoxes[gridBox].style.backgroundColor = "white";
                gridBoxes[gridBox].classList.remove("active")
            }
        }
    }
}

function rainbowToggle(){
    rainbowMode = !rainbowMode
}

function selectColor(){

}

rainbow.addEventListener("click", rainbowToggle)
reset.addEventListener("click", clearBoxes)