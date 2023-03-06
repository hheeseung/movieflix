const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";
const LANGUAGE_REGION = "language=ko-KR&page=1&region=kr";

interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  title: string;
}

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export async function getMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getLatest() {
  const response = await fetch(
    `${BASE_PATH}/movie/latest?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getTopRated() {
  const response = await fetch(
    `${BASE_PATH}/movie/top_rated?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getUpcoming() {
  const response = await fetch(
    `${BASE_PATH}/movie/upcoming?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}
