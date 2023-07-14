import { AiOutlineLeft } from "react-icons/ai";

export default function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        position: "absolute",
        left: "-50px",
        zIndex: "1",
      }}
      onClick={onClick}
    >
      <AiOutlineLeft />
    </div>
  );
}
