import AboutComponents from "@/components/useErrorBoundaryComponents/AboutComponents";

import WrapUseErrorBoundary from "@/components/useErrorBoundaryComponents/WrapUseErrorBoundary";

function UseErrorBoundary() {
  return (
    <div className="useErrorBoundaryWrapper">
      <h1>
        Хук useErrorBoundary <br /> для ловлі помилок від бекенду( в
        useEffect()) <br />
      </h1>
      <p className="accent">
        {" "}
        useErrorBoundary() <br />
        showBoundary(error) <br />
        &#123;resetBoundary&#125;
      </p>

      <p>
        Обробка помилок поза фазою рендерингу (наприклад, в асинхронних
        операціях або обробниках подій)
      </p>
      <p>npm install react-error-boundary</p>
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
          57.06
        </a>
      </div>
      <h2>showBoundary - прокидає помилку в ErrorBoundary</h2>
      <h3>resetBoundary - повторна спроба</h3>
      <details>
        <summary>
          import &#123;useErrorBoundary&#125; from "react-error-boundary";
        </summary>
        <div>
          <p>
            {" "}
            const<mark> &#123;showBoundary&#125; = useErrorBoundary();</mark>
          </p>
          <p>
            ....try&#123;...&#125;....catch()&#123;{" "}
            <mark>showBoundary(error)</mark>;
          </p>
          <br />
          <p>
            в компоненті ErrorFallback(&#123;error&#125;) &#123; <br />
            отримую const{" "}
            <mark>&#123;resetBoundary&#125; = useErrorBoundary();</mark>
          </p>
          <p>
            &gt; &#123; error.message&#125; <br /> працює:
            <mark> onClick=&#123;resetBoundary&#125;</mark>/Reset{" "}
          </p>
        </div>
      </details>
      {/* =============fetch placeholder */}
      <div className="practiceWrap">
        <p className="title">
          тут запит на jsonplaseholder з id <br />
          без помилки:
        </p>
        <WrapUseErrorBoundary />
      </div>
      <div>
        <AboutComponents />
      </div>
    </div>
  );
}

export default UseErrorBoundary;
