console.clear();

const cards = document.querySelectorAll('[data-js="button-bookmark"]'); //step 1

const answButton = document.querySelectorAll('[data-js="button-answer"]'); //step 2
/* qSelAll - damit alle Karten ausgew. werden */
const answText = document.querySelectorAll('[data-js="text-answ"]');

/*step1*/
cards.forEach((card) => {
  const bookmarkButton = card.querySelector('[data-js="bookmarkblack"]');
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
    console.log("jj");
  });
});

answButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    const answText = event.target.parentNode.querySelector(
      '[data-js="text-answ"]'
    );
    answText.classList.toggle("card__answer--active");

    if (event.target.textContent === "Hide answer") {
      event.target.textContent = "Show answer";
    } else {
      event.target.textContent = "Hide answer";
    }
  });
}); /*

/*step2*/
answButton.forEach((answButton) => {
  answButton.addEventListener("click", () => {
    console.log("works");
    const answText = event.target.parentnode.querySelector(
      '[data-js="text-answ"]'
    );
    answText.classList.toggle("card__answer--active");

    if (answButton.textContent == "Hide answer") {
      answButton.textContent = "Show answer";
    } else {
      answButton.textContent = "Hide answer";
    }
  });
});
*/

/* --Step 2

Warum kann ich nicht:
---------------------
const answText = document.classSelector("card__answer");

---------------------

answ.forEach((answ) => {
  const answButton = answ.querySelector('[data-js="hidden"]');

  answButton.addEventListener("click", () => {
    console.log("sdf");
  });
});
*/
