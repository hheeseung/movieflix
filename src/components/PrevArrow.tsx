export default function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        display: "block",
        position: "absolute",
        left: "5px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
