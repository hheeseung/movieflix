import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { IGetResultProps } from "../api/api";
import { useRecoilState } from "recoil";
import { likesAtom } from "../atoms/likes";

export default function LikesButton({
  id,
  poster_path,
  title,
  name,
  release_date,
  first_air_date,
}: IGetResultProps) {
  const [likes, setLikes] = useRecoilState(likesAtom);
  const likedContents = likes.find((contents) => contents.id === id);

  const handleLikes = () => {
    if (!likedContents) {
      setLikes((like) => [
        ...like,
        { id, poster_path, title, name, release_date, first_air_date },
      ]);
    } else {
      setLikes((like) => like.filter((item) => item.id !== id));
    }
  };

  return (
    <button className="w-fit text-xl" onClick={handleLikes}>
      {likedContents ? <AiFillHeart /> : <AiOutlineHeart />}
    </button>
  );
}
