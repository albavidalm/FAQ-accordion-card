"use strict";

const item = document.querySelectorAll(".js-item");
const question = document.querySelectorAll(".js-collapsible");
const icons = document.querySelectorAll(".js-icon");

question.forEach((everyquestion, i) => {
  question[i].addEventListener("click", () => {
    if (!item[i].classList.contains("active")) {
      item.forEach((everyitem, i) => {
        item[i].classList.remove("active");
        question[i].classList.remove("faq__question--current");
        icons[i].classList.remove("arrow__reverse");
      });
      item[i].classList.add("active");
      question[i].classList.add("faq__question--current");
      icons[i].classList.add("arrow__reverse");
    } else {
      item[i].classList.remove("active");
      question[i].classList.remove("faq__question--current");
      icons[i].classList.remove("arrow__reverse");
    }
  });
});
