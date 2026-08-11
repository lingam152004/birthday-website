"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseSoundOptions {
  loop?: boolean;
  volume?: number;
  autoPlay?: boolean;
}

export function useSound(
  src: string,
  { loop = true, volume = 0.5, autoPlay = false }: UseSoundOptions = {}
) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = new Audio(src);
    audio.loop = loop;
    audio.volume = volume;
    audioRef.current = audio;

    if (autoPlay) {
      audio.muted = true;
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});

      const unmute = () => {
        if (audioRef.current) {
          audioRef.current.muted = false;
          audioRef.current.play().catch(() => {});
          setIsPlaying(true);
        }
        window.removeEventListener("pointerdown", unmute);
        window.removeEventListener("keydown", unmute);
      };
      window.addEventListener("pointerdown", unmute, { once: true });
      window.addEventListener("keydown", unmute, { once: true });

      return () => {
        window.removeEventListener("pointerdown", unmute);
        window.removeEventListener("keydown", unmute);
        audio.pause();
        audioRef.current = null;
      };
    }

    return () => {
      audio.pause();
      audioRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [src, autoPlay]);

  const play = useCallback(() => {
    audioRef.current?.play().catch(() => {});
    setIsPlaying(true);
  }, []);

  const pause = useCallback(() => {
    audioRef.current?.pause();
    setIsPlaying(false);
  }, []);

  const toggle = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, pause, play]);

  return { isPlaying, play, pause, toggle };
}