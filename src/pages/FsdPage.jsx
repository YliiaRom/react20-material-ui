function FsdPage() {
  return (
    <div className="wrapperFsdPage">
      <h1>FSD</h1>
      <h2>
        ErrorBoundary
        <br /> 📂app/ 📂providers/ 📄ErrorBoundary
      </h2>
      <h2>
        ErrorBoundary / FallbackComponent : <br />
        📂shared/ 📂ui/ 📄ErrorPage
      </h2>
      <p className="accent">глобальнo 📂app &gt;... </p>
      <p>
        глобальна обгортка <br />
        📂app / 📂providers/ 📂ErrorBoundary/ 📂ui/ 📄AppErrorBoundary.jsx
      </p>
      <p className="accent">локально 📂features / 📂entities &gt;... </p>
      <p>
        глобальна обгортка <br />
        📂features/ 📂XComponents / 📄ComponentErrorBoundary.jsx <br />
        📂shared/ 📂ui / 📄ErrorFallback.jsx
      </p>
      <h2>useErrorBoundary (1.11.00)</h2>
      <div>
        <p>
          <br />
          📂features/ 📂XComponents / 📄UseErrorBoundaryComponent.jsx <br />
          📂shared/ 📂ui / 📄ErrorFallback.jsx
        </p>
        <br />
        <p className="accent"> RTK Query</p>
        <p>
          {" "}
          const &#123; <mark>showErrorBoundary </mark>&#125; =
          useErrorBoundary();
        </p>
        <p>
          .....queryFn: async() =&gt; &#123; <br />
          const res = await fetch('...') <br />
          if(!res.ok) throw new Error('опис error ....') <br />
          ...
          <br />
          &#125; <br />
          <mark>onError: </mark>(err) =&gt; <mark>showBoundary(err)</mark>
        </p>
      </div>
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
          1.07.00 - глобально
        </a>
      </div>
      1.14.16 fsd - приклад
      <div>
        <h2>FSD</h2>
        <div className="aboutCode">
          <div>
            <p>1.14.00 -глобально</p>
            <h3>📂app &gt; 📂providers &gt;</h3>
            <h3>
              <mark>📄AppErrorBoundaryProvider.jsx</mark> + 📄AppProvider.jsx +
              📄AppInit.jsx{" "}
            </h3>
            <p>
              📄AppInit = Provider store=&#123;stor&#125; &gt;
              <mark> AppErrorBoundaryProvider </mark>&gt;AppProvider{" "}
            </p>
          </div>
          <div>
            <h3>
              📂shared &gt; 📂ui &gt; <mark>📄ErrorFallback.jsx</mark>
            </h3>
          </div>
          <div>
            1.15.00 fsd -todo res
            <h3>📂entities &gt; 📂todo &gt; 📂model &gt; 📄useTodo.js </h3>
            <p>
              export const useTodos () &#123; <br />
              const &#123; <mark>showBoundary</mark>&#125; =
              <mark> useErrorBoundary</mark>() <br />
              return <br />
              useXXXQuery(<mark>undefined</mark>, &#123; <br />
              onError: (error) =&gt; <mark>showBoundary(err)</mark>, <br />
              &#125;) <br />
              коли помилка давай showBoundary
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FsdPage;
