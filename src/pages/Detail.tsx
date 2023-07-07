import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  IGetDetailProps,
  IGetResultProps,
  getDetails,
  getSimilar,
} from "../api/api";
import { makeImagePath } from "../utils/utils";
import ContentsSlider from "../components/ContentsSlider";
import NoBanner from "../assets/no-banner.jpg";

export default function Detail() {
  const {
    state: { id },
    pathname,
  } = useLocation();
  const { isLoading, data } = useQuery<IGetDetailProps>(
    ["contentsId", id],
    () => getDetails(id, pathname.includes("tvshows") ? "tv" : "movie")
  );
  const { data: similar } = useQuery<IGetResultProps[]>(["similar", id], () =>
    getSimilar(id, pathname.includes("tvshows") ? "tv" : "movie")
  );

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <section className="mb-10">
            {data?.backdrop_path ? (
              <img
                className="w-full h-96 object-cover opacity-80"
                src={data && makeImagePath(data.backdrop_path)}
                alt={data?.name ?? data?.title}
              />
            ) : (
              <img src={NoBanner} alt="no-banner" />
            )}
            <div className="mt-8 flex">
              <img
                className="shadow-md"
                src={data && makeImagePath(data.poster_path, "w300")}
                alt={data?.name ?? data?.title}
              />
              <div className="ml-5 space-y-2">
                <h1 className="font-bold text-3xl">
                  {data?.title ?? data?.name}
                </h1>
                <h4 className="text-sm">
                  {data?.original_title ?? data?.original_name}
                </h4>
                <p>
                  {data?.runtime
                    ? `${Math.floor(data?.runtime! / 60)}시간 ${
                        data?.runtime! % 60
                      }분`
                    : null}
                </p>
                <p>
                  {data?.release_date?.substring(0, 4) ??
                    data?.first_air_date?.substring(0, 4)}
                </p>
                <div className="space-x-1">
                  {data?.genres.map((genre) => (
                    <span key={genre.id}>#{genre.name}</span>
                  ))}
                </div>

                <p>
                  {data?.overview ? data?.overview : "줄거리 정보가 없습니다."}
                </p>
              </div>
            </div>
          </section>
          {similar && <ContentsSlider title="비슷한 컨텐츠" data={similar} />}
        </>
      )}
    </>
  );
}
