// heart count

let count = 0;
let btn = document.getElementsByClassName("heart-click");
let update = document.getElementById("nav-heart-count");
        
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    update.innerText = count;
    count++;
  };
}

// Call & Coin functions
let coins = 100;
let coinDisplay = document.getElementById("coin-count");
let callButtons = document.querySelectorAll(".call-btn");

for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function() {

    if (coins >= 20) { 
        coins -= 20; 
        coinDisplay.textContent = coins; 
        let serviceName = callButtons[i].getAttribute("data-name");
        let serviceNumber = callButtons[i].getAttribute("data-number");
        alert("Calling " + serviceName + " at " + serviceNumber);
  } else{
    alert("Not enough coins!"); 
  };
};
};