import { AiOutlineRight } from "react-icons/ai";

export default function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} bg-black`}
      style={{
        ...style,
        position: "absolute",
        right: "-30px",
      }}
      onClick={onClick}
    >
      <AiOutlineRight />
    </div>
  );
}
