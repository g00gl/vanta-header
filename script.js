// Load Vanta.js NET effect
// Click "Settings" -> "JavaScript" and add these external scripts:
// 1) https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js
// 2) https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js

window.addEventListener('DOMContentLoaded', function () {
  VANTA.NET({
    el: "#hero",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0xffffff,
    backgroundColor: 0x000000,
    points: 10.00,
    maxDistance: 20.00,
    spacing: 15.00
  });
});
