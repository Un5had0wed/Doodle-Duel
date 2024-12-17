import { FC, useEffect, useRef, useState } from "preact/compat";
import styles from "./DrawingCanva.module.css";

interface DrawingCanvaProps {
  color?: string;
}

export const DrawingCanva: FC<DrawingCanvaProps> = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not found");
      return;
    }

    const resizeCanvas = (): void => {
      const parent = canvas.parentElement as HTMLDivElement;
      const width = parent.clientWidth;
      const height = parent.clientHeight;

      canvas.width = width;
      canvas.height = height;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  const startDrawing = (e: MouseEvent) => {
    setIsDrawing(true);
    const { offsetX, offsetY } = e;
    setLastPosition({ x: offsetX, y: offsetY });
  };

  // Draw on canvas
  const draw = (e: MouseEvent) => {
    if (!isDrawing) return;

    const { offsetX, offsetY } = e;
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas element not found");
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      console.error("Canvas context not found");
      return;
    }

    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(offsetX, offsetY);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();

    setLastPosition({ x: offsetX, y: offsetY });
  };

  // Stop drawing
  const stopDrawing = () => {
    setIsDrawing(false);
  };

  return (
    <div className={styles.drawingCanva}>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseOut={stopDrawing}
      />
    </div>
  );
};
