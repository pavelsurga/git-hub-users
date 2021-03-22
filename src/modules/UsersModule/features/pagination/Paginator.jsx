import React, { useMemo, useState } from "react";
import { range, pages_range } from "../../../../shared/constants.json";
import { leftArrow, rightArrow } from "./img";
import {
  PaginationContainer,
  PaginakaWindowContainer,
  PaginakaControlContainer,
} from "./Paginator.style";
import PaginationList from "./PaginationList";

const Paginator = ({ currentPage, usersCount }) => {
  const pagesCount =
    usersCount % range === 0 ? usersCount / range : usersCount / range + 1;

  const [offset, setOffset] = useState(0);

  const scrollOffset = (elements) => {
    if (
      offset + elements >= 0 &&
      offset + elements + pages_range <= pagesCount
    ) {
      setOffset(offset + elements);
    }
  };
  
  const items = useMemo(() => {
    return (
      <PaginationList
        itemslist={[...Array(pages_range).keys()]}
        offset={offset}
        currentPage={currentPage}
      />
    );
  }, [currentPage, offset]);

  return (
    <PaginationContainer>
      <PaginakaControlContainer
        rightDirection={false}
        src={leftArrow}
        onClick={() => scrollOffset(-5)}
      />
      <PaginakaWindowContainer>{items}</PaginakaWindowContainer>
      <PaginakaControlContainer
        rightDirection={true}
        src={rightArrow}
        onClick={() => scrollOffset(5)}
      />
    </PaginationContainer>
  );
};

export default Paginator;
