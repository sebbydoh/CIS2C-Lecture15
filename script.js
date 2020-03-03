let textInput = document.getElementById("textInput");
let colorInput = document.getElementById("colorInput");
let form = document.querySelector("form");

function submitFunction(event) {
  let savedColor = colorInput.value;
  let body = document.querySelector("body");

  event.preventDefault();
  console.log(colorInput.value);
  if(colorInput.value != null){
      body.style.backgroundColor = savedColor;
  }
  localStorage.setItem("localColor", savedColor);
  let color = localStorage.getItem("localColor");
  
  alert("Hexadecimal color is " + color);

}

form.addEventListener("submit", submitFunction);
