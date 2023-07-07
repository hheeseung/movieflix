import { Link } from "react-router-dom";
import { IGetResultProps } from "../api/api";
import { makeImagePath } from "../utils/utils";

export default function ContentsSliderItem({
  id,
  poster_path,
  release_date,
  title,
}: IGetResultProps) {
  return (
    <div className="mr-4 hover:brightness-110 transition-all">
      <Link to={`/movies/${id}`}>
        <img
          className="text-center h-96 rounded-md shadow-md"
          src={makeImagePath(poster_path, "w300")}
          alt={title}
        />
        <div className="p-2">
          <p className="font-semibold line-clamp-1">{title}</p>
          <p className="text-sm text-gray-500">
            {release_date.substring(0, 4)}
          </p>
        </div>
      </Link>
    </div>
  );
}
