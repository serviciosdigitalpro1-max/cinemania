export type QualityType = '4K UHD' | '1080p Bluray' | '720p HD';

export type AudioLanguage = 
  | 'Español Latino'
  | 'Español Latino 5.1'
  | 'Castellano'
  | 'Inglés Subtitulado'
  | 'Dual Latino';

export interface DownloadLink {
  server: string;
  quality: string;
  size: string;
  speed: string;
  password?: string;
  url: string;
  isTorrent?: boolean;
}

export interface StreamServer {
  id: string;
  name: string;
  quality: string;
  language: string;
  type: 'embed' | 'video' | 'trailer';
  url: string;
}

export interface Comment {
  id: string;
  userName: string;
  rating: number;
  date: string;
  text: string;
  avatarColor: string;
}

export interface Movie {
  id: string;
  title: string;
  originalTitle: string;
  year: number;
  duration: string;
  rating: number; // IMDb score e.g. 8.6
  quality: QualityType;
  audio: AudioLanguage[];
  resolution: string;
  codec: string;
  size: string;
  genres: string[];
  director: string;
  cast: string[];
  synopsis: string;
  posterUrl: string;
  backdropUrl: string;
  isFeatured?: boolean;
  isPremiere?: boolean;
  trailerYoutubeId: string;
  servers: StreamServer[];
  downloads: DownloadLink[];
  comments: Comment[];
}
