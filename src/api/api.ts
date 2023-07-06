import axios from "axios";

export interface IGetResultProps {
  id: number;
  poster_path: string;
  release_date: string;
  title: string;
}

const BASE_URL = "https://api.themoviedb.org/3";
const LANGUAGE = "language=ko-KR&page=1&region=kr";

export async function getMovies() {
  const response = await axios.get(
    `${BASE_URL}/movie/now_playing?${LANGUAGE}&api_key=${process.env.REACT_APP_API_KEY}`
  );
  return response.data.results;
}
