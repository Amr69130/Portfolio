
const closeButton = document.getElementById('closeButton');
const dialogBox = document.getElementById('dialogBox');


closeButton.addEventListener('click', () => {
  dialogBox.style.display = 'none'; 
});


function updateClock() {
  const date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const time = hours + ':' + minutes;
  document.getElementById('clock').textContent = time;
}

// PERMET DE LANCER LA FONCTION 1ER PARAMETRE 
setInterval(updateClock, 1000); 
updateClock(); 
