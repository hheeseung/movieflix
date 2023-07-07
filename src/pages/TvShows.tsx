import { useQuery } from "@tanstack/react-query";
import {
  getOnTheAirShows,
  getPopularShows,
  getTopRatedShows,
  getTrendingShows,
  IGetResultProps,
} from "../api/api";
import ContentsSlider from "../components/ContentsSlider";

export default function TvShows() {
  const { isLoading: loadingOnTheAir, data: onTheAir } = useQuery<
    IGetResultProps[]
  >(["getShows", "onTheAir"], getOnTheAirShows);
  const { isLoading: loadingPopular, data: popular } = useQuery<
    IGetResultProps[]
  >(["getShows", "popular"], getPopularShows);
  const { isLoading: loadingTopRated, data: topRated } = useQuery<
    IGetResultProps[]
  >(["getShows", "topRated"], getTopRatedShows);
  const { isLoading: loadingTrending, data: trending } = useQuery<
    IGetResultProps[]
  >(["getShows", "trending"], getTrendingShows);

  const isLoading =
    loadingOnTheAir || loadingPopular || loadingTopRated || loadingTrending;

  return (
    <>
      {isLoading ? (
        <p className="h-screen flex justify-center items-center">Loading...</p>
      ) : (
        <>
          {onTheAir && (
            <ContentsSlider title="방영 중인 드라마" data={onTheAir} />
          )}
          {popular && <ContentsSlider title="인기 시리즈" data={popular} />}
          {topRated && (
            <ContentsSlider title="평점 높은 시리즈" data={topRated} />
          )}
          {trending && (
            <ContentsSlider title="입소문 자자한 시리즈" data={trending} />
          )}
        </>
      )}
    </>
  );
}
