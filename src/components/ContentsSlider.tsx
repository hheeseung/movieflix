import styled from "styled-components";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { IGetMoviesResult } from "../API";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useState } from "react";
import { makeImagePath } from "../utils/utils";

interface IProps {
  data: IGetMoviesResult;
  title?: string;
}

const Slider = styled.div`
  position: relative;
  margin: 20px 60px;
  &:first-child {
    top: -100px;
  }
  &:nth-child(2) {
    top: 400px;
  }
  &:nth-child(3) {
    top: 800px;
  }
  &:last-child {
    top: 1200px;
  }
`;

const Title = styled.h3`
  position: absolute;
  top: -70px;
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Row = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 5px;
  position: absolute;
  width: 100%;
`;

const Box = styled(motion.div)<{ bgimg: string }>`
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center center;
  height: 200px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  padding: 10px;
  background-color: ${(props) => props.theme.black.lighter};
  opacity: 0;
  position: absolute;
  width: 100%;
  bottom: 0;
  h4 {
    text-align: center;
    font-size: 18px;
  }
`;

const rowVars = {
  hidden: {
    x: window.outerWidth - 5,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.outerWidth + 5,
  },
};

const boxVars = {
  normal: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    y: -20,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

const infoVars = {
  hover: {
    opacity: 1,
    transition: {
      delay: 0.5,
      duration: 0.3,
      type: "tween",
    },
  },
};

const offset = 6;

function ContentsSlider({ data, title }: IProps) {
  const history = useHistory();
  const bigMovieMatch = useRouteMatch<{ movieId: string }>("/movies/:movieId");
  const { scrollY } = useScroll();

  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((curr) => !curr);
  const increaseIdx = () => {
    if (data) {
      if (leaving) return;
      toggleLeaving();
      const totalMovies = data?.results.length - 1;
      const maxIdx = Math.floor(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIdx ? 0 : prev + 1));
    }
  };
  const onBoxClicked = (movieId: number) => {
    history.push(`/movies/${movieId}`);
  };
  const onOverlayClick = () => history.push("/");
  const clickedMovie =
    bigMovieMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +bigMovieMatch.params.movieId);

  return (
    <>
      <Slider>
        <Title>{title}</Title>
        <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
          <Row
            variants={rowVars}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ type: "tween", duration: 1 }}
            key={index}
          >
            {data?.results
              .slice(1)
              .slice(offset * index, offset * index + offset)
              .map((movie) => (
                <Box
                  layoutId={movie.id + ""}
                  key={movie.id}
                  variants={boxVars}
                  whileHover="hover"
                  initial="normal"
                  transition={{ type: "tween" }}
                  bgimg={makeImagePath(movie.backdrop_path, "w500")}
                  onClick={() => onBoxClicked(movie.id)}
                >
                  <Info variants={infoVars}>
                    <h4>{movie.title}</h4>
                  </Info>
                </Box>
              ))}
          </Row>
        </AnimatePresence>
      </Slider>
      {/* <AnimatePresence>
        {bigMovieMatch ? (
          <>
            <Overlay
              onClick={onOverlayClick}
              exit={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            />
            <BigMovie
              style={{ top: scrollY.get() + 100 }}
              layoutId={bigMovieMatch.params.movieId}
            >
              {clickedMovie && (
                <>
                  <BigCover
                    style={{
                      backgroundImage: `linear-gradient(to top, black, transparent), url(
                        ${makeImagePath(clickedMovie.backdrop_path, "w500")}
                      )`,
                    }}
                  />
                  <BigTitle>{clickedMovie.title}</BigTitle>
                </>
              )}
            </BigMovie>
          </>
        ) : null}
      </AnimatePresence> */}
    </>
  );
}

export default ContentsSlider;
