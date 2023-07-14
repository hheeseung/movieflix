import { useRecoilValue } from "recoil";
import { likesAtom } from "../atoms/likes";
import ContentsSliderItem from "../components/ContentsSliderItem";
import { HelmetProvider, Helmet } from "react-helmet-async";

export default function Likes() {
  const likes = useRecoilValue(likesAtom);

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>MovieFlix</title>
        </Helmet>
      </HelmetProvider>
      <h1 className="mt-8 font-bold text-xl sm:text-2xl mb-3">찜한 목록</h1>
      {likes.length > 0 ? (
        <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {likes.map((item) => (
            <ContentsSliderItem
              key={item.id}
              id={item.id}
              poster_path={item.poster_path}
              title={item.title}
              name={item.name}
              release_date={item.release_date}
              first_air_date={item.first_air_date}
            />
          ))}
        </section>
      ) : (
        <p className="text-gray-500">찜한 컨텐츠가 없습니다.</p>
      )}
    </>
  );
}
