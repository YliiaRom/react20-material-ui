import { ErrorBoundary } from "react-error-boundary";

function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div className="error">
      <p>
        FallbackComponent &gt; error.message : <br />
        {error.message}
      </p>
      <p>
        На кнопці з DOC: onClick=&gt; &#123;<mark>resetErrorBoundary</mark>
        &#123;
      </p>
      <button onClick={resetErrorBoundary}>
        Reset/ змінити ID /З тим ID не вийшло
      </button>
    </div>
    // <div>
    //   <p>{error.message}</p>
    //   <button type="button" onClick={resetErrorBoundary}>
    //     Reset
    //   </button>
    // </div>
  );
}

export default FallbackComponent;
