
function updateTime() {
  const now = new Date();
  document.getElementById('currentTime').textContent = `Hora atual: ${now.toLocaleTimeString()}`;
}
setInterval(updateTime, 1000);
updateTime(); 


function toggleMenu() {
  var menu = document.getElementById("navbarMenu");
  if (menu.classList.contains("show-menu")) {
    menu.classList.remove("show-menu");
  } else {
    menu.classList.add("show-menu");
  }
}
