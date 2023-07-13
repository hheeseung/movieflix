import { useQuery } from "@tanstack/react-query";
import {
  getMovies,
  getPopular,
  getTopRated,
  getTrending,
  IGetResultProps,
} from "../api/api";
import ContentsSlider from "../components/ContentsSlider";
import Loading from "../components/Loading";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Movies() {
  const { isLoading: loadingNowPlaying, data: nowPlaying } = useQuery<
    IGetResultProps[]
  >(["getMovies", "nowPlaying"], getMovies);
  const { isLoading: loadingPopular, data: popular } = useQuery<
    IGetResultProps[]
  >(["getMovies", "popular"], () => getPopular("movie"));
  const { isLoading: loadingTopRated, data: topRated } = useQuery<
    IGetResultProps[]
  >(["getMovies", "topRated"], () => getTopRated("movie"));
  const { isLoading: loadingTrending, data: trending } = useQuery<
    IGetResultProps[]
  >(["getMovies", "trending"], () => getTrending("movie"));

  const isLoading =
    loadingNowPlaying || loadingPopular || loadingTopRated || loadingTrending;

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>MovieFlix</title>
        </Helmet>
      </HelmetProvider>
      <section className="mt-8">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {nowPlaying && (
              <ContentsSlider title="현재 상영작" data={nowPlaying} />
            )}
            {popular && (
              <ContentsSlider title="인기 있는 영화" data={popular} />
            )}
            {topRated && (
              <ContentsSlider title="평점 높은 영화" data={topRated} />
            )}
            {trending && (
              <ContentsSlider title="입소문 자자한 영화" data={trending} />
            )}
          </>
        )}
      </section>
    </>
  );
}
