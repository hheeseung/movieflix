import { useEffect } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import { getSearch, IGetSearch } from "../API";
import { makeImagePath } from "../utils/utils";

const Wrapper = styled.div``;

const Searching = styled.div`
  margin-top: 100px;
  margin-left: 60px;
`;

const Title = styled.h3``;

const SearchResult = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  margin: 20px 60px;
`;

const Box = styled(motion.div)<{ bgimg: string }>`
  background-image: url(${(props) => props.bgimg});
  background-size: cover;
  background-position: center center;
  height: 300px;
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

function Search() {
  const location = useLocation();
  const keyword = new URLSearchParams(location.search).get("keyword");

  const { data, refetch } = useQuery<IGetSearch>(["search"], () =>
    getSearch(keyword!)
  );

  useEffect(() => {
    refetch();
  }, [keyword, refetch]);

  return (
    <Wrapper>
      {keyword === null ? (
        <div>검색 결과가 없습니다.</div>
      ) : (
        <>
          <Searching>
            <Title>
              <span>{keyword}</span>에 대한 검색 결과:
            </Title>
          </Searching>
          <SearchResult>
            {data?.results.map((result) => (
              <Box
                bgimg={makeImagePath(`${result.backdrop_path}`)}
                variants={boxVars}
                whileHover="hover"
                initial="normal"
                transition={{ type: "tween" }}
              >
                <Info variants={infoVars}>
                  <h4>{result.title ? result.title : result.name}</h4>
                </Info>
              </Box>
            ))}
          </SearchResult>
        </>
      )}
    </Wrapper>
  );
}

export default Search;
