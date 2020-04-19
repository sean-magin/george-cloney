import React, { ReactElement } from "react";
import { DotsProps } from "./types";
import "./styles.css";

const Dots = (props: DotsProps): ReactElement => {
  const { code, launchNetwork, signer } = props;

  return (
    <div className="dots-container">
      <span className={code.length > 0 ? "dot active" : "dot"}>1</span>
      <span className={launchNetwork !== "Select A Network..." && signer ? "dot active" : "dot"}>2</span>
    </div>
  );
};

export default Dots;