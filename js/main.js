"use strict";

const questionClick = document.querySelectorAll(".js-collapsible");
const showAnswer = document.querySelectorAll(".js-hidden");
const icons = document.querySelectorAll(".js-icon");

//Recorremos todas las preguntas
questionClick.forEach((question, i) => {
  //Asignamos un click a cada pregunta
  questionClick[i].addEventListener("click", () => {
    //Recorremos todas las respuestas
    showAnswer.forEach((answer, i) => {
      //Añadimos la clase hidden a todas las respuestas
      questionClick[i].classList.remove("question__current");
      icons[i].classList.remove("arrow__reverse");
      showAnswer[i].classList.add("hidden");
    });

    //Quitamos la clase hidden a la respuesta que tenga la misma posición que la pregunta
    questionClick[i].classList.add("question__current");
    icons[i].classList.add("arrow__reverse");
    showAnswer[i].classList.remove("hidden");
  });
});
/*
if (showAnswer.classList == "hidden") {
  showAnswer.classList.remove("hidden");
} else {
  showAnswer.classList.add("hidden");
}
*/
