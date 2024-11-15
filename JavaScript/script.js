const app = document.getElementById("app");
const inputChangeTitle = document.getElementById("change-title");
const buttonChangeTitle = document.getElementById("change-Btn");

const changeTitleName = () => {
  const newTitle = inputChangeTitle.value;
  app.innerText = newTitle;
  inputChangeTitle.value = "";
};

buttonChangeTitle.addEventListener("click", changeTitleName);

inputChangeTitle.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    changeTitleName();
  }
});
