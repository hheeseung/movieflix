import styled from "styled-components";
import { makeImagePath } from "../utils/utils";

interface IBanner {
  backdropPath?: string;
  title?: string;
  overview?: string;
}

const BannerImg = styled.div<{ bgimg: string }>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px;
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgimg});
  background-size: cover;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 20px;
  font-weight: 600;
`;

const Overview = styled.p`
  font-size: 25px;
  width: 50%;
  line-height: 1.4;
`;

function Banner({ backdropPath, title, overview }: IBanner) {
  return (
    <BannerImg bgimg={makeImagePath(backdropPath || "")}>
      <Title>{title}</Title>
      <Overview>{overview}</Overview>
    </BannerImg>
  );
}

export default Banner;
