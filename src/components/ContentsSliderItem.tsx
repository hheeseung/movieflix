import { useNavigate } from "react-router-dom";
import { IGetResultProps } from "../api/api";
import { makeImagePath } from "../utils/utils";
import NoPoster from "../assets/no-poster.jpg";
import { scrollToTop } from "../utils/scrollToTop";

export default function ContentsSliderItem({
  id,
  poster_path,
  release_date,
  first_air_date,
  title,
  name,
}: IGetResultProps) {
  const navigate = useNavigate();
  const onClick = () => {
    if (title) {
      navigate(`/movies/${id}`, { state: { id } });
    } else {
      navigate(`/tvshows/${id}`, { state: { id } });
    }
    scrollToTop();
  };

  return (
    <div className="mr-2">
      <div onClick={onClick} className="cursor-pointer">
        <img
          className="h-64 sm:h-72 md:h-80 rounded-md shadow-md border"
          src={poster_path ? makeImagePath(poster_path, "w300") : NoPoster}
          alt={title ?? name}
        />
        <div className="p-2">
          <p className="font-semibold line-clamp-1">{title ?? name}</p>
          <p className="text-sm text-gray-500">
            {release_date
              ? release_date.substring(0, 4)
              : first_air_date?.substring(0, 4)}
          </p>
        </div>
      </div>
    </div>
  );
}
