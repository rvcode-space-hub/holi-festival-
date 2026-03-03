"use client";
import { useEffect, useRef, useState } from "react";

export default function BackgroundMusic({ playlist }) {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const [started, setStarted] = useState(false);

  // 🎵 Start Music
  const startMusic = () => {
    const audio = audioRef.current;
    if (!audio || !playlist?.length) return;

    audio.src = playlist[0].src;
    audio.volume = 0.2;
    audio.muted = false;

    audio.play().catch(() => {});
    setStarted(true);
  };

  // ⏱ Auto Song Switch
  useEffect(() => {
    if (!started || !playlist?.length) return;

    const timer = setTimeout(() => {
      setIndex((prev) => (prev + 1) % playlist.length);
    }, playlist[index].duration);

    return () => clearTimeout(timer);
  }, [index, playlist, started]);

  // 🔄 Change Song
  useEffect(() => {
    if (!started) return;

    const audio = audioRef.current;
    if (!audio) return;

    audio.pause();
    audio.src = playlist[index].src;
    audio.load();
    audio.play().catch(() => {});
  }, [index, started, playlist]);

  // 👀 Pause When Tab Hidden / Minimized
  useEffect(() => {
    const handleVisibilityChange = () => {
      const audio = audioRef.current;
      if (!audio) return;

      if (document.hidden) {
        audio.pause();   // ⛔ Stop when hidden
      } else if (started) {
        audio.play().catch(() => {}); // ▶ Resume when back
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [started]);

  return (
    <>
      {!started && (
        <div
          onClick={startMusic}
          style={{
            position: "fixed",
            inset: 0,
            background: "black",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "24px",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          Tap Anywhere to Start 🎵
        </div>
      )}

      <audio ref={audioRef} playsInline />
    </>
  );
}