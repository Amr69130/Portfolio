
const closeButton = document.getElementById("closeButton");
const welcomeWrapper = document.getElementById("welcomeWrapper");

closeButton.addEventListener("click", () => {
  welcomeWrapper.style.display = "none";
  welcomeWrapperEmpty.style.display = "inline-block"
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
