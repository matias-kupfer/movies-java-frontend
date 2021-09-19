export interface ApiResponse {
  page: number;
  results: Results[];
  total_pages: number;
  total_results: number;
}

export interface Results {
  adult: boolean;
  backdropPath: String;
  genre_ids: number[];
  id: number;
  original_language: String;
  original_title: String;
  overview: String;
  popularity: number
  poster_path: String;
  release_date: String;
  title: String;
  video: boolean;
  vote_average: number;
  vote_count: number;
}
