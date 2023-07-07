import { Link, useLocation } from "react-router-dom";
import { IGetResultProps } from "../api/api";
import { makeImagePath } from "../utils/utils";

export default function ContentsSliderItem({
  id,
  poster_path,
  release_date,
  first_air_date,
  title,
  name,
}: IGetResultProps) {
  const { pathname } = useLocation();

  return (
    <div className="mr-4 hover:brightness-110 transition-all">
      <Link
        to={pathname.includes("tvshows") ? `/tvshows/${id}` : `/movies/${id}`}
        state={{ id }}
      >
        <img
          className="text-center h-96 rounded-md shadow-md"
          src={makeImagePath(poster_path, "w300")}
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
      </Link>
    </div>
  );
}
