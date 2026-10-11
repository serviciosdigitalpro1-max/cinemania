import React, { useState } from 'react';
import { X, Send, CheckCircle2, Film } from 'lucide-react';

interface RequestMovieModalProps {
  onClose: () => void;
}

export const RequestMovieModal: React.FC<RequestMovieModalProps> = ({
  onClose
}) => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieYear, setMovieYear] = useState('');
  const [audioPref, setAudioPref] = useState('Español Latino');
  const [qualityPref, setQualityPref] = useState('4K Ultra HD');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!movieTitle.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setMovieTitle('');
      setMovieYear('');
      setNotes('');
      onClose();
    }, 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#0b0f19] border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-900 border-b border-slate-800">
          <div className="flex items-center gap-2">
            <Film className="w-5 h-5 text-cyan-400" />
            <h2 className="text-base font-bold text-white">Pedir Película a Cinemanía</h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-3">
              <CheckCircle2 className="w-14 h-14 text-emerald-400 animate-bounce" />
              <h3 className="text-base font-bold text-white">¡Solicitud Recibida con Éxito!</h3>
              <p className="text-xs text-slate-300 max-w-xs">
                Hemos agregado <strong>"{movieTitle}"</strong> a la cola de ripeos prioritarios. La subiremos en la mejor calidad disponible con audio dual.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <p className="text-slate-400 leading-relaxed">
                ¿No encuentras la película que buscas? Envíanos los detalles y nuestro equipo buscará la mejor fuente Bluray o WEB-DL para publicarla.
              </p>

              <div>
                <label className="block font-medium text-slate-300 mb-1.5">
                  Título de la Película <span className="text-cyan-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Gladiador II, Beetlejuice Beetlejuice..."
                  value={movieTitle}
                  onChange={(e) => setMovieTitle(e.target.value)}
                  className="w-full bg-slate-900 text-slate-200 px-3.5 py-2.5 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 text-sm"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">Año Estimado:</label>
                  <input
                    type="text"
                    placeholder="Ej. 2024"
                    value={movieYear}
                    onChange={(e) => setMovieYear(e.target.value)}
                    className="w-full bg-slate-900 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500"
                  />
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1.5">Audio Deseado:</label>
                  <select
                    value={audioPref}
                    onChange={(e) => setAudioPref(e.target.value)}
                    className="w-full bg-slate-900 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500"
                  >
                    <option>Español Latino (5.1)</option>
                    <option>Castellano</option>
                    <option>Inglés Subtitulado</option>
                    <option>Cualquiera</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1.5">Calidad Preferida:</label>
                <div className="flex items-center gap-4">
                  {['4K Ultra HD', '1080p Bluray'].map((q) => (
                    <label key={q} className="flex items-center gap-2 cursor-pointer text-slate-300">
                      <input
                        type="radio"
                        name="qualityPref"
                        checked={qualityPref === q}
                        onChange={() => setQualityPref(q)}
                        className="accent-cyan-400"
                      />
                      <span>{q}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1.5">Notas adicionales (opcional):</label>
                <textarea
                  rows={2}
                  placeholder="Ej. Por favor en servidor Mega o Torrent con audio latino original."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full bg-slate-900 text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 resize-none"
                />
              </div>

              <div className="pt-2 flex justify-end gap-2.5">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-lg font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg transition-all shadow-md flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Petición</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
