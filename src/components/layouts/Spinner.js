import React, { Fragment } from "react";
import { WaveSpinner } from "react-spinners-kit";

const Spinner = () => (
  <Fragment>
    <WaveSpinner
      color="#58537c"
      style={{
        position: "relative",
        alignItems: "center"
      }}
    />
  </Fragment>
);

export default Spinner;
