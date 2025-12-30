let count = 0;
let btn = document.getElementsByClassName("heart-click");
let update = document.getElementById("nav-heart-count");
        
for (let i = 0; i < btn.length; i++) {
  btn[i].onclick = function () {
    update.innerText = count;
    count++;
  };
}