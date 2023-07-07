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
        right: "20px",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
}
