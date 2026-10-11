import React, { useState, useRef, useEffect } from 'react';
import { Movie, StreamServer, Comment } from '../types/movie';
import { 
  X, Play, Pause, Volume2, VolumeX, Maximize, 
  Download, Copy, Check, Star, Film, Server, 
  ShieldCheck, MessageSquare, Send, Bookmark, Info, ExternalLink
} from 'lucide-react';

interface MoviePlayerModalProps {
  movie: Movie;
  onClose: () => void;
  autoPlay?: boolean;
  isInWatchlist: boolean;
  onToggleWatchlist: (movie: Movie) => void;
  onSelectMovie: (movie: Movie) => void;
  allMovies: Movie[];
}

export const MoviePlayerModal: React.FC<MoviePlayerModalProps> = ({
  movie,
  onClose,
  autoPlay = false,
  isInWatchlist,
  onToggleWatchlist,
  onSelectMovie,
  allMovies
}) => {
  // Player state
  const [activeTab, setActiveTab] = useState<'reproductor' | 'descargas' | 'ficha' | 'comentarios'>('reproductor');
  const [selectedServer, setSelectedServer] = useState<StreamServer>(movie.servers[0]);
  const [selectedQuality, setSelectedQuality] = useState<string>(movie.quality);
  const [selectedAudio, setSelectedAudio] = useState<string>(movie.audio[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(autoPlay);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [volume, setVolume] = useState<number>(0.8);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(180);
  const [copiedMagnet, setCopiedMagnet] = useState<string | null>(null);

  // Comments state
  const [comments, setComments] = useState<Comment[]>(movie.comments || []);
  const [newCommentName, setNewCommentName] = useState('');
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentRating, setNewCommentRating] = useState(5);

  const videoRef = useRef<HTMLVideoElement>(null);
  const playerContainerRef = useRef<HTMLDivElement>(null);

  // Sync state when movie changes
  useEffect(() => {
    setSelectedServer(movie.servers[0]);
    setSelectedQuality(movie.quality);
    setSelectedAudio(movie.audio[0]);
    setComments(movie.comments || []);
    setIsPlaying(autoPlay);
    setCurrentTime(0);
  }, [movie, autoPlay]);

  // Video playback sync
  useEffect(() => {
    if (selectedServer.type === 'video' && videoRef.current) {
      if (isPlaying) {
        videoRef.current.play().catch(() => setIsPlaying(false));
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, selectedServer]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current) {
      videoRef.current.volume = val;
      setIsMuted(val === 0);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration || 180);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seekTime = parseFloat(e.target.value);
    setCurrentTime(seekTime);
    if (videoRef.current) {
      videoRef.current.currentTime = seekTime;
    }
  };

  const toggleFullScreen = () => {
    if (playerContainerRef.current) {
      if (!document.fullscreenElement) {
        playerContainerRef.current.requestFullscreen().catch(() => {});
      } else {
        document.exitFullscreen().catch(() => {});
      }
    }
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMagnet(id);
    setTimeout(() => setCopiedMagnet(null), 2500);
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentName.trim() || !newCommentText.trim()) return;

    const newComment: Comment = {
      id: 'c_' + Date.now(),
      userName: newCommentName.trim(),
      rating: newCommentRating,
      date: 'Justo ahora',
      text: newCommentText.trim(),
      avatarColor: 'bg-cyan-600'
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
    setNewCommentName('');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  // Related movies
  const relatedMovies = allMovies
    .filter(m => m.id !== movie.id && m.genres.some(g => movie.genres.includes(g)))
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-0 sm:p-4 bg-slate-950/90 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-[#0b0f19] border border-slate-800 rounded-none sm:rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[100vh] sm:max-h-[92vh] flex flex-col">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-slate-900 border-b border-slate-800 shrink-0">
          <div className="flex items-center gap-3">
            <span className="px-2 py-0.5 rounded text-[10px] font-black uppercase tracking-wider bg-cyan-500 text-slate-950">
              {movie.quality}
            </span>
            <h2 className="text-base sm:text-lg font-bold text-white truncate max-w-[280px] sm:max-w-md">
              {movie.title}
            </h2>
            <span className="hidden sm:inline text-xs text-slate-400">({movie.year})</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onToggleWatchlist(movie)}
              className={`p-2 rounded-lg border text-xs font-semibold transition-colors ${
                isInWatchlist 
                  ? 'bg-cyan-950/80 border-cyan-500/50 text-cyan-300' 
                  : 'bg-slate-800 hover:bg-slate-700 border-slate-700 text-slate-300'
              }`}
              title={isInWatchlist ? 'En Mi Lista' : 'Guardar en Mi Lista'}
            >
              <Bookmark className={`w-4 h-4 ${isInWatchlist ? 'fill-cyan-400 text-cyan-400' : ''}`} />
            </button>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto flex-grow p-4 sm:p-6 space-y-6">
          
          {/* Main Video Streaming Player */}
          <div className="flex flex-col rounded-xl overflow-hidden bg-black border border-slate-800 shadow-2xl">
            {/* Server Selector Tabs */}
            <div className="bg-slate-900/90 px-3 py-2 border-b border-slate-800 flex items-center justify-between gap-2 overflow-x-auto scrollbar-none">
              <div className="flex items-center gap-1.5 shrink-0">
                <Server className="w-3.5 h-3.5 text-cyan-400 mr-1" />
                <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Servidores:
                </span>
                {movie.servers.map((server, idx) => (
                  <button
                    key={server.id}
                    onClick={() => {
                      setSelectedServer(server);
                      setIsPlaying(true);
                    }}
                    className={`px-3 py-1 rounded text-xs font-medium whitespace-nowrap transition-colors ${
                      selectedServer.id === server.id
                        ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                        : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                    }`}
                  >
                    Opción {idx + 1}: {server.name}
                  </button>
                ))}
              </div>

              {/* Audio and Quality Selector in Player Header */}
              <div className="hidden sm:flex items-center gap-2 shrink-0">
                <select
                  value={selectedAudio}
                  onChange={(e) => setSelectedAudio(e.target.value)}
                  className="bg-slate-800 text-[11px] text-slate-300 border border-slate-700 rounded px-2 py-1 focus:outline-none"
                >
                  {movie.audio.map(a => (
                    <option key={a} value={a}>{a}</option>
                  ))}
                </select>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-cyan-400 border border-cyan-500/30">
                  {selectedQuality}
                </span>
              </div>
            </div>

            {/* Video Canvas Container */}
            <div 
              ref={playerContainerRef}
              className="relative aspect-video w-full bg-slate-950 flex items-center justify-center group select-none"
            >
              {selectedServer.type === 'video' ? (
                <>
                  <video
                    ref={videoRef}
                    src={selectedServer.url}
                    poster={movie.backdropUrl}
                    className="w-full h-full object-contain cursor-pointer"
                    onClick={togglePlay}
                    onTimeUpdate={handleTimeUpdate}
                    onEnded={() => setIsPlaying(false)}
                    playsInline
                  />

                  {/* Watermark in corner like Cinemanía */}
                  <div className="absolute top-4 right-4 pointer-events-none opacity-50 flex items-center gap-1.5 bg-black/60 px-2 py-1 rounded backdrop-blur-sm">
                    <Film className="w-3 h-3 text-cyan-400" />
                    <span className="text-[10px] font-bold tracking-wider text-slate-200 uppercase">CINEMANÍA VIP</span>
                  </div>

                  {/* Big Play Overlay if paused */}
                  {!isPlaying && (
                    <div 
                      className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer"
                      onClick={togglePlay}
                    >
                      <div className="w-16 h-16 rounded-full bg-cyan-500/90 hover:bg-cyan-400 text-slate-950 flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:scale-105 transition-transform">
                        <Play className="w-7 h-7 fill-slate-950 ml-1" />
                      </div>
                    </div>
                  )}

                  {/* Custom Cinema Player Bottom Controls */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 pt-6 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col gap-2">
                    {/* Progress Scrubber */}
                    <input
                      type="range"
                      min={0}
                      max={duration || 180}
                      step={0.1}
                      value={currentTime}
                      onChange={handleSeek}
                      className="w-full h-1 bg-slate-700 accent-cyan-400 rounded-lg cursor-pointer"
                    />

                    {/* Controls Row */}
                    <div className="flex items-center justify-between text-xs text-white">
                      <div className="flex items-center gap-3">
                        <button onClick={togglePlay} className="hover:text-cyan-400 transition-colors">
                          {isPlaying ? <Pause className="w-4 h-4 fill-white" /> : <Play className="w-4 h-4 fill-white" />}
                        </button>
                        <button onClick={toggleMute} className="hover:text-cyan-400 transition-colors">
                          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                        </button>
                        <input
                          type="range"
                          min={0}
                          max={1}
                          step={0.05}
                          value={isMuted ? 0 : volume}
                          onChange={handleVolumeChange}
                          className="w-16 h-1 bg-slate-700 accent-cyan-400 cursor-pointer hidden sm:block"
                        />
                        <span className="text-[11px] font-mono text-slate-300">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span className="hidden sm:inline text-[11px] text-cyan-400 font-semibold">
                          {selectedAudio}
                        </span>
                        <button onClick={toggleFullScreen} className="hover:text-cyan-400 transition-colors">
                          <Maximize className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                /* YouTube Official Trailer / Embed Server */
                <iframe
                  src={selectedServer.url}
                  title={movie.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>

            {/* Cinecalidad Player Notice Banner */}
            <div className="bg-slate-900/90 px-4 py-2 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Audio original y latino sincronizado en estéreo y 5.1 canales sin cortes.</span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:inline">Servidor verificado</span>
            </div>
          </div>

          {/* Navigation Sub-Tabs within Modal: Descargas, Ficha Técnica, Comentarios */}
          <div className="border-b border-slate-800 flex items-center gap-2 pb-0">
            <button
              onClick={() => setActiveTab('reproductor')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors ${
                activeTab === 'reproductor'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Sinopsis & Opciones
            </button>
            <button
              onClick={() => setActiveTab('descargas')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'descargas'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Download className="w-3.5 h-3.5" />
              <span>Enlaces de Descarga (1 Link)</span>
            </button>
            <button
              onClick={() => setActiveTab('ficha')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'ficha'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <Info className="w-3.5 h-3.5" />
              <span>Ficha Técnica</span>
            </button>
            <button
              onClick={() => setActiveTab('comentarios')}
              className={`px-4 py-2.5 text-xs font-bold border-b-2 transition-colors flex items-center gap-1.5 ${
                activeTab === 'comentarios'
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Comentarios ({comments.length})</span>
            </button>
          </div>

          {/* TAB CONTENT: Sinopsis & Opciones */}
          {activeTab === 'reproductor' && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-300">
                  Sinopsis de {movie.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {movie.synopsis}
                </p>

                {/* Director & Cast */}
                <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
                  <div>
                    <span className="font-semibold text-slate-400">Director: </span>
                    <span className="text-slate-200 font-medium">{movie.director}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Reparto Principal: </span>
                    <span className="text-slate-200">{movie.cast.join(', ')}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-slate-400">Géneros: </span>
                    <span className="text-cyan-400 font-medium">{movie.genres.join(' · ')}</span>
                  </div>
                </div>
              </div>

              {/* Quick Download Card Box */}
              <div className="bg-slate-900/70 border border-slate-800 rounded-xl p-4 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2 text-cyan-400">
                    <Download className="w-4 h-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Descarga Directa</span>
                  </div>
                  <p className="text-xs text-slate-400 mb-3">
                    Película completa sin compresión con audio dual latino e inglés.
                  </p>
                  <div className="space-y-1.5 text-xs text-slate-300 mb-4">
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Peso:</span>
                      <span className="font-mono font-semibold">{movie.size}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Resolución:</span>
                      <span>{movie.resolution.split(' ')[0]}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-800">
                      <span className="text-slate-400">Contraseña:</span>
                      <span className="font-mono text-cyan-400 select-all">www.cinemania.is</span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setActiveTab('descargas')}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500 to-sky-500 hover:from-cyan-400 hover:to-sky-400 text-slate-950 font-bold text-xs rounded-lg shadow-sm transition-all text-center"
                >
                  Ver Todos los Enlaces de Descarga
                </button>
              </div>
            </div>
          )}

          {/* TAB CONTENT: Enlaces de Descarga */}
          {activeTab === 'descargas' && (
            <div className="space-y-5">
              <div className="bg-cyan-950/30 border border-cyan-800/40 rounded-xl p-3 text-xs text-cyan-300 flex items-center justify-between">
                <span>🔐 <strong>Contraseña para descomprimir:</strong> <code className="bg-slate-900 px-2 py-0.5 rounded text-white font-mono select-all">www.cinemania.is</code></span>
                <span className="hidden sm:inline text-slate-400">Recomendamos usar WinRAR v6+ o 7-Zip</span>
              </div>

              {/* Download Links Table */}
              <div className="border border-slate-800 rounded-xl overflow-hidden bg-slate-900/60">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-800/80 text-slate-400 font-semibold border-b border-slate-700/80">
                    <tr>
                      <th className="py-2.5 px-4">Servidor</th>
                      <th className="py-2.5 px-4">Calidad / Versión</th>
                      <th className="py-2.5 px-4">Tamaño</th>
                      <th className="py-2.5 px-4">Velocidad</th>
                      <th className="py-2.5 px-4 text-right">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800">
                    {movie.downloads.map((dl, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                        <td className="py-3 px-4 font-bold text-slate-200">
                          {dl.server}
                        </td>
                        <td className="py-3 px-4 text-cyan-300">
                          {dl.quality}
                        </td>
                        <td className="py-3 px-4 font-mono text-slate-300">
                          {dl.size}
                        </td>
                        <td className="py-3 px-4 text-emerald-400 font-medium">
                          {dl.speed}
                        </td>
                        <td className="py-3 px-4 text-right">
                          {dl.isTorrent ? (
                            <button
                              onClick={() => copyToClipboard(dl.url, `torrent_${idx}`)}
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-400 border border-slate-700 rounded-lg font-semibold transition-colors"
                            >
                              {copiedMagnet === `torrent_${idx}` ? (
                                <>
                                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                                  <span className="text-emerald-400">¡Copiado!</span>
                                </>
                              ) : (
                                <>
                                  <Copy className="w-3.5 h-3.5" />
                                  <span>Copiar Magnet</span>
                                </>
                              )}
                            </button>
                          ) : (
                            <a
                              href={dl.url}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 px-3 py-1.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-lg shadow-sm transition-all"
                            >
                              <span>Descargar</span>
                              <ExternalLink className="w-3 h-3" />
                            </a>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Media Player Advice */}
              <div className="text-xs text-slate-400 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                <span className="font-semibold text-slate-300">¿Problemas con el audio o subtítulos? </span>
                Para reproducir videos MKV en 4K UHD con pista Dolby Atmos o AC3 5.1, recomendamos usar <strong>VLC Media Player</strong>, <strong>MPC-HC</strong> o <strong>PotPlayer</strong> en PC y <strong>Nova Video Player</strong> en Smart TV.
              </div>
            </div>
          )}

          {/* TAB CONTENT: Ficha Técnica */}
          {activeTab === 'ficha' && (
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5">
              <h3 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">
                Especificaciones Técnicas del Archivo
              </h3>
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-xs">
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Título Original:</dt>
                  <dd className="text-slate-200 font-semibold">{movie.originalTitle}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Año de Lanzamiento:</dt>
                  <dd className="text-slate-200 font-semibold">{movie.year}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Duración:</dt>
                  <dd className="text-slate-200 font-semibold">{movie.duration}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Resolución:</dt>
                  <dd className="text-cyan-300 font-mono font-bold">{movie.resolution}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Códec de Video:</dt>
                  <dd className="text-slate-200 font-mono">{movie.codec}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Tamaño del Ripeo:</dt>
                  <dd className="text-slate-200 font-mono">{movie.size}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Pistas de Audio:</dt>
                  <dd className="text-slate-200 text-right">{movie.audio.join(', ')}</dd>
                </div>
                <div className="flex justify-between py-1.5 border-b border-slate-800">
                  <dt className="text-slate-400 font-medium">Subtítulos Incluidos:</dt>
                  <dd className="text-slate-200">Español Latino (Completos y Forzados), Inglés</dd>
                </div>
              </dl>
            </div>
          )}

          {/* TAB CONTENT: Comentarios y Reseñas */}
          {activeTab === 'comentarios' && (
            <div className="space-y-6">
              {/* Write a comment form */}
              <form onSubmit={handleAddComment} className="bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-3">
                <h4 className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Deja tu opinión sobre la película
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Tu Nombre o Alias:</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Juan Cinefilo"
                      value={newCommentName}
                      onChange={(e) => setNewCommentName(e.target.value)}
                      className="w-full bg-slate-800 text-xs text-slate-200 px-3 py-1.5 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1">Tu Puntuación:</label>
                    <div className="flex items-center gap-1.5 pt-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          type="button"
                          key={star}
                          onClick={() => setNewCommentRating(star)}
                          className="focus:outline-none"
                        >
                          <Star 
                            className={`w-5 h-5 ${
                              star <= newCommentRating 
                                ? 'text-amber-400 fill-amber-400' 
                                : 'text-slate-600'
                            }`} 
                          />
                        </button>
                      ))}
                      <span className="text-xs font-bold text-slate-300 ml-2">
                        {newCommentRating} / 5
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] text-slate-400 mb-1">Comentario o reporte de calidad:</label>
                  <textarea
                    required
                    rows={2}
                    placeholder="¿Qué te pareció la calidad del ripeo o la película?"
                    value={newCommentText}
                    onChange={(e) => setNewCommentText(e.target.value)}
                    className="w-full bg-slate-800 text-xs text-slate-200 px-3 py-2 rounded-lg border border-slate-700 focus:outline-none focus:border-cyan-500 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-lg transition-all flex items-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Publicar Comentario</span>
                </button>
              </form>

              {/* Comments List */}
              <div className="space-y-3">
                {comments.map((c) => (
                  <div key={c.id} className="p-3.5 rounded-xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-3">
                    <div className={`w-8 h-8 rounded-full ${c.avatarColor} text-white font-bold text-xs flex items-center justify-center shrink-0`}>
                      {c.userName.charAt(0).toUpperCase()}
                    </div>
                    <div className="flex-grow space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-200">{c.userName}</span>
                        <span className="text-[10px] text-slate-500">{c.date}</span>
                      </div>
                      <div className="flex items-center gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-3 h-3 ${i < c.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-700'}`} 
                          />
                        ))}
                      </div>
                      <p className="text-xs text-slate-300 leading-normal pt-1">{c.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Películas Similares / Relacionadas */}
          {relatedMovies.length > 0 && (
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Películas Recomendadas
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {relatedMovies.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectMovie(rel)}
                    className="group cursor-pointer rounded-lg overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all p-2 flex flex-col gap-2"
                  >
                    <div className="aspect-[2/3] overflow-hidden rounded bg-slate-950">
                      <img
                        src={rel.posterUrl}
                        alt={rel.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      />
                    </div>
                    <div>
                      <h5 className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 truncate">
                        {rel.title}
                      </h5>
                      <span className="text-[10px] text-slate-500">
                        {rel.year} · {rel.quality}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
