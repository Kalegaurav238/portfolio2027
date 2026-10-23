/**
 * ==============================================================================
 * INTERACTIVE AGENT GRAPH / CIRCUIT CANVAS BACKGROUND
 * ==============================================================================
 * Visualizes agent state transitions and physical hardware node networks.
 * Fully interactive with pointer proximity, respects prefers-reduced-motion.
 * ==============================================================================
 */

export function initCanvasGraph() {
  const canvas = document.getElementById('canvas-graph');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  // Check prefers-reduced-motion
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    canvas.style.display = 'none';
    return;
  }

  let animationFrameId;

  mediaQuery.addEventListener('change', (e) => {
    if (e.matches) {
      canvas.style.display = 'none';
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    } else {
      canvas.style.display = 'block';
      animate();
    }
  });

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  const particles = [];
  const particleCount = Math.min(Math.floor((width * height) / 18000), 65);
  const maxDistance = 140;

  const mouse = {
    x: null,
    y: null,
    radius: 120
  };

  window.addEventListener('pointermove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('pointerleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize, { passive: true });

  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.6;
      this.vy = (Math.random() - 0.5) * 0.6;
      this.radius = Math.random() * 2 + 1.2;
      // 80% cyan (AI/Agents), 20% amber (Hardware/Atoms)
      this.isAmber = Math.random() > 0.8;
      this.color = this.isAmber ? 'rgba(245, 158, 11, ' : 'rgba(0, 240, 255, ';
      this.baseAlpha = Math.random() * 0.4 + 0.3;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse gentle repulsion
      if (mouse.x !== null && mouse.y !== null) {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.hypot(dx, dy);
        if (dist < mouse.radius) {
          const force = (mouse.radius - dist) / mouse.radius;
          this.x -= (dx / dist) * force * 1.5;
          this.y -= (dy / dist) * force * 1.5;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color + this.baseAlpha + ')';
      ctx.fill();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connecting edges
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < maxDistance) {
          const alpha = (1 - dist / maxDistance) * 0.22;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          // Highlight connection color
          ctx.strokeStyle = particles[i].isAmber || particles[j].isAmber 
            ? `rgba(245, 158, 11, ${alpha})`
            : `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.stroke();
        }
      }
    }

    // Update and draw nodes
    particles.forEach((p) => {
      p.update();
      p.draw();
    });

    animationFrameId = requestAnimationFrame(animate);
  }

  animate();

  return () => {
    cancelAnimationFrame(animationFrameId);
    window.removeEventListener('resize', resize);
  };
}
