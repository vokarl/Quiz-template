console.clear();

const cards = document.querySelectorAll('[data-js="button-bookmark"]'); //step 1

const answButton = document.querySelector('[data-js="button-answer"]'); //step 2
/* qSelAll - damit alle Karten ausgew. werden */
const answText = document.querySelector('[data-js="text-answ"]');

/*step1*/
cards.forEach((card) => {
  const bookmarkButton = card.querySelector('[data-js="bookmarkblack"]');
  bookmarkButton.addEventListener("click", () => {
    bookmarkButton.classList.toggle("bookmark--active");
    console.log("jj");
  });
});

/*step2*/

/*answButton.forEach((answButton) => {  });        */

answButton.addEventListener("click", () => {
  console.log("works");

  answText.classList.toggle("card__answer--active");

  if (answButton.textContent == "Hide answer") {
    answButton.textContent = "Show answer";
  } else {
    answButton.textContent = "Hide answer";
  }
});

/* just first answButton works---- but not when impl. following:

- before the addEvLi: answButton.forEach((answButton) => {  }); 
- in the addEvLi
const answText = event.target.parentnode.querySelector(
      '[data-js="text-answ"]'
    );

    ++ querySelAll in the const above?????








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
