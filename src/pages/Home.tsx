import { useQuery } from "react-query";
import styled from "styled-components";
import { getMovies, IGetMoviesResult } from "../API";
import Banner from "../components/Banner";

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
  const { isLoading, data } = useQuery<IGetMoviesResult>(
    ["movies", "nowPlaying"],
    getMovies
  );

  return (
    <Wrapper>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            backdropPath={data?.results[0].backdrop_path}
            title={data?.results[0].title}
            overview={data?.results[0].overview.slice(0, 150)}
          />
        </>
      )}
    </Wrapper>
  );
}

export default Home;
