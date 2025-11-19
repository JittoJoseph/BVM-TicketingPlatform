export interface Movie {
  id: string;
  title: string;
  description: string;
  poster_url: string;
  duration: string;
  genre: string;
  rating: string;
  created_at?: string;
}

export interface Showtime {
  id: string;
  movie_id: string;
  start_time: string; // ISO string
  price: number;
  is_active: boolean;
  created_at?: string;
}

export interface Booking {
  id: string;
  showtime_id: string;
  seats: string[];
  user_name: string;
  user_email: string;
  user_phone: string;
  amount: number;
  status: 'pending' | 'confirmed' | 'failed';
  created_at: string;
}

export interface MovieWithShowtimes extends Movie {
  showtimes?: Showtime[];
}
