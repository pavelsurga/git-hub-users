import React from "react";
import { PaginakaItemContainer } from "./Paginator.style";

const PaginationList = ({ itemslist, offset, currentPage }) => {
  return itemslist.map((item) => {
    const page = offset + item + 1;
    return (
      <PaginakaItemContainer
        to={`/users/${page}`}
        isActive={+currentPage === page}
        key={`/users/${page}`}
      >
        {page}
      </PaginakaItemContainer>
    );
  });
};

export default PaginationList;
