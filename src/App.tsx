import React, { useState, useEffect, useMemo } from 'react';
import { MOVIES_DATA } from './data/movies';
import { Movie } from './types/movie';
import { Navbar } from './components/Navbar';
import { HeroBanner } from './components/HeroBanner';
import { MovieCard } from './components/MovieCard';
import { FilterBar } from './components/FilterBar';
import { MoviePlayerModal } from './components/MoviePlayerModal';
import { WatchlistModal } from './components/WatchlistModal';
import { RequestMovieModal } from './components/RequestMovieModal';
import { Footer } from './components/Footer';
import { Sparkles, Flame, Film, Tv, Bell, Check, Search, X } from 'lucide-react';

export default function App() {
  // Navigation & Search State
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Filtering State
  const [selectedGenre, setSelectedGenre] = useState<string>('Todos');
  const [selectedQuality, setSelectedQuality] = useState<string>('Todas');
  const [selectedYear, setSelectedYear] = useState<string>('Todos los Años');
  const [selectedAudio, setSelectedAudio] = useState<string>('Todos');
  const [sortBy, setSortBy] = useState<string>('recientes');

  // Modals & Active Movie
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [autoPlayPlayer, setAutoPlayPlayer] = useState<boolean>(false);
  const [isWatchlistOpen, setIsWatchlistOpen] = useState<boolean>(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState<boolean>(false);
  const [showNotice, setShowNotice] = useState<boolean>(true);

  // Watchlist persisted in localStorage
  const [watchlist, setWatchlist] = useState<Movie[]>(() => {
    try {
      const saved = localStorage.getItem('cinecalidad_watchlist');
      if (saved) return JSON.parse(saved);
    } catch {
      // fallback
    }
    // pre-populate with 2 great movies for immediate delight
    return [MOVIES_DATA[0], MOVIES_DATA[1]];
  });

  useEffect(() => {
    try {
      localStorage.setItem('cinecalidad_watchlist', JSON.stringify(watchlist));
    } catch {
      // ignore
    }
  }, [watchlist]);

  const handleToggleWatchlist = (movie: Movie) => {
    setWatchlist((prev) => {
      const exists = prev.some((m) => m.id === movie.id);
      if (exists) {
        return prev.filter((m) => m.id !== movie.id);
      } else {
        return [movie, ...prev];
      }
    });
  };

  const handleRemoveFromWatchlist = (movieId: string) => {
    setWatchlist((prev) => prev.filter((m) => m.id !== movieId));
  };

  const handleClearWatchlist = () => {
    setWatchlist([]);
  };

  const handleSelectMovie = (movie: Movie, autoPlay = false) => {
    setSelectedMovie(movie);
    setAutoPlayPlayer(autoPlay);
  };

  const resetAllFilters = () => {
    setSelectedGenre('Todos');
    setSelectedQuality('Todas');
    setSelectedYear('Todos los Años');
    setSelectedAudio('Todos');
    setSearchQuery('');
  };

  // Filter movies logic
  const filteredMovies = useMemo(() => {
    return MOVIES_DATA.filter((m) => {
      // Search query check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const matchesTitle = m.title.toLowerCase().includes(query);
        const matchesOriginal = m.originalTitle.toLowerCase().includes(query);
        const matchesCast = m.cast.some((c) => c.toLowerCase().includes(query));
        const matchesDirector = m.director.toLowerCase().includes(query);
        const matchesGenre = m.genres.some((g) => g.toLowerCase().includes(query));
        if (!matchesTitle && !matchesOriginal && !matchesCast && !matchesDirector && !matchesGenre) {
          return false;
        }
      }

      // Tab constraint
      if (activeTab === 'estrenos' && !m.isPremiere) return false;
      if (activeTab === '4k' && m.quality !== '4K UHD') return false;
      if (activeTab === 'latino' && !m.audio.some((a) => a.includes('Latino'))) return false;

      // Quality filter
      if (selectedQuality !== 'Todas' && m.quality !== selectedQuality) return false;

      // Genre filter
      if (selectedGenre !== 'Todos' && !m.genres.includes(selectedGenre)) return false;

      // Year filter
      if (selectedYear !== 'Todos los Años') {
        if (selectedYear === 'Clásicos') {
          if (m.year > 2020) return false;
        } else {
          if (m.year.toString() !== selectedYear) return false;
        }
      }

      // Audio filter
      if (selectedAudio !== 'Todos') {
        if (selectedAudio === 'Latino 5.1' && !m.audio.some((a) => a.includes('5.1') || a.includes('Latino'))) return false;
        if (selectedAudio === 'Castellano' && !m.audio.includes('Castellano')) return false;
        if (selectedAudio === 'Subtitulado' && !m.audio.includes('Inglés Subtitulado')) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'calificacion') return b.rating - a.rating;
      if (sortBy === 'nombre') return a.title.localeCompare(b.title);
      if (sortBy === 'duracion') return b.duration.localeCompare(a.duration);
      // default: recientes
      return b.year - a.year;
    });
  }, [activeTab, searchQuery, selectedGenre, selectedQuality, selectedYear, selectedAudio, sortBy]);

  // Featured Hero movie
  const featuredMovie = MOVIES_DATA[0];

  return (
    <div className="min-h-screen bg-[#080c15] text-slate-100 flex flex-col font-sans">
      
      {/* Top Banner Notice like Cinemanía */}
      {showNotice && (
        <div className="bg-gradient-to-r from-cyan-950/80 via-slate-900 to-cyan-950/80 border-b border-cyan-800/30 px-4 py-2 text-xs text-center text-slate-300 flex items-center justify-center gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" />
            <span>
              <strong>Cinemanía Oficial:</strong> Todas las películas disponibles en calidad 4K UHD y 1080p con audio Dual Latino 5.1 y descargas sin publicidad invasiva.
            </span>
          </div>
          <button
            onClick={() => setShowNotice(false)}
            className="text-slate-400 hover:text-white p-0.5 rounded transition-colors"
            title="Cerrar aviso"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Navigation Bar */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        watchlistCount={watchlist.length}
        onOpenWatchlist={() => setIsWatchlistOpen(true)}
        onOpenRequestModal={() => setIsRequestModalOpen(true)}
      />

      {/* Hero Banner (Only shown on 'inicio' when no search active) */}
      {activeTab === 'inicio' && !searchQuery.trim() && (
        <HeroBanner
          movie={featuredMovie}
          onSelectMovie={handleSelectMovie}
          isInWatchlist={watchlist.some((m) => m.id === featuredMovie.id)}
          onToggleWatchlist={handleToggleWatchlist}
        />
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow w-full">
        
        {/* Quick Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2.5">
            <div className="w-2.5 h-6 rounded-full bg-cyan-400" />
            <h2 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight uppercase">
              {searchQuery.trim() 
                ? `Resultados de búsqueda: "${searchQuery}"`
                : activeTab === 'estrenos'
                ? 'Últimos Estrenos 2024 - 2026'
                : activeTab === '4k'
                ? 'Películas en Calidad 4K Ultra HD'
                : activeTab === 'series'
                ? 'Series y Sagas Cinematográficas'
                : activeTab === 'latino'
                ? 'Películas con Audio Latino 5.1'
                : 'Cartelera de Películas y Ripeos Recientes'}
            </h2>
          </div>

          <span className="text-xs text-slate-400 font-medium">
            Mostrando <strong className="text-cyan-400">{filteredMovies.length}</strong> títulos de alta calidad
          </span>
        </div>

        {/* Filter and Sorting Bar */}
        <FilterBar
          selectedGenre={selectedGenre}
          setSelectedGenre={setSelectedGenre}
          selectedQuality={selectedQuality}
          setSelectedQuality={setSelectedQuality}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          selectedAudio={selectedAudio}
          setSelectedAudio={setSelectedAudio}
          sortBy={sortBy}
          setSortBy={setSortBy}
          totalResults={filteredMovies.length}
          onResetFilters={resetAllFilters}
        />

        {/* Movies Grid */}
        {filteredMovies.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-5">
            {filteredMovies.map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onSelectMovie={handleSelectMovie}
                isInWatchlist={watchlist.some((m) => m.id === movie.id)}
                onToggleWatchlist={handleToggleWatchlist}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-20 flex flex-col items-center justify-center text-center bg-slate-900/40 rounded-2xl border border-slate-800 p-8">
            <Film className="w-14 h-14 text-slate-700 mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">No se encontraron películas</h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
              No encontramos títulos que coincidan con tus filtros o término de búsqueda. Prueba quitando algunos filtros o solicita la película que buscas.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={resetAllFilters}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition-colors"
              >
                Limpiar Filtros
              </button>
              <button
                onClick={() => setIsRequestModalOpen(true)}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg transition-all"
              >
                Pedir Película
              </button>
            </div>
          </div>
        )}

        {/* Cinecalidad Feature Highlights Strip */}
        <div className="mt-16 pt-12 border-t border-slate-800/80 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/50 flex items-center justify-center shrink-0">
              <Film className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Máxima Calidad 4K UHD y 1080p</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Archivos codificados en HEVC x265 y AVC x264 para garantizar la mejor resolución y menor tamaño sin perder fidelidad visual.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-sky-950 text-sky-400 border border-sky-800/50 flex items-center justify-center shrink-0">
              <Tv className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Audio Dual Español Latino 5.1</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Pistas de doblaje latino profesional sincronizadas en sonido envolvente 5.1 canales y pistas originales en inglés con subtítulos completos.
              </p>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-lg bg-emerald-950 text-emerald-400 border border-emerald-800/50 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Descargas en 1 Link y Torrent</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Enlaces directos a servidores de alta velocidad como Mega, 1Fichier, Google Drive y magnets torrent para descargar en minutos.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        onSelectGenre={(genre) => {
          setSelectedGenre(genre);
          setActiveTab('inicio');
        }}
        onOpenRequestModal={() => setIsRequestModalOpen(true)}
      />

      {/* Modals */}
      {selectedMovie && (
        <MoviePlayerModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
          autoPlay={autoPlayPlayer}
          isInWatchlist={watchlist.some((m) => m.id === selectedMovie.id)}
          onToggleWatchlist={handleToggleWatchlist}
          onSelectMovie={handleSelectMovie}
          allMovies={MOVIES_DATA}
        />
      )}

      {isWatchlistOpen && (
        <WatchlistModal
          onClose={() => setIsWatchlistOpen(false)}
          watchlist={watchlist}
          onRemoveFromWatchlist={handleRemoveFromWatchlist}
          onSelectMovie={handleSelectMovie}
          onClearAll={handleClearWatchlist}
        />
      )}

      {isRequestModalOpen && (
        <RequestMovieModal
          onClose={() => setIsRequestModalOpen(false)}
        />
      )}
    </div>
  );
}
