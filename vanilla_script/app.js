let count = 0
const value = document.querySelector(".value")
const btns = document.querySelectorAll(".box")

btns.forEach(function (box) {
    box.addEventListener("click", function (e) {
        const styles = e.currentTarget.classList
        if(styles.contains("decrased")) {
            count--
        } else if(styles.contains("incrased")) {
            count++
        } else {
            count = 0
        }

        if (count > 0) {
            value.stylescolor = "green"
        }
        if (count < 0) {
            value.stylescolor = "red"
        }
        if (count = 0) {
            value.stylescolor = "#222"
        }
        value.textContent = count
    })
})