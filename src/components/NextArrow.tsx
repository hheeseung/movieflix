import { AiOutlineRight } from "react-icons/ai";

export default function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <button
      className={`${className} bg-black`}
      style={{
        ...style,
        position: "absolute",
        right: "-30px",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <AiOutlineRight />
    </button>
  );
}
