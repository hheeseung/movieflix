import { IGetResultProps } from "../api/api";
import { makeImagePath } from "../utils/utils";

export default function ContentsSliderItem({
  id,
  poster_path,
  release_date,
  title,
}: IGetResultProps) {
  return (
    <div className="mr-2">
      <img
        className="text-center h-96"
        src={makeImagePath(poster_path, "w300")}
        alt={title}
      />
      <div>
        <p>{title}</p>
        <p>{release_date.substring(0, 4)}</p>
      </div>
    </div>
  );
}
