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
    <div className="mr-4">
      <div onClick={onClick} className="cursor-pointer">
        {poster_path ? (
          <img
            className="text-center h-64 sm:h-72 md:h-80 rounded-md shadow-md border"
            src={makeImagePath(poster_path, "w300")}
            alt={title ?? name}
          />
        ) : (
          <img
            className="text-center h-64 sm:h-72 md:h-80 rounded-md shadow-md"
            src={NoPoster}
            alt="no-poster"
          />
        )}
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
