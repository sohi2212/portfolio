import { useEffect, useRef } from "react";

export const useParallaxHover = () => {
    const frameRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLImageElement>(null);

    const target = useRef({ x: 0, y: 0 });
    const current = useRef({ x: 0, y: 0 });
    const raf = useRef<number>(1);

    const lerp = (a: number, b: number, n: number) =>
        a + (b - a) * n;

    const animate = () => {
        current.current.x = lerp(current.current.x, target.current.x, 0.08);
        current.current.y = lerp(current.current.y, target.current.y, 0.08);

        const img = imgRef.current;
        if (img) {
            img.style.transform = `
        rotateY(${current.current.x}deg)
        rotateX(${current.current.y}deg)
        translateZ(40px)
      `;
        }

        raf.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        raf.current = requestAnimationFrame(animate);
        return () => {
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, []);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const frame = frameRef.current;
        if (!frame) return;

        const rect = frame.getBoundingClientRect();

        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        target.current.x = x * 20;
        target.current.y = -y * 20;
    };

    const handleMouseLeave = () => {
        target.current.x = 0;
        target.current.y = 0;
    };

    return {
        frameRef,
        imgRef,
        handleMouseLeave,
        handleMouseMove
    }
}