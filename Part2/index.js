const idInput = getElementById("idInput")
const colorInput = getElementById("colorInput")

console.log(idInput)
console.log(colorInput)

function setCard() {
  const card = document.getElementById(idInput.value);
  card.style.color = colorInput.value;
  console.log(card);
}