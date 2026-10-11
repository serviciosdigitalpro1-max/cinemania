import React from 'react';
import { GENRES_LIST, YEARS_LIST } from '../data/movies';
import { SlidersHorizontal, ArrowUpDown, RotateCcw } from 'lucide-react';

interface FilterBarProps {
  selectedGenre: string;
  setSelectedGenre: (genre: string) => void;
  selectedQuality: string;
  setSelectedQuality: (quality: string) => void;
  selectedYear: string;
  setSelectedYear: (year: string) => void;
  selectedAudio: string;
  setSelectedAudio: (audio: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;
  totalResults: number;
  onResetFilters: () => void;
}

export const FilterBar: React.FC<FilterBarProps> = ({
  selectedGenre,
  setSelectedGenre,
  selectedQuality,
  setSelectedQuality,
  selectedYear,
  setSelectedYear,
  selectedAudio,
  setSelectedAudio,
  sortBy,
  setSortBy,
  totalResults,
  onResetFilters
}) => {
  const hasActiveFilters = 
    selectedGenre !== 'Todos' || 
    selectedQuality !== 'Todas' || 
    selectedYear !== 'Todos los Años' || 
    selectedAudio !== 'Todos';

  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4 mb-8 backdrop-blur-sm">
      {/* Top Filter Bar Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        
        {/* Quality Segmented Control */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 mr-1 whitespace-nowrap">
            Calidad:
          </span>
          {['Todas', '4K UHD', '1080p Bluray'].map((q) => (
            <button
              key={q}
              onClick={() => setSelectedQuality(q)}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedQuality === q
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                  : 'bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700/80 border border-slate-700/60'
              }`}
            >
              {q}
            </button>
          ))}

          {/* Quick Audio Lat/Cast Toggle */}
          <div className="h-4 w-px bg-slate-700 mx-1" />
          {['Todos', 'Latino 5.1', 'Castellano', 'Subtitulado'].map((a) => (
            <button
              key={a}
              onClick={() => setSelectedAudio(a)}
              className={`px-2.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                selectedAudio === a
                  ? 'bg-sky-600 text-white font-semibold'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800 border border-slate-700/40'
              }`}
            >
              {a}
            </button>
          ))}
        </div>

        {/* Dropdowns: Year, Sort, Reset */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Year selector */}
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="bg-slate-800 text-xs text-slate-200 border border-slate-700 rounded-lg px-2.5 py-1.5 focus:outline-none focus:border-cyan-500"
          >
            {YEARS_LIST.map((y) => (
              <option key={y} value={y}>{y}</option>
            ))}
          </select>

          {/* Sort selector */}
          <div className="flex items-center gap-1 bg-slate-800 border border-slate-700 rounded-lg px-2.5 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
            >
              <option value="recientes" className="bg-slate-900">Más Recientes</option>
              <option value="calificacion" className="bg-slate-900">Mejor IMDb ⭐</option>
              <option value="nombre" className="bg-slate-900">Título (A-Z)</option>
              <option value="duracion" className="bg-slate-900">Mayor Duración</option>
            </select>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1 px-2.5 py-1.5 bg-slate-800 hover:bg-red-950/40 text-slate-300 hover:text-red-400 border border-slate-700 hover:border-red-800/60 rounded-lg text-xs transition-colors"
              title="Restablecer filtros"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpiar</span>
            </button>
          )}

          {/* Total Counter */}
          <span className="text-xs text-slate-400 font-mono pl-1">
            ({totalResults})
          </span>
        </div>
      </div>

      {/* Genre Horizontal List */}
      <div className="mt-3.5 pt-3 border-t border-slate-800/80 flex items-center gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
        <span className="text-xs text-slate-400 font-medium mr-1 whitespace-nowrap">
          Géneros:
        </span>
        {GENRES_LIST.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-2.5 py-1 text-xs rounded-md transition-colors whitespace-nowrap ${
              selectedGenre === genre
                ? 'bg-slate-700 text-cyan-300 font-bold border border-cyan-500/50'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};
