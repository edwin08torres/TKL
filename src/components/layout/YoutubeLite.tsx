import { useState } from 'react';

interface YoutubeLiteProps {
  id: string;          
  className?: string; 
}

export const YoutubeLite = ({ id, className = '' }: YoutubeLiteProps) => {
  const [play, setPlay] = useState(false);

  return play ? (
    <iframe
      src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1`}
      title="YouTube video"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={`h-full w-full rounded-2xl ${className}`}
    />
  ) : (
    <button
      onClick={() => setPlay(true)}
      className={`relative h-full w-full overflow-hidden rounded-r-2xl ${className}`}
      aria-label="Reproducir video"
    >
      <img
        src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
        alt="Video thumbnail"
        loading="lazy"
        className="h-full w-full object-cover object-center"
      />
      <span className="absolute inset-0 grid place-items-center text-white text-5xl drop-shadow-lg">
        ▶
      </span>
    </button>
  );
};
