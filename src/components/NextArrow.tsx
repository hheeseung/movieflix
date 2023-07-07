export default function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        borderRadius: "50%",
        display: "block",
        position: "absolute",
        right: "10px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
