import axios from "axios";

export interface IGetResultProps {
  id: number;
  poster_path: string;
  release_date?: string;
  first_air_date?: string;
  title?: string;
  name?: string;
}

export interface IGetDetailProps {
  id: number;
  backdrop_path: string;
  poster_path: string;
  name?: string;
  original_name?: string;
  title?: string;
  original_title?: string;
  overview: string;
  genres: IGenres[];
  release_date?: string;
  first_air_date?: string;
  runtime?: number;
}

export interface IGenres {
  id: number;
  name: string;
}

const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "language=ko-KR&page=1&region=kr";

// Movie
export async function getMovies() {
  const response = await axios.get(
    `${BASE_URL}/movie/now_playing?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getPopularMovies() {
  const response = await axios.get(
    `${BASE_URL}/movie/popular?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getTopRatedMovies() {
  const response = await axios.get(
    `${BASE_URL}/movie/top_rated?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getTrendingMovies() {
  const response = await axios.get(
    `${BASE_URL}/trending/movie/day?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

// TV
export async function getOnTheAirShows() {
  const response = await axios.get(
    `${BASE_URL}/tv/airing_today?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getPopularShows() {
  const response = await axios.get(
    `${BASE_URL}/tv/popular?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getTopRatedShows() {
  const response = await axios.get(
    `${BASE_URL}/tv/top_rated?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getTrendingShows() {
  const response = await axios.get(
    `${BASE_URL}/trending/tv/day?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getDetails(id: number, method: string) {
  const response = await axios.get(
    `${BASE_URL}/${method}/${id}?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
}

export async function getSearch(keyword: string) {
  const response = await axios.get(
    `${BASE_URL}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&${LANGUAGE}`
  );
  return await response.data;
}
