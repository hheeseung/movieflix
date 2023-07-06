import { useQuery } from "@tanstack/react-query";
import { getMovies, IGetResultProps } from "../api/api";
import ContentsSlider from "../components/ContentsSlider";

export default function Movies() {
  const { isLoading, data } = useQuery<IGetResultProps[]>(
    ["getMovies", "nowPlaying"],
    getMovies
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        data && <ContentsSlider title="현재 상영작" data={data} />
      )}
    </>
  );
}
