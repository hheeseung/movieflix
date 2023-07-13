import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import {
  ICreditProps,
  IGetDetailProps,
  IGetResultProps,
  getCredits,
  getDetails,
  getSimilar,
} from "../api/api";
import { makeImagePath } from "../utils/utils";
import ContentsSlider from "../components/ContentsSlider";
import NoBanner from "../assets/no-banner.png";
import NoPoster from "../assets/no-poster.jpg";
import Loading from "../components/Loading";
import LikesButton from "../components/LikesButton";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Credits from "../components/Credits";

export default function Detail() {
  const {
    state: { id },
    pathname,
  } = useLocation();
  const { isLoading, data } = useQuery<IGetDetailProps>(
    ["contentsId", id],
    () => getDetails(id, pathname.includes("tvshows") ? "tv" : "movie")
  );
  const { data: credits } = useQuery<ICreditProps[]>(["credits", id], () =>
    getCredits(id, pathname.includes("tvshows") ? "tv" : "movie")
  );
  const { data: similar } = useQuery<IGetResultProps[]>(["similar", id], () =>
    getSimilar(id, pathname.includes("tvshows") ? "tv" : "movie")
  );

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{data ? data?.name || data?.title : "Loading..."}</title>
        </Helmet>
      </HelmetProvider>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <section className="mb-10">
            <img
              className="w-full h-96 object-cover opacity-80"
              src={
                data && data.backdrop_path
                  ? makeImagePath(data.backdrop_path)
                  : NoBanner
              }
              alt={data?.name || data?.title}
            />
            <div className="mt-8 flex">
              <img
                className={data?.poster_path ? "shadow-md" : "w-[300px]"}
                src={
                  data && data?.poster_path
                    ? makeImagePath(data.poster_path, "w300")
                    : NoPoster
                }
                alt={data?.name || data?.title}
              />
              <div className="ml-5 space-y-2">
                <h1 className="font-bold text-3xl">
                  {data?.title || data?.name}
                </h1>
                <h4 className="text-sm">
                  {data?.original_title || data?.original_name}
                </h4>
                <p>
                  {data?.runtime
                    ? `${Math.floor(data?.runtime! / 60)}시간 ${
                        data?.runtime! % 60
                      }분`
                    : null}
                </p>
                <p>
                  {data?.release_date?.substring(0, 4) ||
                    data?.first_air_date?.substring(0, 4)}
                </p>
                <div className="space-x-1">
                  {data?.genres.map((genre) => (
                    <span key={genre.id}>#{genre.name}</span>
                  ))}
                </div>
                <LikesButton
                  id={data?.id!}
                  poster_path={data?.poster_path!}
                  title={data?.title}
                  name={data?.name}
                  release_date={data?.release_date}
                  first_air_date={data?.first_air_date}
                />
                <p>{data?.overview || "줄거리 정보가 없습니다."}</p>
              </div>
            </div>
            <div>
              <h1 className="my-8 font-bold text-2xl">출연</h1>
              <ul className="grid grid-cols-5 gap-4">
                {credits && credits.length > 0 ? (
                  credits
                    .slice(0, 10)
                    .map((credit) => <Credits key={credit.id} {...credit} />)
                ) : (
                  <p className="text-gray-500">출연진 정보가 없습니다.</p>
                )}
              </ul>
            </div>
          </section>
          {similar && similar.length > 0 ? (
            <ContentsSlider title="비슷한 컨텐츠" data={similar} />
          ) : null}
        </>
      )}
    </>
  );
}
