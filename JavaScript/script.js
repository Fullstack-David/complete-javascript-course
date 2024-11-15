const app = document.getElementById("app");
const inputChangeTitle = document.getElementById("change-title");
const buttonChangeTitle = document.getElementById("change-Btn");

const changeTitleName = () => {
  const newTitle = inputChangeTitle.value;

  //byter plats
  app.innerText = newTitle;
  inputChangeTitle.value = "";
};

buttonChangeTitle.addEventListener("click", changeTitleName);
