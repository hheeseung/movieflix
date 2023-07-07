import { IGetResultProps } from "../api/api";
import ContentsSliderItem from "./ContentsSliderItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

interface IContentsSlider {
  title: string;
  data: IGetResultProps[];
}

export default function ContentsSlider({ title, data }: IContentsSlider) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="mt-3 mb-8">
      <h1 className="font-bold text-2xl mb-3">{title}</h1>
      <ul>
        <Slider {...settings}>
          {data?.map((contents) => (
            <ContentsSliderItem
              key={contents.id}
              id={contents.id}
              poster_path={contents.poster_path}
              release_date={contents.release_date}
              first_air_date={contents.first_air_date}
              title={contents.title}
              name={contents.name}
            />
          ))}
        </Slider>
      </ul>
    </div>
  );
}
