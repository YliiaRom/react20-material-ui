import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";

import ErrorUseErrorBoundaryComponent from "./ErrorUseErrorBoundaryComponent";
import { useState } from "react";
import UseErrorBoundaryComponent from "./UseErrorBoundaryComponent";

function WrapUseErrorBoundary() {
  const [idData, setIdData] = useState(0);
  return (
    <>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onError={(error) =>
          console.log(`тут я логую в обгортці onError={() =>}`, error)
        }
      >
        <UseErrorBoundaryComponent />
      </ErrorBoundary>
      <div style={{ borderTop: "2px dotted #999" }}>
        <p className="title">
          тут запит з помилкою : <br /> спочатку id= 0 потім змінюю в стані
          обгортки <br /> onReset=&#123;() =&gt; setIdData((id) =&gt; id +
          1)&#125;
        </p>
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          onReset={() => setIdData((id) => id + 1)}
          resetKeys={[idData]}
          onError={(error) =>
            console.log(`тут я логую в обгортці onError={() =>}`, error)
          }
        >
          <ErrorUseErrorBoundaryComponent idData={idData} />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default WrapUseErrorBoundary;
