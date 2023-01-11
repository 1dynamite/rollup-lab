import "../public/style.scss";
import Icon from "../public/tennis-ball.jpg";

const component = () => {
  const element = document.createElement("div");

  element.innerHTML = "hello webpack";
  element.classList.add("hello");

  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

  return element;
};

document.body.appendChild(component());
