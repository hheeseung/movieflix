import { Link } from "react-router-dom";
import { IGetResultProps } from "../api/api";
import { makeImagePath } from "../utils/utils";
import NoPoster from "../assets/no-poster.jpg";

export default function ContentsSliderItem({
  id,
  poster_path,
  release_date,
  first_air_date,
  title,
  name,
}: IGetResultProps) {
  return (
    <div className="mr-4">
      <Link to={title ? `/movies/${id}` : `/tvshows/${id}`} state={{ id }}>
        {poster_path ? (
          <img
            className="text-center h-96 rounded-md shadow-md border"
            src={makeImagePath(poster_path, "w300")}
            alt={title ?? name}
          />
        ) : (
          <img
            className="text-center h-96 rounded-md shadow-md"
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
      </Link>
    </div>
  );
}
