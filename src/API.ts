const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_PATH = "https://api.themoviedb.org/3";
const LANGUAGE_REGION = "language=ko-KR&page=1&region=kr";

interface IMovie {
  backdrop_path: string;
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?: string;
}

export interface IGetResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export interface ISearchResult {
  id: number;
  name?: string;
  title?: string;
  backdrop_path: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  original_title: string;
  release_date?: string; // 영화
  first_air_date?: string; // 시리즈
}

export interface IGetSearch {
  page: number;
  results: ISearchResult[];
  total_pages: number;
  total_results: number;
  dates: string;
}

export async function getMovies() {
  const response = await fetch(
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getPopular() {
  const response = await fetch(
    `${BASE_PATH}/movie/popular?api_key=${API_KEY}&${LANGUAGE_REGION}`
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

export async function getOnAirShow() {
  const response = await fetch(
    `${BASE_PATH}/tv/on_the_air?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getAiringToday() {
  const response = await fetch(
    `${BASE_PATH}/tv/airing_today?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getPopularShow() {
  const response = await fetch(
    `${BASE_PATH}/tv/popular?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getTopRatedShow() {
  const response = await fetch(
    `${BASE_PATH}/tv/top_rated?api_key=${API_KEY}&${LANGUAGE_REGION}`
  );
  return await response.json();
}

export async function getSearch(keyword: string) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/multi?api_key=${API_KEY}&query=${keyword}&${LANGUAGE_REGION}`
  );
  return await response.json();
}
