const openbtn = document.querySelector(".togglebtn")
const closebtn = document.querySelector(".closebtn")
const side = document.querySelector(".sidebar")

openbtn.addEventListener("click", function() {
    side.classList.toggle("show-sidebar")
})

closebtn.addEventListener("click", function() {
    side.classList.remove("show-sidebar")
})