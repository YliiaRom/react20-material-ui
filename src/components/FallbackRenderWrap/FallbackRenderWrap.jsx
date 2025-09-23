import { ErrorBoundary } from "react-error-boundary";
import ErrorTrueComponent from "../ReactErrorBoundaryTest1/ErrorTrueComponent";
import fallbackRender from "./fallbackRender";
function FallbackRenderWrap() {
  return (
    <>
      <ErrorBoundary fallbackRender={fallbackRender} onReset={(details) => {}}>
        <ErrorTrueComponent />
      </ErrorBoundary>
    </>
  );
}

export default FallbackRenderWrap;
