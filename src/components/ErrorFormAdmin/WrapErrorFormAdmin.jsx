import { useState } from "react";
import ErrorFormAdmin from "./ErrorFormAdmin";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";
import ErrorFormWithYup from "./ErrorFormWithYup";
import FallbackErrorSecondError from "./FallbackSecondError";

function WrapErrorFormAdmin() {
  const [resetKey, setResetKey] = useState(0);
  return (
    <>
      <p className="title">
        {" "}
        Змінювати key для перерендера <br /> const [resetKey, setResetKey] =
        useState(0) <br /> onReset= &#123;() =&gt; setResetKey((key) =&gt; key +
        1)&#125; <br />
        resetKeys=&#123;[resetKey]&#125;
      </p>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onReset={() => setResetKey((key) => key + 1)}
        resetKeys={[resetKey]}
      >
        <ErrorFormAdmin />
      </ErrorBoundary>

      <div className="code">
        <details>
          <summary>Code:</summary>
          <div>
            <p>
              Form &gt; <br />
              const <mark>[error, setError]</mark> = useState(null) <br />
              handleSubmit &gt; if(x !== "" || y!=="") &#123; <br />
              setError(<mark>new Error("...")</mark>) <br />
              &#125; <br />
              <br />
              if(error)<mark> throw error;</mark>
            </p>
          </div>
        </details>
      </div>
      <ErrorBoundary
        FallbackComponent={FallbackErrorSecondError}
        onReset={() => {
          setResetKey((v) => v + 1);
        }}
        resetKeys={[resetKey]}
      >
        <ErrorFormWithYup />
      </ErrorBoundary>
    </>
  );
}

export default WrapErrorFormAdmin;
