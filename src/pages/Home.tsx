import { useQuery } from "react-query";
import styled from "styled-components";
import {
  getMovies,
  getPopular,
  getTopRated,
  getUpcoming,
  IGetMoviesResult,
} from "../API";
import Banner from "../components/Banner";
import ContentsSlider from "../components/ContentsSlider";

const Wrapper = styled.div`
  background: black;
`;

const Loader = styled.div`
  height: 20vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Home() {
  const { isLoading: nowLoading, data: nowData } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  const { isLoading: popularLoading, data: popularData } =
    useQuery<IGetMoviesResult>(["movies", "popular"], getPopular);

  const { isLoading: topRateLoading, data: topRatedData } =
    useQuery<IGetMoviesResult>(["movies", "topRated"], getTopRated);

  const { isLoading: upcomingLoading, data: upcomingData } =
    useQuery<IGetMoviesResult>(["movies", "upcoming"], getUpcoming);

  return (
    <Wrapper>
      {nowLoading && popularLoading && topRateLoading && upcomingLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            backdropPath={nowData?.results[0].backdrop_path}
            title={nowData?.results[0].title}
            overview={nowData?.results[0].overview}
          />
          <ContentsSlider data={nowData} title="상영 중인 영화" />
          <ContentsSlider data={popularData} title="인기 영화" />
          <ContentsSlider data={topRatedData} title="평점 높은 영화" />
          <ContentsSlider data={upcomingData} title="개봉 예정 영화" />
        </>
      )}
    </Wrapper>
  );
}

export default Home;
