// SHAPE
// collect the elements using querySelector
let shape = document.querySelector(".shapeDiv")
let btnsquare = document.querySelector(".btnsquare")
let btnrectangle = document.querySelector(".btnrectangle")
let btncircle = document.querySelector(".btncircle")
let displayshape = document.querySelector(".shapeDiv p")

// add events to buttons

btnsquare.addEventListener("click", function(){
    shape.className = "square"
    displayshape.textContent="square".toUpperCase()
})

btnrectangle.addEventListener("click", function(){
    shape.className = "rectangle"
    displayshape.textContent="rectangle".toUpperCase()
})

btncircle.addEventListener("click", function(){
    shape.className = "circle"
    displayshape.textContent="circle".toUpperCase()
})

//Dropdown Menu
//collect the elements

let menubtn = document.querySelector(".menubtn")
let collapsemenu = document.querySelector(".collapsemenu")

//add click event to open collapse menu

menubtn.addEventListener("click", function(){
    collapsemenu.classList.toggle("closeToOpen") //only takes the common style between collapsemenu and closeToOpen which is the dislay none/block
})

//Modal Window
//collect the elements

let card = document.querySelector(".card")
let modalwindow = document.querySelector(".modalwindow")
let closemodal = document.querySelector(".closemodal")

//add click event to open the modal window

card.addEventListener("click", function(){
    modalwindow.style.display="block"
})

//close modal window by clicking on X

closemodal.addEventListener("click", function(){
    modalwindow.style.display="none"
})


//close modal window when the user clicks anywhere on the modal screen

window.addEventListener("click", function(event){
    if(event.target == modalwindow){
        modalwindow.style.display="none"
    }
})



// btnsquare.addEventListener("click", function(){
//     shape.className = "square"
//     document.querySelector(".square p").textContent="SQUARE"
// })

// btnrectangle.addEventListener("click", function(){
//     shape.className = "rectangle"
//     document.querySelector(".rectangle p").textContent="RECTANGLE"
// })

// btncircle.addEventListener("click", function(){
//     shape.className = "circle"
//     document.querySelector(".circle p").textContent="CIRCLE"
// })























