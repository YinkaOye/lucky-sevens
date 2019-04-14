//Lucky Sevens
function play() {
  var money= document.getElementById("starter").value;
  var maxMoney = document.getElementById("starter").value;
  var maxMoneyRoll = 0;
  var i = 0;
  if (money > 0) {
    document.getElementById("startingBet").innerText = document.getElementById("starter").value;

    while (money > 0) {
      if((rollDice() +rollDice()) === 7) {
          money += 4;
          i++;
          if(money > maxMoney) {
            maxMoney = money;
            maxMoneyRoll = i;
          }
      }
      else {
        money -= 1;
        i++;
      }
    }

    document.getElementById("totalRolls").innerText = i;
    document.getElementById("highestAmount").innerText = maxMoney;
    document.getElementById("highestRoll").innerText = maxMoneyRoll;
    document.getElementById("results").style.display = "block";
  }
  else {
    alert("Please enter a number greater than 0")
  }
}

//Randomly returns a number between 1 and 6
function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}
