import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { IGetResultProps, getSearch } from "../api/api";
import Loading from "../components/Loading";
import ContentsSliderItem from "../components/ContentsSliderItem";

export default function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { isLoading, data } = useQuery<IGetResultProps[]>(
    ["search", keyword],
    () => getSearch(keyword!)
  );

  if (isLoading) return <Loading />;
  return (
    <>
      <p className="mt-4 text-center">"{keyword}"에 대한 검색 결과</p>
      {data?.find((item) => item.media_type === "movie") ? (
        <>
          <h1 className="px-2 md:px-0 mt-4 font-bold text-xl md:text-2xl mb-3">
            영화
          </h1>
          <section className="px-2 md:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
        </>
      ) : null}
      {data?.find((item) => item.media_type === "tv") ? (
        <>
          <h1 className="px-2 md:px-0 mt-4 font-bold text-xl md:text-2xl mb-3">
            TV
          </h1>
          <section className="px-2 md:px-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
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
      ) : null}
    </>
  );
}
