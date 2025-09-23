import { withErrorBoundary } from "react-error-boundary";
import WithErrorBoundaryHOCComponent from "./WithErrorBoundaryHOCComponent";
import FallbackComponent from "./FallbackComponent";
import { useState } from "react";
import AboutComponents from "./AboutComponents";

function WrapWithErrorBoudary() {
  const [keyId, setKeyId] = useState(0);
  const ComponentWithErrorBoundary = withErrorBoundary(
    WithErrorBoundaryHOCComponent,
    {
      FallbackComponent: FallbackComponent,
      onError(error, info) {
        console.error(
          `опис помилки в комп onError(error,info){error,info}`,
          error,
          info
        );
      },
      onReset() {
        setKeyId((key) => key + 1);
      },
      resetKeys: [keyId],
    }
  );
  return (
    <div>
      <div className="practiceWrap">
        <button onClick={() => setKeyId((v) => v + 1)}>
          повторити запит (змінити id)
        </button>
        <ComponentWithErrorBoundary id={keyId} />
      </div>
      <AboutComponents />
    </div>
  );
}

export default WrapWithErrorBoudary;
