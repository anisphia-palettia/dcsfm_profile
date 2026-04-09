"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, VolumeX, Radio, Music2, Signal } from "lucide-react";

// Ganti dengan URL stream DCS FM yang sebenarnya
const STREAM_URL = "https://stream.dcsfm.id";

const BAR_DELAYS = [0, 120, 240, 80, 200, 40, 160, 300, 60];

export default function RadioHero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [volume, setVolume] = useState(80);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.src = "";
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      if (audioRef.current) {
        audioRef.current.src = "";
        audioRef.current = null;
      }
      setIsPlaying(false);
      return;
    }

    setIsLoading(true);

    const audio = new Audio();
    // Assign volume before src to avoid race conditions
    audio.volume = isMuted ? 0 : volume / 100;
    audio.preload = "none";

    audio.addEventListener("playing", () => {
      setIsPlaying(true);
      setIsLoading(false);
    }, { once: true });

    audio.addEventListener("error", () => {
      setIsLoading(false);
      setIsPlaying(false);
    }, { once: true });

    audioRef.current = audio;
    // Set src last so the browser immediately starts fetching & playing
    audio.src = STREAM_URL;
    audio.play().catch(() => {
      setIsLoading(false);
      setIsPlaying(false);
    });
  };

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (audioRef.current) audioRef.current.volume = next ? 0 : volume / 100;
  };

  const handleVolume = (val: number) => {
    setVolume(val);
    if (isMuted) setIsMuted(false);
    if (audioRef.current) audioRef.current.volume = val / 100;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-black overflow-hidden">
      {/* Dot grid background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, #FFE600 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>


      {/* Main content */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center text-center px-4 gap-8 w-full max-w-2xl"
      >
        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/30 rounded-full px-4 py-1.5"
        >
          <span
            className={`size-2 rounded-full transition-colors duration-500 ${
              isPlaying ? "bg-red-500 animate-pulse" : "bg-zinc-600"
            }`}
          />
          <Signal className="size-3 text-yellow-400" />
          <span className="text-yellow-400 text-xs font-semibold tracking-widest uppercase">
            {isPlaying ? "On Air" : "Live Radio"}
          </span>
        </motion.div>

        {/* Logo & station identity */}
        <div className="flex flex-col items-center gap-2">
          <motion.div
            animate={isPlaying ? { boxShadow: ["0 0 0px #FFE60040", "0 0 40px #FFE60060", "0 0 0px #FFE60040"] } : {}}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center justify-center w-24 h-24 rounded-2xl bg-yellow-400"
          >
            <Radio className="size-12 text-black" />
          </motion.div>
          <h1 className="text-7xl font-black text-yellow-400 tracking-tight leading-none mt-4">
            DCS FM
          </h1>
          <p className="text-2xl font-semibold text-zinc-300 tracking-widest">
            100.50 MHz
          </p>
          <p className="text-zinc-500 text-sm tracking-wider uppercase">
            Radio Madiun
          </p>
        </div>

        {/* Equalizer bars */}
        <div className="flex items-end gap-1.5 h-10" aria-hidden="true">
          {BAR_DELAYS.map((delay, i) => (
            <motion.div
              key={i}
              animate={
                isPlaying
                  ? { height: ["6px", `${16 + (i % 3) * 10}px`, "6px"] }
                  : { height: "6px" }
              }
              transition={{
                duration: 0.6 + (i % 3) * 0.15,
                repeat: Infinity,
                ease: "easeInOut",
                delay: delay / 1000,
              }}
              className={`w-1.5 rounded-full transition-colors duration-500 ${
                isPlaying ? "bg-yellow-400" : "bg-zinc-700"
              }`}
            />
          ))}
        </div>

        {/* Now playing label */}
        <div className="flex items-center gap-2 text-zinc-400 text-sm">
          <Music2 className="size-4 text-yellow-400/70" />
          <AnimatePresence mode="wait">
            <motion.span
              key={isPlaying ? "playing" : "idle"}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {isPlaying
                ? "Streaming live — DCS FM 100.50 Madiun"
                : "Klik play untuk mulai mendengarkan"}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Play / Pause button */}
        <motion.button
          onClick={togglePlay}
          disabled={isLoading}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          className="relative flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400 hover:bg-yellow-300 text-black transition-colors shadow-xl shadow-yellow-400/30 disabled:opacity-60 disabled:cursor-not-allowed"
          aria-label={isPlaying ? "Pause" : "Play"}
        >
          {isLoading ? (
            <svg className="size-8 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : isPlaying ? (
            <Pause className="size-8" />
          ) : (
            <Play className="size-8 translate-x-0.5" />
          )}
        </motion.button>

        {/* Volume control */}
        <div className="flex items-center gap-3 w-full max-w-xs">
          <button
            onClick={toggleMute}
            className="text-zinc-400 hover:text-yellow-400 transition-colors"
            aria-label={isMuted ? "Unmute" : "Mute"}
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="size-5" />
            ) : (
              <Volume2 className="size-5" />
            )}
          </button>
          <input
            type="range"
            min={0}
            max={100}
            value={isMuted ? 0 : volume}
            onChange={(e) => handleVolume(Number(e.target.value))}
            className="flex-1 h-1.5 appearance-none rounded-full cursor-pointer accent-yellow-400 bg-zinc-700"
            aria-label="Volume"
          />
          <span className="text-zinc-500 text-xs w-7 text-right">
            {isMuted ? 0 : volume}%
          </span>
        </div>

        <p className="text-zinc-600 text-xs">
          Streaming 24/7 · Informatif · Menghibur · Menginspirasi
        </p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-zinc-600"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1"
        >
          <span className="text-xs">Scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
