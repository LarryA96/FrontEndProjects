// Select the element from the DOM
const newQuote = document.querySelector("#new-quote");
const text = document.querySelector("#text");
const author = document.querySelector("#author");

// Attach the click event listener
newQuote.addEventListener("click", () => {
  text.innerHTML = "We did it Gravy!";
});
