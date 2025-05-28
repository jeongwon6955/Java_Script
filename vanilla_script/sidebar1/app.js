const openbtn = document.querySelector(".togglebtn")
const closebtn = document.querySelector(".closebtn")
const side = document.querySelector(".sidebar")

openbtn.addEventListener("click", function() {
    // openbtn에 show-sidebar 클래스가 있는 확인한다.
    // 있다면 remove
    // 없다면 add
   // console.log("what val?", openbtn.className.contains("show-sidebar"))
    console.log("what classname?", openbtn.className)
    if(side.classList.contains("show-sidebar")) {
        side.classlist.remove("show-sidebar")
        console.log("contain true");
    } else {
        side.classlist.add("show-sidebar")
    }

    // if문 작성법 검색색
})

closebtn.addEventListener("click", function() {
    side.classList.remove("show-sidebar")
})