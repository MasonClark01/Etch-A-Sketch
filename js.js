let rainbowMode = false
const container = document.querySelector(".container")
const reset = document.querySelector(".reset")
const rainbow = document.querySelector(".rainbow")
const gridSlider = document.querySelector(".gridSlider")


function gridSizer(size){
    container.innerHTML = ""
    for(let i = 0; i < ((size)*(size)); i++){
        const d = document.createElement('div')
        d.classList.add("box")
        d.addEventListener("mouseleave", function (e){
            if(e.target.classList.contains("active")){
                return
            }
            e.target.style.backgroundColor = selectColor()
            e.target.classList.add("active")
        })
        container.appendChild(d)
    }
    container.setAttribute("style", "grid-template-rows: repeat(" + size + ", 1fr); grid-template-columns: repeat(" + size + ", 1fr);");
    console.log(container.style.gridTemplateColumns)
    console.log(container.style.gridTemplateRows)
    document.getElementById("gridSize").innerHTML = "Grid Size: " + size + "x" + size;
}
let gridBoxes = document.getElementsByClassName("box")

function clearBoxes(){
    for(gridBox in gridBoxes){
        if(gridBoxes[gridBox]?.classList){
            if(gridBoxes[gridBox].classList.contains("active")){
                gridBoxes[gridBox].style.backgroundColor = "white";
                gridBoxes[gridBox].classList.remove("active")
            }
        }
    }
}

function rainbowToggle(){
    rainbowMode = !rainbowMode
    if(rainbowMode === true){
        document.getElementById("rainbowID").innerHTML = "Rainbow Mode -On"
    }
    else{
        document.getElementById("rainbowID").innerHTML = "Rainbow Mode -Off"
    }
}

function selectColor(){
    if (rainbowMode === false){
        return("rgb(0, 0, 0)")
    }
    else{
        let one = Math.floor(Math.random() * 255)
        let two = Math.floor(Math.random() * 255)
        let three = Math.floor(Math.random() * 255)
        let out = "rgb"
        return (out.concat("(", one, ",", two, ",", three))
    }
}

gridSlider.addEventListener("oninput", gridSizer(gridSlider.value))
rainbow.addEventListener("click", rainbowToggle)
reset.addEventListener("click", clearBoxes)