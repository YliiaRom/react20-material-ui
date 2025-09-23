import { ErrorBoundary } from "react-error-boundary";
import ErrorUser from "./ErrorUser";
import FallbackComponent from "./FallbackComponent";
import { useState } from "react";

function ErrorUserWrapper() {
  const [userId, setUserId] = useState(0);
  return (
    <>
      <ErrorBoundary
        FallbackComponent={FallbackComponent}
        onReset={() => {
          setUserId((id) => id + 1);
        }}
        resetKeys={[userId]} //якщо змінется= перерендер
      >
        <ErrorUser userId={userId} />
      </ErrorBoundary>
      <div className="code">
        <details>
          <summary>Code :</summary>
          <div>
            <p>import &#123;ErrorBoundary&#125; from "react-error-boundary";</p>
            <br />
            <p>
              const [userId, setUserId] = useState(0);
              <br />
              return (<br />
              &lt;&gt;
              <br />
              &lt;ErrorBoundary
              <br />
              <mark>FallbackComponent</mark>=&#123;FallbackComponent&#125;
              <br />
              <mark>onReset</mark>=&#123;() =&gt; &#123;
              <br />
              setUserId((id) =&gt; id + 1);
              <br />
              &#125;&#125;
              <br />
              resetKeys=&#123;[userId]&#125; //якщо змінется= перерендер
              <br />
              &gt;
              <br />
              &lt;ErrorUser userId=&#123;userId&#125; /&gt;
              <br />
              &lt;/ErrorBoundary&gt;
              <br />
            </p>
          </div>
        </details>
      </div>
      <button onClick={() => window.location.reload()}>
        window.location.reload()
      </button>
    </>
  );
}

export default ErrorUserWrapper;
