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

export async function getMovies() {
  const response = await axios.get(
    `${BASE_URL}/movie/now_playing?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getOnTheAirShows() {
  const response = await axios.get(
    `${BASE_URL}/tv/airing_today?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getPopular(type: string) {
  const response = await axios.get(
    `${BASE_URL}/${type}/popular?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getTopRated(type: string) {
  const response = await axios.get(
    `${BASE_URL}/${type}/top_rated?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getTrending(type: string) {
  const response = await axios.get(
    `${BASE_URL}/trending/${type}/day?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getDetails(id: number, type: string) {
  const response = await axios.get(
    `${BASE_URL}/${type}/${id}?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data;
}

export async function getSimilar(id: number, type: string) {
  const response = await axios.get(
    `${BASE_URL}/${type}/${id}/similar?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}

export async function getSearch(keyword: string) {
  const response = await axios.get(
    `${BASE_URL}/search/multi?api_key=${process.env.REACT_APP_API_KEY}&query=${keyword}&${LANGUAGE}`
  );
  return await response.data;
}
