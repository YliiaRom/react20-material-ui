import WrapWithErrorBoudary from "@/components/WithErrorBoundaryHOCComponents/WrapWithErrorBoudary";

function WithErrorBoundaryHOCPage() {
  return (
    <div className="withErrorBoundaryHOCPageWrapper">
      <h1>withErrorBoundary (Обгортка) -для рендера</h1>
      <p className="accent">
        const ComponentWithErrorBoundary = withErrorBoundary(Component,
        &#123;...допомідні fn...&#125; <br />
        <br />
        <br />
        FallbackComponent=XXX, <br />
        <br />
        onError(error, info)&#123; <br /> clg() &#125;, <br />
        <br />
        onReset()&#123;...&#125; <br />
        <br />
        resetKeys:[key]
      </p>
      <p>
        альтернатива компоненту і хуку (дозволяє обгорнути будь-який компонент у
        Error Boundary без додаткового коду)
      </p>
      {/* ----link */}
      <div>
        <a
          href="https://www.npmjs.com/package/react-error-boundary"
          target="_blank"
          className="linkBtn"
        >
          react-error-boundary
        </a>
        <a
          href="https://react.dev/reference/react/use#displaying-an-error-to-users-with-error-boundary"
          target="_blank"
          className="linkBtn"
        >
          react DOC + react-error-boundary
        </a>
        <a
          href="https://www.youtube.com/live/dWAIK367S7Q"
          className="linkBtn"
          target="_blank"
        >
          1.02.00
        </a>
      </div>
      <p>npm install react-error-boundary</p>
      <p>import &#123;withErrorBoundary&#125; from "react-error-boundary";</p>
      {/* ===========comp */}
      <WrapWithErrorBoudary />
    </div>
  );
}

export default WithErrorBoundaryHOCPage;
