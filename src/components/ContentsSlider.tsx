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
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 6,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          arrows: false,
        },
      },
      {
        breakpoint: 720,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="mt-3 mb-8 px-2 lg:px-0">
      <h1 className="font-bold text-xl md:text-2xl mb-3">{title}</h1>
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
