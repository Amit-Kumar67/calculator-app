const display = document.querySelector("#display");
const calcBtn = document.querySelectorAll("input[type='button']");

let screenValue = "";

calcBtn.forEach((elem) => {
  elem.addEventListener("click", (e) => {
    let value = e.target.value.toString();

    switch (value) {
      case "1":
        screenValue += value;
        break;

      case "2":
        screenValue += value;
        break;

      case "3":
        screenValue += value;
        break;
      case "4":
        screenValue += value;
        break;

      case "5":
        screenValue += value;
        break;
      case "6":
        screenValue += value;
        break;

      case "7":
        screenValue += value;
        break;
      case "8":
        screenValue += value;
        break;
      case "9":
        screenValue += value;
        break;
      case "0":
        screenValue += value;
        break;
      case ".":
        screenValue += value;
        break;

      case "+":
        screenValue += value;
        break;

      case "-":
        screenValue += value;
        break;

      case "X":
        value = '*';
        screenValue += value;
        break;

      case "/":
        screenValue += value;
        break;

      case "=":
        screenValue = eval(screenValue);
        break;

      case "RESET":
        screenValue = "";
        break;

      case "DEL":
        screenValue = screenValue.substr(0,(screenValue.length-1));
        break;

      default:
        break;
    }

    display.value = screenValue;
  });
});


const theme = localStorage.getItem("theme");

window.addEventListener("load", () => {
  if (theme === null) {
    html.classList.add("theme1")

  } else {
    if (theme === "theme2") {
      html.classList.add("theme2");
    } else {
        if (theme === "theme3") {
            html.classList.add("theme3");
        } else{ 
            html.classList.add("theme1");
        }
    }
  }
})

const radio = document.querySelectorAll("input[type='radio']");
const html =document.querySelector("html")

radio.forEach((elem) => {
    elem.addEventListener("change",(e)=>{
        const themeValue = e.target.value
        html.className = themeValue
        localStorage.setItem("theme", themeValue);
    })
});
