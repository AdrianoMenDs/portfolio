function updateTime() {
    const now = new Date();
    document.getElementById('currentTime').textContent = `Hora atual: ${now.toLocaleTimeString()}`;
  }
  setInterval(updateTime, 1000);
  updateTime(); 