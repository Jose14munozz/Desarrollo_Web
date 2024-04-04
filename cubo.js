function updateClock() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    
    document.querySelector('.hour-face').textContent = hours;
    document.querySelector('.minute-face').textContent = minutes;
    document.querySelector('.second-face').textContent = seconds;
    
    const rotationDegrees = [360 / 12 * now.getHours(), 360 / 60 * now.getMinutes(), 360 / 60 * now.getSeconds()];
    const cube = document.querySelector('.cube');
    cube.style.transform = `rotateX(30deg) rotateY(90deg) rotateZ(${rotationDegrees.join('deg,')}deg)`;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
  