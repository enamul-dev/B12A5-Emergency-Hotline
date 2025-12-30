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



// Call & Coin & Call history functions
let coins = 100;
let coinDisplay = document.getElementById("coin-count");
let callButtons = document.querySelectorAll(".call-btn");
let callHistory = document.getElementById("call-history");
for (let i = 0; i < callButtons.length; i++) {
  callButtons[i].onclick = function() {

    if (coins >= 20) { 
        coins -= 20; 
        coinDisplay.textContent = coins; 
        let serviceName = callButtons[i].getAttribute("data-name");
        let serviceNumber = callButtons[i].getAttribute("data-number");
        alert("Calling " + serviceName + " at " + serviceNumber);


        let li = document.createElement("li");
         li.innerHTML = `${serviceName} - ${serviceNumber}`;
         callHistory.appendChild(li);


         let clearBtn = document.getElementById("clear-history");
            clearBtn.onclick = function() {
            callHistory.innerHTML = ""; 
            };
        
  } else{
    alert("Not enough coins!"); 
  };
};
};




