import React, { Suspense } from "react";
import { Typography } from "@mui/material";

interface SuspenseWrapperProps {
  path: string;
}

const SuspenseWrapper = (props: SuspenseWrapperProps) => {
  const LazyComponent = React.lazy(() => import(`../${props.path}`));

  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <Typography>Loading</Typography>
          </div>
        </div>
      }
    >
      <LazyComponent />
    </Suspense>
  );
};

export default SuspenseWrapper;