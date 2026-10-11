import { Movie } from '../types/movie';

export const MOVIES_DATA: Movie[] = [
  {
    id: 'duna-parte-dos',
    title: 'Duna: Parte Dos',
    originalTitle: 'Dune: Part Two',
    year: 2024,
    duration: '2h 46m',
    rating: 8.6,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Dual Latino', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K Ultra HD)',
    codec: 'HEVC / x265 10-bit HDR10',
    size: '14.8 GB',
    genres: ['Ciencia Ficción', 'Aventura', 'Acción', 'Drama'],
    director: 'Denis Villeneuve',
    cast: ['Timothée Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Javier Bardem', 'Austin Butler'],
    synopsis: 'Paul Atreides se une a Chani y a los Fremen mientras busca venganza contra los conspiradores que destruyeron a su familia. Ante la encrucijada de elegir entre el amor de su vida y el destino del universo conocido, emprende una cruzada para evitar un futuro terrible que solo él puede prever.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8b8R8l88Qje9dn9OE8PY05Nxl1X.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/xOMo8BRK7PfcJv9JCnx7s520b4q.jpg',
    isFeatured: true,
    isPremiere: true,
    trailerYoutubeId: 'Way9Dexny3w',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K Ultra (Cinemanía)', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: 's2', name: 'MegaVideo Latino HD', quality: '1080p', language: 'Español Latino', type: 'embed', url: 'https://www.youtube.com/embed/Way9Dexny3w?autoplay=1' },
      { id: 's3', name: 'StreamTape Rápido', quality: '1080p', language: 'Dual Latino', type: 'embed', url: 'https://www.youtube.com/embed/Way9Dexny3w?autoplay=1' },
      { id: 's4', name: 'Trailer Oficial IMAX', quality: '4K', language: 'Subtitulado', type: 'trailer', url: 'https://www.youtube.com/embed/Way9Dexny3w' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD 2160p HDR', size: '14.8 GB', speed: 'Ultra Rápida', password: 'www.cinemania.is', url: 'https://mega.nz/folder/dune2-cinemania-4k' },
      { server: 'Torrent Magnet', quality: '1080p Dual Latino Bluray', size: '4.8 GB', speed: 'P2P Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:3fa8294a8e2b83c0d8924bce3210492810cba721&dn=Dune.Part.Two.2024.1080p.Dual.Latino.Cinemania' },
      { server: '1Fichier', quality: '1080p Latino AC3', size: '4.2 GB', speed: 'Directo 1 Link', url: 'https://1fichier.com/?dune2-dual-cinemania' },
      { server: 'Google Drive VIP', quality: '4K UHD 60fps Remux', size: '18.2 GB', speed: 'Máxima', url: 'https://drive.google.com/open?id=cinemania-dune-2-4k' }
    ],
    comments: [
      { id: 'c1', userName: 'Carlos Cinefilo', rating: 5, date: 'Hace 2 días', text: 'Excelente calidad de video y el audio latino 5.1 suena impresionante en mi teatro en casa. Gracias Cinemanía por traer el mejor ripeo.', avatarColor: 'bg-cyan-600' },
      { id: 'c2', userName: 'Valeria M.', rating: 5, date: 'Hace 5 días', text: 'Obra maestra absoluta. Denis Villeneuve nunca falla. Descargado por Torrent en 10 minutos.', avatarColor: 'bg-emerald-600' }
    ]
  },
  {
    id: 'deadpool-wolverine',
    title: 'Deadpool & Wolverine',
    originalTitle: 'Deadpool & Wolverine',
    year: 2024,
    duration: '2h 08m',
    rating: 7.8,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K Ultra HD)',
    codec: 'HEVC / x265 10-bit',
    size: '12.4 GB',
    genres: ['Acción', 'Comedia', 'Ciencia Ficción'],
    director: 'Shawn Levy',
    cast: ['Ryan Reynolds', 'Hugh Jackman', 'Emma Corrin', 'Matthew Macfadyen', 'Morena Baccarin'],
    synopsis: 'Wade Wilson lleva una vida tranquila lejos de su época como Deadpool, pero cuando la Autoridad de Variación Temporal (TVA) amenaza su universo natal, debe asociarse con un reacio y quebrado Wolverine para salvarlo todo.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1jv8uaC.jpg',
    isFeatured: true,
    isPremiere: true,
    trailerYoutubeId: '73_1biulkYk',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K Ultra (Cinemanía)', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: 's2', name: 'MegaVideo Latino HD', quality: '1080p', language: 'Español Latino', type: 'embed', url: 'https://www.youtube.com/embed/73_1biulkYk?autoplay=1' },
      { id: 's3', name: 'StreamTape Rápido', quality: '1080p', language: 'Castellano', type: 'embed', url: 'https://www.youtube.com/embed/73_1biulkYk?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD 2160p', size: '12.4 GB', speed: 'Ultra Rápida', password: 'www.cinemania.is', url: 'https://mega.nz/folder/deadpool-wolverine-4k' },
      { server: 'Torrent Magnet', quality: '1080p Dual Latino Bluray', size: '3.9 GB', speed: 'P2P Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:deadpool32024bluraydual&dn=Deadpool.Wolverine.2024.1080p.Latino' },
      { server: '1Fichier', quality: '1080p Latino', size: '3.6 GB', speed: 'Directo 1 Link', url: 'https://1fichier.com/?deadpool-wolverine-dual' }
    ],
    comments: [
      { id: 'c1', userName: 'Marcos_R', rating: 5, date: 'Ayer', text: 'Divertidísima de principio a fin, los cameos son legendarios. Gran trabajo con el audio latino sin censura.', avatarColor: 'bg-red-600' }
    ]
  },
  {
    id: 'intensamente-2',
    title: 'Intensamente 2',
    originalTitle: 'Inside Out 2',
    year: 2024,
    duration: '1h 36m',
    rating: 7.7,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit',
    size: '9.2 GB',
    genres: ['Animación', 'Aventura', 'Comedia', 'Familia'],
    director: 'Kelsey Mann',
    cast: ['Amy Poehler', 'Maya Hawke', 'Kensington Tallman', 'Liza Lapira', 'Tony Hale'],
    synopsis: 'Riley entra en la adolescencia y el cuartel general de sus emociones sufre una repentina remodelación para hacer espacio a nuevos inquilinos: Ansiedad, Envidia, Ennui y Vergüenza, desafiando el equilibrio liderado por Alegría.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/stKGOmWZtiZ16Mm52Q8xR7bgZGF.jpg',
    isPremiere: true,
    trailerYoutubeId: 'LEjhY15eCx0',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K (Cinemanía)', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
      { id: 's2', name: 'MegaVideo Latino HD', quality: '1080p', language: 'Español Latino', type: 'embed', url: 'https://www.youtube.com/embed/LEjhY15eCx0?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD', size: '9.2 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/insideout2-4k' },
      { server: 'Torrent Magnet', quality: '1080p Dual Latino', size: '2.8 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:insideout2dual1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'Sofia G.', rating: 5, date: 'Hace 3 días', text: 'Me sentí muy identificada con Ansiedad. La animación en 4K se ve impecable.', avatarColor: 'bg-amber-600' }
    ]
  },
  {
    id: 'oppenheimer',
    title: 'Oppenheimer',
    originalTitle: 'Oppenheimer',
    year: 2023,
    duration: '3h 00m',
    rating: 8.9,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K Ultra HD IMAX)',
    codec: 'HEVC / x265 10-bit HDR10',
    size: '19.4 GB',
    genres: ['Drama', 'Historia', 'Biografía'],
    director: 'Christopher Nolan',
    cast: ['Cillian Murphy', 'Emily Blunt', 'Matt Damon', 'Robert Downey Jr.', 'Florence Pugh'],
    synopsis: 'La historia del físico estadounidense J. Robert Oppenheimer, director del Laboratorio de Los Álamos durante el Proyecto Manhattan y su papel crucial en el desarrollo de la bomba atómica que cambió el curso de la historia humana.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg',
    trailerYoutubeId: 'bK6ldnjE3Y0',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K IMAX', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
      { id: 's2', name: 'StreamTape 1080p', quality: '1080p', language: 'Subtitulado', type: 'embed', url: 'https://www.youtube.com/embed/bK6ldnjE3Y0?autoplay=1' }
    ],
    downloads: [
      { server: 'Torrent Magnet', quality: '4K IMAX Remux', size: '19.4 GB', speed: 'P2P Rápida', isTorrent: true, url: 'magnet:?xt=urn:btih:oppenheimer4kimaxcinemania' },
      { server: 'Mega.nz', quality: '1080p Dual Latino', size: '5.2 GB', speed: 'Directa', password: 'www.cinemania.is', url: 'https://mega.nz/oppenheimer-dual-1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'Rodrigo B.', rating: 5, date: 'Hace 1 semana', text: 'La banda sonora de Ludwig Göransson y el diseño sonoro en esta versión 5.1 son una locura.', avatarColor: 'bg-indigo-600' }
    ]
  },
  {
    id: 'alien-romulus',
    title: 'Alien: Romulus',
    originalTitle: 'Alien: Romulus',
    year: 2024,
    duration: '1h 59m',
    rating: 7.3,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Dual Latino', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit',
    size: '11.5 GB',
    genres: ['Terror', 'Ciencia Ficción', 'Suspenso'],
    director: 'Fede Álvarez',
    cast: ['Cailee Spaeny', 'David Jonsson', 'Archie Renaux', 'Isabela Merced', 'Spike Fearn'],
    synopsis: 'Mientras exploran las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores espaciales se encuentra cara a cara con la forma de vida más aterradora y letal del universo.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/b33nnKl1GSFbao4l3fZDDqsMx0F.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/9SSEUrSqhljBMzRe4aBTh17rUaC.jpg',
    isPremiere: true,
    trailerYoutubeId: 'x0XDEhP4MQs',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K Ultra', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
      { id: 's2', name: 'MegaVideo HD Latino', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/x0XDEhP4MQs?autoplay=1' }
    ],
    downloads: [
      { server: 'Torrent Magnet', quality: '4K UHD Dual', size: '11.5 GB', speed: 'P2P', isTorrent: true, url: 'magnet:?xt=urn:btih:alienromulus4kdual' },
      { server: 'Mega.nz', quality: '1080p Latino', size: '3.8 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/alien-romulus' }
    ],
    comments: [
      { id: 'c1', userName: 'Gaston_88', rating: 4, date: 'Hace 4 días', text: 'Regreso brutal a las raíces de la saga. Prácticos efectos y terror puro.', avatarColor: 'bg-zinc-700' }
    ]
  },
  {
    id: 'gladiador-2',
    title: 'Gladiador II',
    originalTitle: 'Gladiator II',
    year: 2024,
    duration: '2h 28m',
    rating: 7.2,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit',
    size: '13.1 GB',
    genres: ['Acción', 'Aventura', 'Drama', 'Historia'],
    director: 'Ridley Scott',
    cast: ['Paul Mescal', 'Pedro Pascal', 'Denzel Washington', 'Connie Nielsen', 'Joseph Quinn'],
    synopsis: 'Años después de presenciar la muerte del admirado héroe Máximo a manos de su tío, Lucio debe ingresar al Coliseo después de que su hogar sea conquistado por los tiránicos emperadores que ahora gobiernan Roma con mano de hierro.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/2cxhvwyEwRlysAmRH4iodkvo0z5.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/euYIwmwkmz95mnEx7vG5vtI49eo.jpg',
    isPremiere: true,
    trailerYoutubeId: '4rgYUipGJNo',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K Ultra', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: 's2', name: 'Drive VIP Rápido', quality: '1080p', language: 'Dual Latino', type: 'embed', url: 'https://www.youtube.com/embed/4rgYUipGJNo?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD 2160p', size: '13.1 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/gladiator-2-4k' },
      { server: 'Torrent Magnet', quality: '1080p Dual Latino', size: '4.4 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:gladiator2dual1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'LucioImperio', rating: 4, date: 'Hace 1 día', text: 'Denzel Washington se roba cada escena en la que aparece.', avatarColor: 'bg-amber-700' }
    ]
  },
  {
    id: 'interstellar',
    title: 'Interestelar',
    originalTitle: 'Interstellar',
    year: 2014,
    duration: '2h 49m',
    rating: 8.7,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K Ultra HD Remux)',
    codec: 'HEVC / x265 10-bit HDR',
    size: '18.6 GB',
    genres: ['Ciencia Ficción', 'Drama', 'Aventura'],
    director: 'Christopher Nolan',
    cast: ['Matthew McConaughey', 'Anne Hathaway', 'Jessica Chastain', 'Michael Caine', 'Matt Damon'],
    synopsis: 'Un grupo de científicos y exploradores espaciales viaja a través de un agujero de gusano cerca de Saturno en un intento por asegurar la supervivencia de la humanidad ante una Tierra al borde del colapso ecológico.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/rAiYTsqJJR0KP8UN8vCnZlhJW2B.jpg',
    trailerYoutubeId: 'zSWdZVtXT7E',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K Remux', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
      { id: 's2', name: 'MegaVideo Latino 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/zSWdZVtXT7E?autoplay=1' }
    ],
    downloads: [
      { server: 'Torrent Magnet', quality: '4K UHD HDR Remux', size: '18.6 GB', speed: 'P2P Rápido', isTorrent: true, url: 'magnet:?xt=urn:btih:interstellar4kremuxlatino' },
      { server: 'Mega.nz', quality: '1080p Bluray Dual', size: '4.6 GB', speed: 'Directo', password: 'www.cinemania.is', url: 'https://mega.nz/interstellar-1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'Cooper_99', rating: 5, date: 'Hace 3 semanas', text: 'Mi película favorita de todos los tiempos. La escena de las olas en 4K no tiene comparación.', avatarColor: 'bg-blue-600' }
    ]
  },
  {
    id: 'spider-man-across-spider-verse',
    title: 'Spider-Man: A Través del Spider-Verso',
    originalTitle: 'Spider-Man: Across the Spider-Verse',
    year: 2023,
    duration: '2h 20m',
    rating: 8.7,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit Dolby Vision',
    size: '13.5 GB',
    genres: ['Animación', 'Acción', 'Aventura', 'Ciencia Ficción'],
    director: 'Joaquim Dos Santos, Kemp Powers',
    cast: ['Shameik Moore', 'Hailee Steinfeld', 'Oscar Isaac', 'Jake Johnson', 'Daniel Kaluuya'],
    synopsis: 'Miles Morales es catapultado a través del Multiverso, donde se encuentra con un equipo de Spider-Gente encargados de proteger su existencia. Pero cuando los héroes chocan sobre cómo manejar una nueva amenaza, Miles debe redefinir lo que significa ser un héroe.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg',
    trailerYoutubeId: 'cqGjhVJWtEg',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K Dolby', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: 's2', name: 'StreamTape 1080p', quality: '1080p', language: 'Dual Latino', type: 'embed', url: 'https://www.youtube.com/embed/cqGjhVJWtEg?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD Dolby Vision', size: '13.5 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/spiderv2-4k' },
      { server: 'Torrent Magnet', quality: '1080p Bluray Dual', size: '3.8 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:spidermanacrossdual1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'GwenFan', rating: 5, date: 'Hace 1 mes', text: 'La animación más innovadora de la década. Visualmente perfecta.', avatarColor: 'bg-pink-600' }
    ]
  },
  {
    id: 'avatar-el-camino-del-agua',
    title: 'Avatar: El Camino del Agua',
    originalTitle: 'Avatar: The Way of Water',
    year: 2022,
    duration: '3h 12m',
    rating: 7.6,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '3840x2160 (4K HFR 3D/2D)',
    codec: 'HEVC / x265 10-bit',
    size: '17.2 GB',
    genres: ['Ciencia Ficción', 'Aventura', 'Acción'],
    director: 'James Cameron',
    cast: ['Sam Worthington', 'Zoe Saldaña', 'Sigourney Weaver', 'Stephen Lang', 'Kate Winslet'],
    synopsis: 'Jake Sully y Neytiri han formado una familia y hacen todo lo posible por permanecer juntos. Sin embargo, deben abandonar su hogar y explorar las regiones acuáticas de Pandora cuando resurge una antigua amenaza.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg',
    trailerYoutubeId: 'd9MyW72ELq0',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K HFR', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: 's2', name: 'MegaVideo 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/d9MyW72ELq0?autoplay=1' }
    ],
    downloads: [
      { server: 'Torrent Magnet', quality: '4K UHD HFR', size: '17.2 GB', speed: 'P2P', isTorrent: true, url: 'magnet:?xt=urn:btih:avatarwayofwater4kdual' },
      { server: '1Fichier', quality: '1080p Latino', size: '5.1 GB', speed: 'Directo', url: 'https://1fichier.com/?avatar2-cinemania' }
    ],
    comments: [
      { id: 'c1', userName: 'PandoraTraveler', rating: 5, date: 'Hace 2 meses', text: 'Los paisajes oceánicos son otro nivel de fotorrealismo.', avatarColor: 'bg-teal-600' }
    ]
  },
  {
    id: 'john-wick-4',
    title: 'John Wick 4',
    originalTitle: 'John Wick: Chapter 4',
    year: 2023,
    duration: '2h 49m',
    rating: 7.7,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit',
    size: '14.0 GB',
    genres: ['Acción', 'Crimen', 'Suspenso'],
    director: 'Chad Stahelski',
    cast: ['Keanu Reeves', 'Donnie Yen', 'Bill Skarsgård', 'Laurence Fishburne', 'Hiroyuki Sanada'],
    synopsis: 'John Wick descubre un camino para derrotar a la Alta Mesa. Pero antes de poder ganar su libertad, debe enfrentarse a un nuevo enemigo con poderosas alianzas en todo el mundo y fuerzas que convierten a viejos amigos en adversarios.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/gh2bmprLtUQ8o9v5m6qvcu2e9Zy.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/7I6VUdPj6tQECNHdviJkUHD2389.jpg',
    trailerYoutubeId: 'qEVUtrk8_B4',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
      { id: 's2', name: 'Drive VIP 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/qEVUtrk8_B4?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD', size: '14.0 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/johnwick4-4k' },
      { server: 'Torrent Magnet', quality: '1080p Dual Latino', size: '4.2 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:johnwick4latino1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'BabaYaga', rating: 5, date: 'Hace 3 semanas', text: 'La secuencia en las escaleras de París y la toma cenital con escopeta de aliento de dragón son cine puro.', avatarColor: 'bg-zinc-800' }
    ]
  },
  {
    id: 'furiosa-mad-max',
    title: 'Furiosa: De la Saga Mad Max',
    originalTitle: 'Furiosa: A Mad Max Saga',
    year: 2024,
    duration: '2h 28m',
    rating: 7.5,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Dual Latino'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit',
    size: '12.8 GB',
    genres: ['Acción', 'Aventura', 'Ciencia Ficción'],
    director: 'George Miller',
    cast: ['Anya Taylor-Joy', 'Chris Hemsworth', 'Tom Burke', 'Lachy Hulme', 'Alyla Browne'],
    synopsis: 'Al caer el mundo, la joven Furiosa es arrebatada del Lugar Verde de Muchas Madres y cae en manos de una gran Horda de Motociclistas liderada por el Señor de la Guerra Dementus. Deberá sobrevivir a duras pruebas para encontrar el camino de regreso a casa.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/iADOJ8Zymht2JPMoy3R7xUMZqaC.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/wNAhuOZ3Zf84jCI5TeTVlYkfvnH.jpg',
    isPremiere: true,
    trailerYoutubeId: 'XJMuhwVwca4',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
      { id: 's2', name: 'StreamTape 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/XJMuhwVwca4?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD', size: '12.8 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/furiosa-4k' },
      { server: 'Torrent Magnet', quality: '1080p Bluray', size: '3.9 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:furiosa2024latino' }
    ],
    comments: [
      { id: 'c1', userName: 'MotorHead', rating: 5, date: 'Hace 5 días', text: 'George Miller sigue siendo el rey absoluto de la acción práctica y desquiciada.', avatarColor: 'bg-orange-600' }
    ]
  },
  {
    id: 'godzilla-kong-nuevo-imperio',
    title: 'Godzilla y Kong: El Nuevo Imperio',
    originalTitle: 'Godzilla x Kong: The New Empire',
    year: 2024,
    duration: '1h 55m',
    rating: 6.2,
    quality: '1080p Bluray',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '1920x1080 (Full HD)',
    codec: 'AVC / x264',
    size: '4.1 GB',
    genres: ['Acción', 'Ciencia Ficción', 'Aventura'],
    director: 'Adam Wingard',
    cast: ['Rebecca Hall', 'Brian Tyree Henry', 'Dan Stevens', 'Kaylee Hottle', 'Alex Ferns'],
    synopsis: 'Una nueva amenaza colosal se oculta en lo más profundo de la Tierra Hueca, desafiando la existencia de los titanes y de la humanidad entera. Godzilla y Kong deben unirse para una batalla cataclísmica.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/bQ2ywkchCe02AcI25NtIyLiwhao.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/qrGtVFxaD8c7et0j3sjYgxavW2Z.jpg',
    trailerYoutubeId: 'lV1OOlGwExM',
    servers: [
      { id: 's1', name: 'MegaVideo Latino 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/lV1OOlGwExM?autoplay=1' },
      { id: 's2', name: 'Drive VIP 1080p', quality: '1080p', language: 'Latino', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '1080p Bluray', size: '4.1 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/godzillaxkong' },
      { server: 'Torrent Magnet', quality: '1080p Dual', size: '3.6 GB', speed: 'P2P', isTorrent: true, url: 'magnet:?xt=urn:btih:godzillakongdual1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'TitanLover', rating: 4, date: 'Hace 2 semanas', text: 'Pura diversión y peleas de monstruos gigantes sin descanso.', avatarColor: 'bg-emerald-700' }
    ]
  },
  {
    id: 'top-gun-maverick',
    title: 'Top Gun: Maverick',
    originalTitle: 'Top Gun: Maverick',
    year: 2022,
    duration: '2h 10m',
    rating: 8.3,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit HDR',
    size: '15.1 GB',
    genres: ['Acción', 'Drama'],
    director: 'Joseph Kosinski',
    cast: ['Tom Cruise', 'Miles Teller', 'Jennifer Connelly', 'Jon Hamm', 'Glen Powell'],
    synopsis: 'Después de más de treinta años de servicio como uno de los mejores aviadores de la Armada, Pete "Maverick" Mitchell se encuentra donde siempre quiso estar, empujando los límites como un valiente piloto de pruebas y entrenando a un destacamento de graduados de Top Gun.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/62HCnUTziyWcpDaBO2i1DX17ljH.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/AaV1YIdWKnjAiaOe0UUKNJm322h.jpg',
    trailerYoutubeId: 'qSqVVQua478',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
      { id: 's2', name: 'StreamTape 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/qSqVVQua478?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD', size: '15.1 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/topgunmaverick4k' },
      { server: 'Torrent Magnet', quality: '1080p Dual Latino', size: '4.5 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:topgunmaverickdual' }
    ],
    comments: [
      { id: 'c1', userName: 'TomFanatic', rating: 5, date: 'Hace 1 mes', text: 'El sonido de los turborreactores en 5.1 hace temblar la sala. Una joya técnica.', avatarColor: 'bg-sky-700' }
    ]
  },
  {
    id: 'super-mario-bros-pelicula',
    title: 'Super Mario Bros: La Película',
    originalTitle: 'The Super Mario Bros. Movie',
    year: 2023,
    duration: '1h 32m',
    rating: 7.0,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Dual Latino'],
    resolution: '3840x2160 (4K)',
    codec: 'HEVC / x265 10-bit',
    size: '8.8 GB',
    genres: ['Animación', 'Aventura', 'Comedia', 'Familia'],
    director: 'Aaron Horvath, Michael Jelenic',
    cast: ['Chris Pratt', 'Anya Taylor-Joy', 'Charlie Day', 'Jack Black', 'Keegan-Michael Key'],
    synopsis: 'Mientras trabajan bajo tierra reparando una tubería de agua, los plomeros de Brooklyn Mario y su hermano Luigi son transportados por una tubería misteriosa y vagan por un mundo mágico habitado por el Reino Champiñón.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/9n2tJBplPbgR2ca05hO5CKXwvr5.jpg',
    trailerYoutubeId: 'SvJwEiy2Wok',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
      { id: 's2', name: 'MegaVideo Latino 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/SvJwEiy2Wok?autoplay=1' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '4K UHD', size: '8.8 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/mariobros4k' },
      { server: 'Torrent Magnet', quality: '1080p Latino', size: '2.6 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:supermariobroslatino1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'Nintendero_MX', rating: 5, date: 'Hace 2 meses', text: 'El doblaje latino con las voces clásicas y la canción Peaches es insuperable.', avatarColor: 'bg-red-500' }
    ]
  },
  {
    id: 'the-batman',
    title: 'The Batman',
    originalTitle: 'The Batman',
    year: 2022,
    duration: '2h 56m',
    rating: 7.8,
    quality: '4K UHD',
    audio: ['Español Latino 5.1', 'Castellano', 'Inglés Subtitulado'],
    resolution: '3840x2160 (4K HDR)',
    codec: 'HEVC / x265 10-bit',
    size: '15.6 GB',
    genres: ['Acción', 'Crimen', 'Drama', 'Suspenso'],
    director: 'Matt Reeves',
    cast: ['Robert Pattinson', 'Zoë Kravitz', 'Paul Dano', 'Jeffrey Wright', 'Colin Farrell'],
    synopsis: 'En su segundo año luchando contra el crimen, Batman explora la corrupción existente en Gotham City y el vínculo de esta con su propia familia mientras persigue al Asertijo, un asesino en serie que tiene en la mira a la élite de Gotham.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
    trailerYoutubeId: 'fWQrd6cwJ0A',
    servers: [
      { id: 's1', name: 'Servidor VIP 4K', quality: '4K UHD', language: 'Latino 5.1', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4' },
      { id: 's2', name: 'MegaVideo Latino', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/fWQrd6cwJ0A?autoplay=1' }
    ],
    downloads: [
      { server: 'Torrent Magnet', quality: '4K UHD HDR', size: '15.6 GB', speed: 'P2P', isTorrent: true, url: 'magnet:?xt=urn:btih:thebatman4kdual' },
      { server: 'Mega.nz', quality: '1080p Dual Latino', size: '4.7 GB', speed: 'Directa', password: 'www.cinemania.is', url: 'https://mega.nz/thebatman1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'DetectiveGCPD', rating: 5, date: 'Hace 3 meses', text: 'La atmósfera detectivesca oscura y la fotografía con tonos rojos y negros es cine de autor.', avatarColor: 'bg-zinc-900' }
    ]
  },
  {
    id: 'pobres-criaturas',
    title: 'Pobres Criaturas',
    originalTitle: 'Poor Things',
    year: 2023,
    duration: '2h 21m',
    rating: 7.9,
    quality: '1080p Bluray',
    audio: ['Español Latino 5.1', 'Castellano', 'Inglés Subtitulado'],
    resolution: '1920x1080 (Full HD)',
    codec: 'AVC / x264',
    size: '4.6 GB',
    genres: ['Comedia', 'Drama', 'Ciencia Ficción', 'Romance'],
    director: 'Yorgos Lanthimos',
    cast: ['Emma Stone', 'Mark Ruffalo', 'Willem Dafoe', 'Ramy Youssef', 'Christopher Abbott'],
    synopsis: 'La increíble y fantástica evolución de Bella Baxter, una joven resucitada por el brillante y poco ortodoxo científico Dr. Godwin Baxter, deseosa de aprender y hambrienta de la mundanalidad que le falta.',
    posterUrl: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg',
    backdropUrl: 'https://image.tmdb.org/t/p/original/bQS43HSLZzMjZkcHJz4fGc7f0nA.jpg',
    trailerYoutubeId: 'RlbR5N6veqw',
    servers: [
      { id: 's1', name: 'MegaVideo Latino 1080p', quality: '1080p', language: 'Latino', type: 'embed', url: 'https://www.youtube.com/embed/RlbR5N6veqw?autoplay=1' },
      { id: 's2', name: 'Servidor VIP Subtitulado', quality: '1080p', language: 'Subtitulado', type: 'video', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' }
    ],
    downloads: [
      { server: 'Mega.nz', quality: '1080p Bluray', size: '4.6 GB', speed: 'Alta', password: 'www.cinemania.is', url: 'https://mega.nz/poorthings' },
      { server: 'Torrent Magnet', quality: '1080p Dual', size: '3.8 GB', speed: 'Ilimitada', isTorrent: true, url: 'magnet:?xt=urn:btih:poorthings1080p' }
    ],
    comments: [
      { id: 'c1', userName: 'CinemaLover', rating: 5, date: 'Hace 4 meses', text: 'Emma Stone merecidísima ganadora del Oscar. El vestuario y el arte son deslumbrantes.', avatarColor: 'bg-purple-700' }
    ]
  }
];

export const GENRES_LIST = [
  'Todos',
  'Acción',
  'Ciencia Ficción',
  'Aventura',
  'Comedia',
  'Drama',
  'Animación',
  'Terror',
  'Suspenso',
  'Historia'
];

export const YEARS_LIST = [
  'Todos los Años',
  '2024',
  '2023',
  '2022',
  'Clásicos'
];
