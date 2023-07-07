import { useQuery } from "@tanstack/react-query";
import {
  getMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTrendingMovies,
  IGetResultProps,
} from "../api/api";
import ContentsSlider from "../components/ContentsSlider";

export default function Movies() {
  const { isLoading: loadingNowPlaying, data: nowPlaying } = useQuery<
    IGetResultProps[]
  >(["getMovies", "nowPlaying"], getMovies);
  const { isLoading: loadingPopular, data: popular } = useQuery<
    IGetResultProps[]
  >(["getMovies", "popular"], getPopularMovies);
  const { isLoading: loadingTopRated, data: topRated } = useQuery<
    IGetResultProps[]
  >(["getMovies", "topRated"], getTopRatedMovies);
  const { isLoading: loadingTrending, data: trending } = useQuery<
    IGetResultProps[]
  >(["getMovies", "trending"], getTrendingMovies);

  const isLoading =
    loadingNowPlaying || loadingPopular || loadingTopRated || loadingTrending;

  return (
    <>
      {isLoading ? (
        <p className="h-screen flex justify-center items-center">Loading...</p>
      ) : (
        <>
          {nowPlaying && (
            <ContentsSlider title="현재 상영작" data={nowPlaying} />
          )}
          {popular && <ContentsSlider title="인기 있는 영화" data={popular} />}
          {topRated && (
            <ContentsSlider title="평점 높은 영화" data={topRated} />
          )}
          {trending && (
            <ContentsSlider title="입소문 자자한 영화" data={trending} />
          )}
        </>
      )}
    </>
  );
}
