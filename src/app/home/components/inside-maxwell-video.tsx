"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_TITLE = "Inside Maxwell Operations";
const VIDEO_SRC =
  "https://dz3qkrtht6vki.cloudfront.net/sharda-healthcity/fnb-video.mp4";

export function InsideMaxwellVideo() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const closeVideo = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  return (
    <>
      <button
        className="group mt-7 inline-flex items-center gap-3.5 text-left"
        onClick={() => setIsOpen(true)}
        ref={triggerRef}
        type="button"
      >
        <span className="relative flex h-11 w-11 shrink-0 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-[#0D2B44]/20 [animation-duration:2.6s]" />
          <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#0D2B44] text-white transition-transform duration-300 group-hover:scale-105">
            <svg
              aria-hidden="true"
              className="ml-0.5 h-[0.85rem] w-[0.85rem]"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.1-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
            </svg>
          </span>
        </span>
        <span className="border-b border-transparent pb-1 text-[0.72rem] font-black tracking-[0.14em] text-[#0B1F33] uppercase transition-colors duration-300 group-hover:border-[#0B1F33]">
          {VIDEO_TITLE}
        </span>
      </button>

      {isOpen ? (
        <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-8">
          <button
            aria-label="Close video"
            className="absolute inset-0 h-full w-full cursor-default bg-[#04121F]/85 backdrop-blur-sm"
            onClick={closeVideo}
            tabIndex={-1}
            type="button"
          />

          <div
            aria-label={VIDEO_TITLE}
            aria-modal="true"
            className="relative z-10 w-full max-w-[1040px]"
            role="dialog"
          >
            <div className="mb-3 flex items-center justify-between gap-4">
              <p className="text-[0.7rem] font-black tracking-[0.18em] text-white/75 uppercase">
                {VIDEO_TITLE}
              </p>
              <button
                aria-label="Close video"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white transition-colors duration-300 hover:bg-white hover:text-[#0B1F33]"
                onClick={closeVideo}
                ref={closeRef}
                type="button"
              >
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2.4"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>

            <div className="aspect-video w-full overflow-hidden rounded-[1.75rem] bg-black shadow-2xl shadow-black/40">
              {/* biome-ignore lint/a11y/useMediaCaption: no caption track is available for this film yet */}
              <video
                autoPlay
                className="h-full w-full"
                controls
                playsInline
                preload="auto"
                src={VIDEO_SRC}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
