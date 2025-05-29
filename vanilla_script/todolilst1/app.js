const openbtn = document.querySelector(".openbtn > span")
const side = document.querySelector(".sidebar")
const inputbox = document.querySelector("#inputbox")
const closebtn = document.querySelector(".close")

openbtn.addEventListener("click", function() {

    if(inputbox.value === "1111") {
        side.classList.add("show-sidebar")
    }
    else {
        alert("비밀번호가 틀렸습니다")
    }
})
closebtn.addEventListener("click", function(){
    side.classList.remove("show-sidebar")
})


const textbox = document.querySelector("#search")
const btn = document.querySelector(".btn")
const todo = document.querySelector(".todo")

btn.addEventListener("click", function() {
    const list = document.createElement("li")
    
    if(!textbox.value) {
        alert("값을 입력해주세요!")
    }
    else {
        list.textContent = textbox.value
        todo.appendChild(list)
        textbox.value = ""
    }

    list.addEventListener("click", function() {
        list.style.textDecoration = "line-through"
    })

    list.addEventListener("dblclick", function(){
        todo.removeChild(list)
    })
})
