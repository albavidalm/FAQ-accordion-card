"use strict";

const item = document.querySelectorAll(".js-item");
const question = document.querySelectorAll(".js-collapsible");
const icons = document.querySelectorAll(".js-icon");

//Recorremos todas las preguntas
question.forEach((everyquestion, i) => {
  //Asignamos un click a cada pregunta
  question[i].addEventListener("click", () => {
    //Recorremos todos los items
    item.forEach((everyitem, i) => {
      //Quitamos las clases
      item[i].classList.remove("active");
      question[i].classList.remove("faq__question--current");
      icons[i].classList.remove("arrow__reverse");
    });
    //Al hacer click añadimos estas clases
    item[i].classList.add("active");
    question[i].classList.add("faq__question--current");
    icons[i].classList.add("arrow__reverse");
  });
});
