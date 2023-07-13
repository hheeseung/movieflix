import { ICreditProps } from "../api/api";
import { makeImagePath } from "../utils/utils";
import NoCredits from "../assets/no_credits_available.png";

export default function Credits({
  name,
  character,
  profile_path,
}: ICreditProps) {
  return (
    <li className="flex items-center space-x-2 shadow-md p-2 rounded-md">
      <img
        className="w-14 h-14 rounded-full object-cover"
        src={profile_path ? makeImagePath(profile_path) : NoCredits}
        alt={name}
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-gray-500">{character}</p>
      </div>
    </li>
  );
}
