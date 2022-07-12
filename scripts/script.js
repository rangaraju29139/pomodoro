const bodyElement = document.querySelector("body");

const changeBackgroundColor = function (bodyElement, color) {
  bodyElement.style.backgroundColor = color;
  console.log("changed color to " + color);
};

changeBackgroundColor(bodyElement, "#c42608");
