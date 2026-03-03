"use client";

import { useEffect, useRef } from "react";

export default function CornerParticles() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const colors = ["#FF3CAC", "#FFD200", "#21D190", "#784BA0" , "#2B86C5", "#F7971E"];

    const particles = [];

    function createParticle(x, y) {
      return {
        x,
        y,
        size: Math.random() * 6 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 6,
        speedY: (Math.random() - 0.5) * 6,
        life: 100,
      };
    }

    function emitCorners() {
      particles.push(createParticle(0, 0));
      particles.push(createParticle(canvas.width, 0));
      particles.push(createParticle(0, canvas.height));
      particles.push(createParticle(canvas.width, canvas.height));
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      emitCorners();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        p.x += p.speedX;
        p.y += p.speedY;
        p.life--;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.fill();

        if (p.life <= 0) {
          particles.splice(i, 1);
          i--;
        }
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-30 pointer-events-none"
    />
  );
}