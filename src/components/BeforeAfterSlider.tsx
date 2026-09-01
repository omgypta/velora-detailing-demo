import React, { useState, useRef, useCallback, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  aspectRatio?: string;
  className?: string;
  initialPosition?: number;
  altText?: string;
  showControls?: boolean;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'BEFORE',
  afterLabel = 'AFTER',
  aspectRatio = 'aspect-[16/10]',
  className = '',
  initialPosition = 50,
  altText = 'Vehicle detailing before and after transformation',
  showControls = true
}) => {
  const [sliderPosition, setSliderPosition] = useState<number>(initialPosition);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const width = rect.width;
    const clampedPercentage = Math.max(0, Math.min(100, (x / width) * 100));
    setSliderPosition(clampedPercentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    if (e.touches[0]) {
      handleMove(e.touches[0].clientX);
    }
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      setSliderPosition((prev) => Math.max(0, prev - 5));
    } else if (e.key === 'ArrowRight') {
      setSliderPosition((prev) => Math.min(100, prev + 5));
    }
  };

  return (
    <div className={`relative select-none group ${className}`}>
      <div
        ref={containerRef}
        id="before-after-slider-container"
        tabIndex={0}
        role="slider"
        aria-valuenow={Math.round(sliderPosition)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Before and after transformation slider"
        onKeyDown={handleKeyDown}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          if (e.touches[0]) handleMove(e.touches[0].clientX);
        }}
        className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl cursor-ew-resize bg-[#F5F5F7] border border-black/[0.08] shadow-[0_12px_40px_-15px_rgba(0,0,0,0.08)]`}
      >
        {/* AFTER Image (Full background layer) */}
        <img
          src={afterImage}
          alt={`After: ${altText}`}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          loading="eager"
        />

        {/* BEFORE Image (Clipped layer on top) */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none transition-none"
          style={{ width: `${sliderPosition}%` }}
        >
          <div
            className="relative h-full"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          >
            <img
              src={beforeImage}
              alt={`Before: ${altText}`}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none filter contrast-90 brightness-95"
              style={{
                width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%',
                maxWidth: 'none'
              }}
              loading="eager"
            />
          </div>
        </div>

        {/* Vertical Divider Line */}
        <div
          className="absolute top-0 bottom-0 pointer-events-none z-10"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="w-[2px] h-full bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)]" />

          {/* Apple-style Slider Handle */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white/95 backdrop-blur-md border border-black/10 shadow-[0_6px_20px_rgba(0,0,0,0.2)] flex items-center justify-center transition-transform group-hover:scale-105 active:scale-95">
            <div className="flex items-center gap-0.5 text-[#1D1D1F]">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </div>
          </div>
        </div>

        {/* Discrete Apple-style Glass Labels */}
        <div className="absolute top-4 left-4 z-10 pointer-events-none">
          <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-black/60 backdrop-blur-md text-white rounded-full border border-white/10 shadow-sm">
            {beforeLabel}
          </span>
        </div>

        <div className="absolute top-4 right-4 z-10 pointer-events-none">
          <span className="inline-block px-3 py-1 text-[11px] font-medium tracking-wide uppercase bg-white/90 backdrop-blur-md text-[#1D1D1F] rounded-full border border-black/5 shadow-sm">
            {afterLabel}
          </span>
        </div>

        {/* Subtle Hint on first view */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none opacity-80 group-hover:opacity-0 transition-opacity duration-300">
          <span className="px-3 py-1 text-[11px] font-medium tracking-wide bg-black/50 backdrop-blur-md text-white rounded-full">
            Drag to compare
          </span>
        </div>
      </div>

      {/* Control Quick Toggle Pill - Apple Segmented Control */}
      {showControls && (
        <div className="mt-3.5 flex items-center justify-between text-xs">
          <div className="inline-flex p-0.5 bg-[#F5F5F7] rounded-full border border-black/[0.04]">
            <button
              id="slider-btn-before"
              type="button"
              onClick={() => setSliderPosition(100)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                sliderPosition >= 95
                  ? 'bg-white text-[#1D1D1F] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              Before
            </button>
            <button
              id="slider-btn-split"
              type="button"
              onClick={() => setSliderPosition(50)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                sliderPosition > 40 && sliderPosition < 60
                  ? 'bg-white text-[#1D1D1F] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              50 / 50
            </button>
            <button
              id="slider-btn-after"
              type="button"
              onClick={() => setSliderPosition(0)}
              className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                sliderPosition <= 5
                  ? 'bg-white text-[#1D1D1F] shadow-sm'
                  : 'text-[#86868B] hover:text-[#1D1D1F]'
              }`}
            >
              After
            </button>
          </div>

          <span className="text-xs font-normal text-[#86868B]">
            {sliderPosition < 50 ? 'Restored Mirror Finish' : 'Uncorrected Condition'}
          </span>
        </div>
      )}
    </div>
  );
};
