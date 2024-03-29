import { useQuery } from "@tanstack/react-query";
import {
  getOnTheAirShows,
  getPopular,
  getTopRated,
  getTrending,
  IGetResultProps,
} from "../api/api";
import ContentsSlider from "../components/ContentsSlider";
import Loading from "../components/Loading";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function TvShows() {
  const { isLoading: loadingOnTheAir, data: onTheAir } = useQuery<
    IGetResultProps[]
  >(["getShows", "onTheAir"], getOnTheAirShows);
  const { isLoading: loadingPopular, data: popular } = useQuery<
    IGetResultProps[]
  >(["getShows", "popular"], () => getPopular("tv"));
  const { isLoading: loadingTopRated, data: topRated } = useQuery<
    IGetResultProps[]
  >(["getShows", "topRated"], () => getTopRated("tv"));
  const { isLoading: loadingTrending, data: trending } = useQuery<
    IGetResultProps[]
  >(["getShows", "trending"], () => getTrending("tv"));

  const isLoading =
    loadingOnTheAir || loadingPopular || loadingTopRated || loadingTrending;

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
            {popular && <ContentsSlider title="인기 시리즈" data={popular} />}
            {topRated && (
              <ContentsSlider title="평점 높은 시리즈" data={topRated} />
            )}
            {trending && (
              <ContentsSlider title="입소문 자자한 시리즈" data={trending} />
            )}
            {onTheAir && (
              <ContentsSlider title="방영 중인 TV 시리즈" data={onTheAir} />
            )}
          </>
        )}
      </section>
    </>
  );
}
