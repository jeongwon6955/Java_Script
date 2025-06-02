let currentIndex = 0
const slide = document.querySelectorAll(".slide")
const slides = document.querySelector(".slides")
let total = slide.length

let direction = 1

function showNextSlide() {
    slides.style.transform = `translateX(-${currentIndex * 600}px)`

    currentIndex += direction
    
    if(currentIndex === total -1) {
        direction = -1
    }else if(currentIndex === 0) {
        direction = 1
    }
}

showNextSlide()

let autoSlide = setInterval(showNextSlide, 2000)

// 🎯 버튼 기능 추가
document.getElementById("prev").addEventListener("click", () => {
    clearInterval(autoSlide) // 자동 슬라이드 멈춤
    currentIndex = Math.max(0, currentIndex - 1)
    slides.style.transform = `translateX(-${currentIndex * 600}px)`
    autoSlide = setInterval(showNextSlide, 2000) // 다시 시작
})

document.getElementById("next").addEventListener("click", () => {
    clearInterval(autoSlide)
    currentIndex = Math.min(total - 1, currentIndex + 1)
    slides.style.transform = `translateX(-${currentIndex * 600}px)`
    autoSlide = setInterval(showNextSlide, 2000)
})