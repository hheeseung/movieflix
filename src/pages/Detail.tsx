import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";
import { IGetDetailProps, getDetails } from "../api/api";

export default function Detail() {
  const {
    state: { id },
    pathname,
  } = useLocation();
  const { data } = useQuery<IGetDetailProps[]>(["contentsId"], () =>
    getDetails(id, pathname.includes("tvshows") ? "tv" : "movie")
  );
  console.log(data);

  return <div>Detail</div>;
}
