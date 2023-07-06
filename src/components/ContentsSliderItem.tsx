import { IGetResultProps } from "../api/api";
import { makeImagePath } from "../utils/utils";

export default function ContentsSliderItem({
  id,
  poster_path,
  release_date,
  title,
}: IGetResultProps) {
  return (
    <div>
      <img src={makeImagePath(poster_path, "w200")} alt={title} />
      <p>{release_date.substring(0, 4)}</p>
      <p>{title}</p>
    </div>
  );
}
