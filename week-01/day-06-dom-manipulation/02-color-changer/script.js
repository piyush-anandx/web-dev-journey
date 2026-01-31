const MainBody = document.body;
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const greenBtn = document.getElementById("green");
const randomBtn = document.getElementById("random");
const text = document.getElementById("title");

redBtn.addEventListener("click", () => {
  MainBody.style.background = "#ef4444";
  text.textContent = "Red";
  text.style.color = "White";
});
blueBtn.addEventListener("click", () => {
  MainBody.style.background = "#3b82f6";
  text.textContent = "Blue";
  text.style.color = "Black";
});
greenBtn.addEventListener("click", () => {
  MainBody.style.background = "#10b981";
  text.textContent = "Green";
  text.style.color = "White";
});
randomBtn.addEventListener("click", () => {
  MainBody.style.background =
    "linear-gradient(45deg, #f093fb 0%, #f5576c 100%)";
  text.textContent = "Random";
  text.style.color = "Black";
});
