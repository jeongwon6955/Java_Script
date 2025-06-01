const login = document.querySelector(".login")
const modal = document.querySelector(".modal")
const closebtn = document.querySelector(".close > i")

// 첫번째 로그인창 이벤트
login.addEventListener("click", function() {
    modal.classList.add("open-modal")
})

// 모델 창 닫는 이벤트 
closebtn.addEventListener("click", function() {
    modal.classList.remove("open-modal")
})

const login1 = document.querySelector(".login1")
const inputbox = document.querySelector(".modal-login > input")
const side = document.querySelector(".sidebar")
const side1 = document.querySelector(".sidebar1")
const close1btn = document.querySelector(".close1 > i")
const close2btn = document.querySelector(".close2 > i")

// 두번째 로그인창 이벤트(사이드바1,2 여는 이벤트)
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

// 두번째 사이드바 닫는 이벤트
close1btn.addEventListener("click", function() {
    side1.classList.remove("show-sidebar1")
    side.style.cssText = "none"
})

// 첫번째 사이드바 닫는 이벤트
close2btn.addEventListener("click", function() {
    side.classList.remove("show-sidebar")
})

const todo = document.querySelector(".todo")
const inputbtn = document.querySelector(".box > input")
const btn = document.querySelector(".btn")

// todolist 이벤트
btn.addEventListener("click", function() {
    const list = document.createElement("li")

    if(!inputbtn.value) {
        alert("경고!")
    }else {
        list.textContent = inputbtn.value
        console.log(inputbtn.value);
        todo.appendChild(list)
        inputbtn.value = ""
    }
})
const media = document.querySelector(".media-btn")

media.addEventListener("click", function() {
    side.classList.add  ("show-sidebar")
    side.style.cssText = "width: 500px"
})