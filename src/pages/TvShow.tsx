import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getAiringToday,
  getOnAirShow,
  getPopularShow,
  getTopRatedShow,
  IGetResult,
} from "../API";
import Banner from "../components/Banner";
import TvSlider from "../components/TvSlider";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function TvShow() {
  const { isLoading: onAirLoading, data: onAirData } = useQuery<IGetResult>(
    ["movies", "nowPlaying"],
    getOnAirShow
  );

  const { isLoading: airingLoading, data: airingTodayData } =
    useQuery<IGetResult>(["movies", "popular"], getAiringToday);

  const { isLoading: topRateShowLoading, data: topRatedShowData } =
    useQuery<IGetResult>(["movies", "topRated"], getTopRatedShow);

  const { isLoading: popularShowLoading, data: popularShowData } =
    useQuery<IGetResult>(["movies", "upcoming"], getPopularShow);

  return (
    <Wrapper>
      {onAirLoading &&
      airingLoading &&
      topRateShowLoading &&
      popularShowLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            backdropPath={onAirData?.results[0].backdrop_path}
            title={onAirData?.results[0].name}
            overview={onAirData?.results[0].overview}
          />
          <TvSlider data={airingTodayData} title="오늘 방송할 드라마" />
          <TvSlider data={onAirData} title="방영 중인 드라마" />
          <TvSlider data={topRatedShowData} title="평점 높은 드라마" />
          <TvSlider data={popularShowData} title="인기 드라마" />
        </>
      )}
    </Wrapper>
  );
}

export default TvShow;
