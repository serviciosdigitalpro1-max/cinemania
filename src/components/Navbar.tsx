import React, { useState } from 'react';
import { Film, Search, Bookmark, PlusCircle, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  watchlistCount: number;
  onOpenWatchlist: () => void;
  onOpenRequestModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab,
  setActiveTab,
  searchQuery,
  setSearchQuery,
  watchlistCount,
  onOpenWatchlist,
  onOpenRequestModal
}) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080c15]/95 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-18">
          
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <button 
              onClick={() => { setActiveTab('inicio'); setSearchQuery(''); }}
              className="group flex items-center gap-2.5 text-left focus:outline-none"
            >
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center text-slate-950 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
                <Film className="w-5 h-5 stroke-[2.5]" />
              </div>
              <div className="flex flex-col">
                <div className="flex items-baseline tracking-tight">
                  <span className="text-xl font-black text-white font-display uppercase tracking-wider">CINE</span>
                  <span className="text-xl font-black text-cyan-400 font-display uppercase tracking-wider">MANÍA</span>
                </div>
                <span className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest -mt-1">
                  Películas 4K & 1080p
                </span>
              </div>
            </button>
          </div>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
            <button
              onClick={() => { setActiveTab('inicio'); setSearchQuery(''); }}
              className={`whitespace-nowrap transition-colors ${
                activeTab === 'inicio' ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Inicio
            </button>
            <button
              onClick={() => { setActiveTab('estrenos'); setSearchQuery(''); }}
              className={`whitespace-nowrap transition-colors ${
                activeTab === 'estrenos' ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Estrenos
            </button>
            <button
              onClick={() => { setActiveTab('4k'); setSearchQuery(''); }}
              className={`whitespace-nowrap transition-colors ${
                activeTab === '4k' ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Películas 4K UHD
            </button>
            <button
              onClick={() => { setActiveTab('series'); setSearchQuery(''); }}
              className={`whitespace-nowrap transition-colors ${
                activeTab === 'series' ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Series & Sagas
            </button>
            <button
              onClick={() => { setActiveTab('latino'); setSearchQuery(''); }}
              className={`whitespace-nowrap transition-colors ${
                activeTab === 'latino' ? 'text-cyan-400 font-semibold' : 'text-slate-300 hover:text-white'
              }`}
            >
              Audio Latino 5.1
            </button>
          </nav>

          {/* Zone 3: Primary Action & Quick Tools */}
          <div className="flex items-center gap-3 shrink-0">
            {/* Desktop Instant Search Bar */}
            <div className="relative hidden lg:block w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Buscar película, actor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900/90 text-sm text-slate-200 placeholder-slate-500 pl-9 pr-8 py-2 rounded-lg border border-slate-700/80 focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Mobile Search Toggle */}
            <button
              onClick={() => setShowMobileSearch(!showMobileSearch)}
              className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
              title="Buscar"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Mi Lista Button */}
            <button
              onClick={onOpenWatchlist}
              className="relative flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 rounded-lg border border-slate-700 transition-colors whitespace-nowrap"
              title="Mi Lista de Favoritos"
            >
              <Bookmark className="w-3.5 h-3.5 text-cyan-400" />
              <span className="hidden sm:inline">Mi Lista</span>
              {watchlistCount > 0 && (
                <span className="ml-0.5 px-1.5 py-0.2 text-[10px] font-bold bg-cyan-500 text-slate-950 rounded-full">
                  {watchlistCount}
                </span>
              )}
            </button>

            {/* Primary Action Button: Pedir Película */}
            <button
              onClick={onOpenRequestModal}
              className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 rounded-lg shadow-sm shadow-cyan-500/20 transition-all whitespace-nowrap active:scale-95"
            >
              <PlusCircle className="w-4 h-4 stroke-[2.5]" />
              <span className="hidden sm:inline">Pedir Película</span>
              <span className="sm:hidden">Pedir</span>
            </button>
          </div>
        </div>

        {/* Mobile Search Bar Expansion */}
        {showMobileSearch && (
          <div className="lg:hidden pb-3 pt-1">
            <div className="relative w-full">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Buscar por título, director, género..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-900 text-sm text-slate-200 placeholder-slate-500 pl-9 pr-9 py-2 rounded-lg border border-slate-700 focus:border-cyan-500 focus:outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
