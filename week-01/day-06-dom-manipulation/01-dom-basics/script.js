const changeTextBtn = document.getElementById("changeText");
const text = document.getElementById("text");
changeTextBtn.addEventListener("click", () => {
  text.textContent = "Text Changed!";
});

const changeColorBtn = document.getElementById("changeColor");
changeColorBtn.addEventListener("click", () => {
  text.style.color = "red";
});
const hideShowBtn = document.getElementById("hideShow");
hideShowBtn.addEventListener("click", () => {
  text.style.display === "none"
    ? (text.style.display = "block")
    : (text.style.display = "none");
});
