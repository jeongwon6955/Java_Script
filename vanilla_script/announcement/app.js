const login = document.querySelector(".login")
const modal = document.querySelector(".modal")
const closebtn = document.querySelector(".close > i")

login.addEventListener("click", function() {
    modal.classList.add("open-modal")
})

closebtn.addEventListener("click", function() {
    modal.classList.remove("open-modal")
})

const login1 = document.querySelector(".login1")
const inputbox = document.querySelector(".modal-login > input")
const side = document.querySelector(".sidebar")
const side1 = document.querySelector(".sidebar1")
const close1btn = document.querySelector(".close1 > i")

login1.addEventListener("click", function() {

    if(inputbox.value === "choijeongwon") {
        side.classList.add("show-sidebar")
        modal.classList.remove("open-modal")
    }else if(inputbox.value === "john") {
        side1.classList.add("show-sidebar1")
        modal.classList.remove("open-modal")
    }else {
        alert("존재하지않는아이디")
    }
})

close1btn.addEventListener("click", function() {
    side1.classList.remove("show-sidebar1")
})

const todo = document.querySelector(".todo")
const inputbtn = document.querySelector(".box > input")
const btn = document.querySelector(".btn")


btn.addEventListener("click", function() {
    const list = document.createElement("li")

    if(!inputbtn.value) {
        alert("경고!")
    }else {
        list.textContent = inputbtn.value
        todo.appendChild(list)
        inputbtn.value = ""
    }
})
