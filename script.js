const closeButton = document.getElementById("closeButton");
const welcomeWrapper = document.getElementById("welcomeWrapper");
const errorSound = document.getElementById("errorSound");  

closeButton.addEventListener("click", () => {
  welcomeWrapper.style.display = "none";
  welcomeWrapperEmpty.style.display = "inline-block";
});


setTimeout(() => {
  errorBox.style.display = "block";
  errorSound.play(); 
}, 20000);

const closeButtonError = document.getElementById("closeButtonError");
const errorBox = document.getElementById("errorBox");

closeButtonError.addEventListener("click", () => {
  errorBox.style.display = "none";

  
  setTimeout(() => {
    errorBox.style.display = "block";
    errorSound.play();  
  }, 2000);
});

function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  const time = hours + ":" + minutes;
  document.getElementById("clock").textContent = time;
}

setInterval(updateClock, 1000);
updateClock();
