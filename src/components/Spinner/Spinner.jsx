import React from "react";
import { CircularProgress } from "@material-ui/core";
import { SpinnerContainer } from "./Spinner.style";

const Spinner = () => (
  <SpinnerContainer>
    <CircularProgress />
  </SpinnerContainer>
);

export default Spinner;