import React, { ReactElement } from "react";
import Snackbar from "../Snackbar/Snackbar";
import { SnackbarGroupProps } from "./types";

const SnackbarGroup = (props: SnackbarGroupProps): ReactElement => {
  const { snackbar, closeSnackbar, error, loading, loadingMessage } = props;

  return (
    <>
      {error && !loadingMessage && (
        <Snackbar snackbar={snackbar} closeSnackbar={closeSnackbar} type="warning">
          <>{error}</>
        </Snackbar>
      )}
      {loading && (
        <Snackbar duration={"none"} snackbar={snackbar} closeSnackbar={closeSnackbar} type="info">
          <>{loadingMessage}</>
        </Snackbar>
      )}
    </>
  );
};

export default SnackbarGroup;