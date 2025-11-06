// Load button click sound
const clickSound = new Audio("https://freesound.org/data/previews/522/522585_11527493-lq.mp3"); // arcade blip

document.querySelectorAll("form").forEach((form) => {
  form.addEventListener("submit", function (e) {
    clickSound.play();
    setTimeout(() => {
      alert("✅ Action successful!");
    }, 200);
  });
});

document.querySelectorAll("button").forEach(btn => {
  btn.addEventListener("mouseenter", () => {
    btn.style.filter = "brightness(1.2)";
  });
  btn.addEventListener("mouseleave", () => {
    btn.style.filter = "none";
  });
});

const canvas = document.getElementById("retroCanvas");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Create glowing particles
const particles = [];
for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    dx: (Math.random() - 0.5) * 1,
    dy: (Math.random() - 0.5) * 1,
    color: ["#0ff", "#f0f", "#ff0"][Math.floor(Math.random() * 3)]
  });
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach(p => {
    ctx.beginPath();
    ctx.fillStyle = p.color;
    ctx.shadowBlur = 15;
    ctx.shadowColor = p.color;
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();

    // Move
    p.x += p.dx;
    p.y += p.dy;

    // Bounce from edges
    if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
  });

  requestAnimationFrame(animate);
}
animate();
