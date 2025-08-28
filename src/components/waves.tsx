import React, { useEffect, useRef } from 'react';

interface Wave {
  color: string;
  speed?: number;
  amplitude?: number;
  height: number;
}

interface WavesProps {
  height: number;
  width: number;
  waves: Wave[];
  baseSpeed?: number;
  baseAmplitude?: number;
}


function Waves({
  height,
  width,
  waves,
  baseSpeed,
  baseAmplitude,
}: WavesProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let startTime: number | null = null;

    const setCanvasSize = () => {
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const drawWaves = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      ctx.clearRect(0, 0, width, height);

      waves.forEach((wave, index) => {
        ctx.beginPath();
        ctx.moveTo(0, height);

        let waveSpeed = wave.speed || baseSpeed;
        let waveAmplitude = wave.amplitude || baseAmplitude;
        const waveHeight = wave.height;

        if(!waveSpeed){
            waveSpeed = 0.5;
        }
        if(!waveAmplitude){
            waveAmplitude = 20;
        }

        for (let x = 0; x < width; x++) {
          const frequency = 0.01 + index * 0.005;
          const y = Math.sin(x * frequency + elapsed * waveSpeed * 0.002 + (index * Math.PI * 2) / waves.length) * waveAmplitude;
          ctx.lineTo(x, waveHeight + y);
        }

        ctx.lineTo(width, height);
        ctx.lineTo(0, height);

        ctx.fillStyle = wave.color
        ctx.globalAlpha = 1; // Set transparency
        ctx.fill();
        ctx.globalAlpha = 1; // Reset transparency
      });

      animationFrameId = requestAnimationFrame(drawWaves);
    };

    setCanvasSize();
    animationFrameId = requestAnimationFrame(drawWaves);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [height, width, waves, baseSpeed, baseAmplitude]);

  return (
    <div
      style={{ height, width: '100%' }}
      className="rounded-xl overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
      />
    </div>
  );
};

export default Waves;