import React, { useState } from 'react';
import { Film, ShieldCheck, X, Info } from 'lucide-react';
import { GENRES_LIST } from '../data/movies';

interface FooterProps {
  onSelectGenre: (genre: string) => void;
  onOpenRequestModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectGenre, onOpenRequestModal }) => {
  const [activeInfo, setActiveInfo] = useState<{ title: string; content: string } | null>(null);

  return (
    <footer className="mt-20 border-t border-slate-800 bg-[#060a12] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & About */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-600 to-sky-400 flex items-center justify-center text-slate-950 font-bold">
                <Film className="w-4 h-4 stroke-[2.5]" />
              </div>
              <div className="flex items-baseline">
                <span className="text-lg font-black text-white font-display uppercase tracking-wider">CINE</span>
                <span className="text-lg font-black text-cyan-400 font-display uppercase tracking-wider">MANÍA</span>
              </div>
            </div>
            
            <p className="text-slate-400 max-w-md leading-relaxed">
              El portal número uno de Latinoamérica para ver y descargar películas completas en máxima definición 4K Ultra HD y 1080p Bluray, con audio dual en español latino, castellano y subtítulos en español. Enlaces directos en 1 solo link y torrents verificados en Cinemanía.
            </p>

            <div className="flex items-center gap-2 pt-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Ripeos limpios sin marcas de agua, audio sincronizado y codificación HEVC/x265.</span>
            </div>
          </div>

          {/* Col 2: Géneros Populares */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Géneros Populares
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {GENRES_LIST.slice(1, 9).map((g) => (
                <button
                  key={g}
                  onClick={() => {
                    onSelectGenre(g);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="text-left text-slate-400 hover:text-cyan-400 transition-colors py-0.5 truncate"
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3: Enlaces Rápidos y Soporte */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-3">
              Servicios y Ayuda
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenRequestModal}
                  className="hover:text-cyan-400 transition-colors"
                >
                  Pedir una Película
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfo({
                    title: 'Cómo Reproducir Archivos MKV en 4K UHD',
                    content: 'Para reproducir películas en formato MKV 4K con pistas de audio Dolby Atmos, DTS-HD o AC3 5.1, recomendamos usar VLC Media Player o PotPlayer en Windows/Mac, y Nova Video Player en Smart TV o TV Box Android.'
                  })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Cómo Reproducir Archivos MKV 4K
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfo({
                    title: 'Contraseña Universal de Descompresión',
                    content: 'Todos los archivos comprimidos (.rar / .zip) de Cinemanía utilizan la misma contraseña oficial sin espacios: www.cinemania.is'
                  })}
                  className="hover:text-cyan-400 transition-colors text-left"
                >
                  Contraseña de Descompresión
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveInfo({
                    title: 'Canal Oficial de Estrenos y Notificaciones',
                    content: '¡Suscripción activa! Te avisaremos de cada nuevo ripeo 4K UHD y estreno semanal subido a la cartelera de Cinemanía.'
                  })}
                  className="hover:text-cyan-400 transition-colors text-cyan-400 text-left"
                >
                  Canal Oficial de Estrenos
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer Legal & Copyright */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p className="text-center md:text-left max-w-2xl leading-relaxed">
            <strong>Aviso de exención de responsabilidad:</strong> Este portal no aloja ningún archivo de audio o video en sus servidores. Todo el contenido multimedia enlazado es recopilado de sitios públicos de terceros como YouTube, Mega, Google Drive y redes P2P. Cinemanía funciona exclusivamente como un índice informativo y de catálogo cinematográfico.
          </p>

          <p className="whitespace-nowrap flex items-center gap-1 text-slate-400">
            Cinemanía &copy; {new Date().getFullYear()} · Hecho para cinéfilos
          </p>
        </div>
      </div>

      {/* Info Dialog */}
      {activeInfo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-slate-900 border border-slate-700 rounded-xl p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                <Info className="w-4 h-4" />
                <span>{activeInfo.title}</span>
              </div>
              <button
                onClick={() => setActiveInfo(null)}
                className="p-1 text-slate-400 hover:text-white rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed mb-4">
              {activeInfo.content}
            </p>
            <div className="flex justify-end">
              <button
                onClick={() => setActiveInfo(null)}
                className="px-4 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg text-xs"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};

