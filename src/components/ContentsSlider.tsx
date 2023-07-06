import { IGetResultProps } from "../api/api";
import ContentsSliderItem from "./ContentsSliderItem";

interface IContentsSlider {
  title: string;
  data: IGetResultProps[];
}

export default function ContentsSlider({ title, data }: IContentsSlider) {
  return (
    <>
      <h1>{title}</h1>
      <ul className="flex flex-wrap justify-evenly items-center">
        {data?.map((movie) => (
          <ContentsSliderItem
            key={movie.id}
            id={movie.id}
            poster_path={movie.poster_path}
            release_date={movie.release_date}
            title={movie.title}
          />
        ))}
      </ul>
    </>
  );
}
