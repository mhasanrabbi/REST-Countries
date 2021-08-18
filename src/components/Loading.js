import { CircularProgress } from '@material-ui/core';
import React from "react";


const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading">
        <CircularProgress />
      </div>
    </div>
  )
};

export default Loading;