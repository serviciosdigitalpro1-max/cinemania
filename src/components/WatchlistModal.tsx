import React from 'react';
import { Movie } from '../types/movie';
import { X, Play, Trash2, Bookmark, Film } from 'lucide-react';

interface WatchlistModalProps {
  onClose: () => void;
  watchlist: Movie[];
  onRemoveFromWatchlist: (movieId: string) => void;
  onSelectMovie: (movie: Movie, autoPlay?: boolean) => void;
  onClearAll: () => void;
}

export const WatchlistModal: React.FC<WatchlistModalProps> = ({
  onClose,
  watchlist,
  onRemoveFromWatchlist,
  onSelectMovie,
  onClearAll
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-bold text-white">Mi Lista de Películas Guardadas</h2>
            <span className="text-xs bg-slate-800 text-cyan-300 font-semibold px-2 py-0.5 rounded-full border border-slate-700">
              {watchlist.length}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {watchlist.length > 0 && (
              <button
                onClick={onClearAll}
                className="text-xs text-red-400 hover:text-red-300 transition-colors px-2 py-1 hover:bg-red-950/40 rounded"
              >
                Vaciar lista
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 flex-grow">
          {watchlist.length === 0 ? (
            <div className="py-12 flex flex-col items-center justify-center text-center">
              <Film className="w-12 h-12 text-slate-700 mb-3" />
              <p className="text-sm font-semibold text-slate-300 mb-1">Tu lista está vacía</p>
              <p className="text-xs text-slate-500 max-w-sm">
                Haz clic en el ícono de marcador en cualquier película para guardarla y verla o descargarla cuando quieras.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {watchlist.map((movie) => (
                <div
                  key={movie.id}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all gap-4"
                >
                  <div 
                    className="flex items-center gap-3 cursor-pointer flex-grow overflow-hidden"
                    onClick={() => {
                      onSelectMovie(movie, false);
                      onClose();
                    }}
                  >
                    <img
                      src={movie.posterUrl}
                      alt={movie.title}
                      referrerPolicy="no-referrer"
                      className="w-12 h-16 object-cover rounded-md bg-slate-950 shrink-0"
                    />
                    <div className="overflow-hidden">
                      <h4 className="text-sm font-bold text-white truncate hover:text-cyan-400 transition-colors">
                        {movie.title}
                      </h4>
                      <p className="text-xs text-slate-400">
                        {movie.year} · {movie.quality} · <span className="text-cyan-400">{movie.audio[0]}</span>
                      </p>
                      <p className="text-[11px] text-slate-500 truncate mt-0.5">
                        {movie.genres.join(', ')}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => {
                        onSelectMovie(movie, true);
                        onClose();
                      }}
                      className="p-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all shadow-sm"
                      title="Reproducir ahora"
                    >
                      <Play className="w-4 h-4 fill-slate-950" />
                    </button>
                    <button
                      onClick={() => onRemoveFromWatchlist(movie.id)}
                      className="p-2 rounded-lg bg-slate-800 hover:bg-red-950/60 text-slate-400 hover:text-red-400 border border-slate-700 hover:border-red-800/80 transition-colors"
                      title="Quitar de mi lista"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
