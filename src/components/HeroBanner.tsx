import React, { useState } from 'react';
import { Movie } from '../types/movie';
import { Play, Download, Bookmark, Info, Star } from 'lucide-react';

interface HeroBannerProps {
  movie: Movie;
  onSelectMovie: (movie: Movie, autoPlay?: boolean) => void;
  isInWatchlist: boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  movie,
  onSelectMovie,
  isInWatchlist,
  onToggleWatchlist
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] overflow-hidden bg-slate-950 border-b border-slate-800/80">
      {/* Background Backdrop Image */}
      {!imageError ? (
        <img
          src={movie.backdropUrl}
          alt={movie.title}
          referrerPolicy="no-referrer"
          onError={() => setImageError(true)}
          className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 filter brightness-75 contrast-110"
        />
      ) : (
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900 to-cyan-950/40" />
      )}

      {/* Measured Contrast Scrims */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#080c15] via-[#080c15]/75 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#080c15] via-[#080c15]/80 to-transparent max-w-4xl" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-end pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Subtle premiere kicker */}
          <div className="flex items-center gap-2 mb-2.5">
            <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
              Estreno Destacado en 4K Ultra HD
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-display tracking-tight leading-tight mb-3">
            {movie.title}
          </h1>

          {/* Clean Unboxed Metadata with Typographic Separators */}
          <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs sm:text-sm text-slate-300 mb-4 font-medium">
            <span className="text-amber-400 font-bold flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              {movie.rating.toFixed(1)} IMDb
            </span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{movie.year}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{movie.duration}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-cyan-300 font-semibold">{movie.quality}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>{movie.audio[0]}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span className="text-slate-400">{movie.genres.slice(0, 3).join(', ')}</span>
          </div>

          {/* Synopsis */}
          <p className="text-sm sm:text-base text-slate-300 line-clamp-3 mb-7 leading-relaxed font-normal">
            {movie.synopsis}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => onSelectMovie(movie, true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-lg shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:scale-95"
            >
              <Play className="w-4 h-4 fill-slate-950" />
              <span>Ver Película Online</span>
            </button>

            <button
              onClick={() => onSelectMovie(movie, false)}
              className="flex items-center gap-2 px-4 py-2.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm rounded-lg transition-colors"
            >
              <Download className="w-4 h-4 text-cyan-400" />
              <span>Descargar 1 Link</span>
            </button>

            <button
              onClick={() => onToggleWatchlist(movie)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg border text-sm font-semibold transition-colors ${
                isInWatchlist
                  ? 'bg-cyan-950/60 border-cyan-500/50 text-cyan-300'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isInWatchlist ? 'fill-cyan-400 text-cyan-400' : ''}`} />
              <span>{isInWatchlist ? 'En Mi Lista' : 'Guardar'}</span>
            </button>

            <button
              onClick={() => onSelectMovie(movie, false)}
              className="hidden sm:flex items-center gap-2 px-4 py-2.5 bg-transparent hover:bg-slate-800/60 text-slate-400 hover:text-slate-200 text-sm font-medium transition-colors"
            >
              <Info className="w-4 h-4" />
              <span>Ficha Técnica</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
