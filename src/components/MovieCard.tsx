import React, { useState } from 'react';
import { Movie } from '../types/movie';
import { Play, Download, Bookmark, Star, Film } from 'lucide-react';

interface MovieCardProps {
  movie: Movie;
  onSelectMovie: (movie: Movie, autoPlay?: boolean) => void;
  isInWatchlist: boolean;
  onToggleWatchlist: (movie: Movie) => void;
}

export const MovieCard: React.FC<MovieCardProps> = ({
  movie,
  onSelectMovie,
  isInWatchlist,
  onToggleWatchlist
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group relative flex flex-col rounded-xl overflow-hidden bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/20 hover:-translate-y-1">
      {/* Poster Media Box */}
      <div 
        className="relative aspect-[2/3] w-full overflow-hidden bg-slate-950 cursor-pointer"
        onClick={() => onSelectMovie(movie, false)}
      >
        {!imageError ? (
          <img
            src={movie.posterUrl}
            alt={movie.title}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-4 bg-gradient-to-b from-slate-900 to-slate-950 text-slate-500 text-center">
            <Film className="w-10 h-10 mb-2 text-slate-600" />
            <span className="text-xs font-semibold text-slate-400">{movie.title}</span>
          </div>
        )}

        {/* Dark Vignette Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-transparent to-black/30 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-2 inset-x-2 flex items-center justify-between pointer-events-none">
          {/* IMDb Rating */}
          <div className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-black/75 backdrop-blur-sm text-[11px] font-bold text-amber-400">
            <Star className="w-3 h-3 fill-amber-400" />
            <span>{movie.rating.toFixed(1)}</span>
          </div>

          {/* Quality Tag */}
          <div className={`px-1.5 py-0.5 rounded text-[10px] font-black uppercase tracking-wider ${
            movie.quality === '4K UHD' 
              ? 'bg-gradient-to-r from-cyan-500 to-sky-500 text-slate-950 shadow-sm'
              : 'bg-slate-800/90 text-cyan-300 border border-slate-700'
          }`}>
            {movie.quality}
          </div>
        </div>

        {/* Bottom Poster Audio Overlay */}
        <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between pointer-events-none">
          <span className="text-[11px] font-medium text-slate-300 drop-shadow-md truncate">
            {movie.audio[0]}
          </span>
          <span className="text-[11px] font-semibold text-slate-400">
            {movie.year}
          </span>
        </div>

        {/* Interactive Hover Action Overlay */}
        <div className="absolute inset-0 bg-slate-950/70 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2.5 p-3">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onSelectMovie(movie, true);
            }}
            className="w-11 h-11 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center hover:scale-110 hover:bg-cyan-400 transition-transform shadow-lg shadow-cyan-500/30"
            title="Reproducir ahora"
          >
            <Play className="w-5 h-5 fill-slate-950 ml-0.5" />
          </button>
          
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onSelectMovie(movie, false);
              }}
              className="px-2.5 py-1 rounded bg-slate-800/90 hover:bg-slate-700 text-slate-200 text-xs font-medium border border-slate-700 flex items-center gap-1"
              title="Descargar y opciones"
            >
              <Download className="w-3 h-3 text-cyan-400" />
              <span>Descargar</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleWatchlist(movie);
              }}
              className={`p-1.5 rounded border transition-colors ${
                isInWatchlist
                  ? 'bg-cyan-950 border-cyan-500 text-cyan-300'
                  : 'bg-slate-800/90 hover:bg-slate-700 border-slate-700 text-slate-300'
              }`}
              title={isInWatchlist ? 'Quitar de Mi Lista' : 'Guardar en Mi Lista'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isInWatchlist ? 'fill-cyan-400 text-cyan-400' : ''}`} />
            </button>
          </div>
        </div>
      </div>

      {/* Movie Info Details Under Poster */}
      <div className="p-3 flex flex-col flex-grow justify-between">
        <h3 
          onClick={() => onSelectMovie(movie, false)}
          className="text-sm font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors line-clamp-1 cursor-pointer"
          title={movie.title}
        >
          {movie.title}
        </h3>

        {/* Clean Unboxed Metadata */}
        <div className="flex items-center gap-1.5 text-[11px] text-slate-400 mt-1">
          <span>{movie.genres[0]}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span>{movie.duration}</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-500">{movie.size}</span>
        </div>
      </div>
    </div>
  );
};
