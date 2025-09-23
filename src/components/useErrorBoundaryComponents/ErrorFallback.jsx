import { useErrorBoundary } from "react-error-boundary";
function ErrorFallback({ error }) {
  const { resetBoundary } = useErrorBoundary();
  return (
    <>
      <p>import &#123;useErrorBoundary&#125; from "react-error-boundary";</p>
      <br />
      <p>
        в компоненті ErrorFallback(&#123;error&#125;) &#123; <br />
        отримую const &#123;resetBoundary&#125; = useErrorBoundary();
      </p>
      <div className="practiceWrap">
        <div>error.message: {error.message}</div>
        <button onClick={resetBoundary}>
          працює: onClick=&#123;resetBoundary&#125;/Reset
        </button>
      </div>
    </>
  );
}

export default ErrorFallback;
