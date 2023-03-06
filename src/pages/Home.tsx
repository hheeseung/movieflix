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
  const { isLoading: nowPlayingLoading, data: nowPlayingData } =
    useQuery<IGetMoviesResult>(["movies", "nowPlaying"], getMovies);

  const { data: popularData } = useQuery(["movies", "popular"], getPopular);

  const { data: topRatedData } = useQuery(["movies", "topRated"], getTopRated);

  const { data: upcomingData } = useQuery(["movies", "upcoming"], getUpcoming);

  return (
    <Wrapper>
      {nowPlayingLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            backdropPath={nowPlayingData?.results[0].backdrop_path}
            title={nowPlayingData?.results[0].title}
            overview={nowPlayingData?.results[0].overview}
          />
          {nowPlayingData && (
            <ContentsSlider title="상영 중인 영화" data={nowPlayingData} />
          )}
          {upcomingData && (
            <ContentsSlider title="개봉 예정 영화" data={upcomingData} />
          )}
          {topRatedData && (
            <ContentsSlider title="평점 높은 영화" data={topRatedData} />
          )}
          {popularData && (
            <ContentsSlider title="인기 영화" data={popularData} />
          )}
        </>
      )}
    </Wrapper>
  );
}

export default Home;
