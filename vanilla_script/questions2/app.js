const questions = document.querySelectorAll(".question");
//console.log(questions)

questions.forEach(function(question) {
   const btn = question.querySelector(".btn");

   btn.addEventListener("click", function() {

        questions.forEach(function(item) {
            if(item !== question) {
                item.classList.remove("show-answer");
            };

            question.classList.toggle("show-answer");
        });
    });
});