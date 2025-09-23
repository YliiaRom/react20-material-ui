import { ErrorBoundary } from "react-error-boundary";
import ErrorTrueComponent from "./ErrorTrueComponent";
import FallbackComponent from "./FallbackComponent";
function WrapErrorTest01Component() {
  return (
    <>
      <ErrorBoundary FallbackComponent={FallbackComponent}>
        <ErrorTrueComponent />
      </ErrorBoundary>
    </>
  );
}

export default WrapErrorTest01Component;
