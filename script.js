const faqCard = document.querySelector(".faq__card");

faqCard.addEventListener("click", function (e) {
  if (
    e.target.classList.contains("faq__btn") ||
    e.target.classList.contains("faq__question")
  ) {
    e.target
      .closest(".faq__item")
      .nextElementSibling.classList.toggle("hidden");
    e.target
      .closest(".faq__item")
      .firstElementChild.classList.toggle("faq__bold");
    e.target
      .closest(".faq__item")
      .lastElementChild.classList.toggle("faq__btn--rotate");
  }
});
