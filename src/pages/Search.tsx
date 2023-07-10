import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { IGetSearchProps, getSearch } from "../api/api";
import Loading from "../components/Loading";
import ContentsSliderItem from "../components/ContentsSliderItem";

export default function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { isLoading, data } = useQuery<IGetSearchProps[]>(
    ["search", keyword],
    () => getSearch(keyword!)
  );

  if (isLoading) return <Loading />;
  return (
    <>
      <h1 className="mt-4 font-bold text-2xl mb-3">영화</h1>
      <section className="grid grid-cols-6">
        {data?.map(
          (contents) =>
            contents.media_type === "movie" && (
              <ContentsSliderItem
                key={contents.id}
                id={contents.id}
                poster_path={contents.poster_path}
                release_date={contents.release_date}
                title={contents.title}
              />
            )
        )}
      </section>
      <hr className="my-4" />
      <h1 className="font-bold text-2xl mb-3">TV</h1>
      <section className="grid grid-cols-6">
        {data?.map(
          (contents) =>
            contents.media_type === "tv" && (
              <ContentsSliderItem
                key={contents.id}
                id={contents.id}
                poster_path={contents.poster_path}
                first_air_date={contents.first_air_date}
                name={contents.name}
              />
            )
        )}
      </section>
    </>
  );
}
