const randomNumber = () => {
  return Math.floor(Math.random() * 6) + 1;
};

const diceRoller = document.querySelector(".dice-roller button");
const diceContainer = document.querySelector(".container-dice");
diceRoller.addEventListener("click", function () {
  diceContainer.innerHTML = "";

  // Create two dice div elements
  const diceOne = document.createElement("div");
  const diceTwo = document.createElement("div");

  // Set random numbers (between 1 and 6) for the two dice
  let oneNum = randomNumber();
  let twoNum = randomNumber();

  // Add some basic styling for the dice (optional)
  diceOne.classList.add("dice");
  diceTwo.classList.add("dice");

  // Append dice to the container
  diceContainer.appendChild(diceOne);
  diceContainer.appendChild(diceTwo);

  for (let dot = 0; dot < oneNum; dot++) {
    let dots = document.createElement("div");
    dots.classList.add("dots");
    diceOne.appendChild(dots);
  }
  for (let dot = 0; dot < twoNum; dot++) {
    let dots = document.createElement("div");
    dots.classList.add("dots");
    diceTwo.appendChild(dots);
  }
  const resultDiv = document.createElement("div");
  if (oneNum > twoNum) {
    resultDiv.innerHTML = "First player wins!";
  } else if (oneNum < twoNum) {
    resultDiv.innerHTML = "Second player wins!";
  } else {
    resultDiv.innerHTML = "Match draw!";
  }
  diceContainer.appendChild(resultDiv);
});
