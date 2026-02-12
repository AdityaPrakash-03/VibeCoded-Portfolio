"use client";

import { useScroll, useMotionValueEvent, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";

const FRAME_COUNT = 120; // 000.png to 119.png

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll();

    // Map scroll progress (0 to 1) to frame index (0 to FRAME_COUNT - 1)
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    // Preload images
    useEffect(() => {
        let loadedCount = 0;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i < FRAME_COUNT; i++) {
            const img = new Image();
            // Format filenames as 000.png, 001.png, ..., 119.png
            const filename = i.toString().padStart(3, "0") + ".png";
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setIsLoaded(true);
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
    }, []);

    const renderFrame = useCallback((index: number) => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const context = canvas.getContext("2d");
        if (!context) return;

        const img = images[index];
        if (!img) return;

        // Handle high-DPI displays
        const dpr = window.devicePixelRatio || 1;

        // Set canvas dimensions to window size
        canvas.width = window.innerWidth * dpr;
        canvas.height = window.innerHeight * dpr;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;

        context.scale(dpr, dpr);

        // Draw image with object-fit: cover logic
        const drawImageProp = (ctx: CanvasRenderingContext2D, img: HTMLImageElement) => {
            const canvasWidth = ctx.canvas.width / dpr;
            const canvasHeight = ctx.canvas.height / dpr;

            const imgAspectRatio = img.width / img.height;
            const canvasAspectRatio = canvasWidth / canvasHeight;

            let renderWidth, renderHeight, offsetX, offsetY;

            if (imgAspectRatio > canvasAspectRatio) {
                renderHeight = canvasHeight;
                renderWidth = img.width * (canvasHeight / img.height);
                offsetX = (canvasWidth - renderWidth) / 2;
                offsetY = 0;
            } else {
                renderWidth = canvasWidth;
                renderHeight = img.height * (canvasWidth / img.width);
                offsetX = 0;
                offsetY = (canvasHeight - renderHeight) / 2;
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
        };

        drawImageProp(context, img);
    }, [images]);

    // Render initial frame when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(0);
        }
    }, [isLoaded, renderFrame]);

    // Update frame on scroll
    useMotionValueEvent(frameIndex, "change", (latest) => {
        if (isLoaded) {
            const index = Math.round(latest);
            renderFrame(index);
        }
    });

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) {
                const currentFrame = Math.round(frameIndex.get());
                renderFrame(currentFrame);
            }
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [isLoaded, renderFrame, frameIndex]);

    return (
        <div className="fixed inset-0 z-0 bg-[#121212]">
            {!isLoaded && (
                <div className="flex h-full w-full items-center justify-center text-white/50 text-sm">
                    Loading sequence...
                </div>
            )}
            <canvas ref={canvasRef} className="block w-full h-full" />
        </div>
    );
}
