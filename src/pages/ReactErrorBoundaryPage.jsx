import { ErrorBoundary } from "react-error-boundary";
import ErrorFalseComponent from "@/components/ReactErrorBoundaryTest1/ErrorFalseComponent";
import ErrorTrueComponent from "@/components/ReactErrorBoundaryTest1/ErrorTrueComponent";
import WrapErrorTest01Component from "@/components/ReactErrorBoundaryTest1";
import FallbackRenderWrap from "@/components/FallbackRenderWrap";
import User from "@/components/User/User";

import ErrorUserWrapper from "@/components/ErrorUser/ErrorUserWrapper";
import WrapMathRandomComponents from "@/components/MathRundomComponents/WrapMathRandomComponents";
import WrapErrorFormAdmin from "@/components/ErrorFormAdmin/WrapErrorFormAdmin";
import OnErrorComponent from "@/components/OnError/OnErrorComponent";

function ReactErrorBoundaryPage() {
  return (
    <div className="reactErrorBoundaryWrapper">
      <h1>npm install react-error-boundary</h1>
      <h2> Обгортка для компонента(який може дати помилку)</h2>
      <p>
        готові до використання засоби для обробки помилок у React.
        <br />
        використання: <br />• компонент ErrorBoundary <br />• хук
        useErrorBoundary <br />• HOC
      </p>
      {/* =========btn */}
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
          11.00 / 21.00/
        </a>
      </div>

      {/* ============test  fallback*/}
      <div className="practiceWrap">
        <p className="title">
          приклад: <br />
          fallback=&#123;...опис...&#125;
        </p>
        <div>
          тут має бути : Hello #1
          <ErrorBoundary
            fallback={
              <p className="error">
                Тут відобразиться те що передала в fallback=&#123;...&#125;
              </p>
            }
          >
            <ErrorTrueComponent />
          </ErrorBoundary>
        </div>
        <div>
          тут має бути : Hello #2
          <ErrorFalseComponent />
        </div>

        <div className="code">
          <details>
            <summary>Code :</summary>
            <div>
              <p>npm install react-error-boundary</p>
              <br />
              <p>
                import &#123;ErrorBoundary&#125; from "react-error-boundary";
              </p>
              <br />
              <p>
                &lt;ErrorBoundary fallback=&#123;...повідомлення...&#125;&gt;
                <br />
                Component <br />
                &lt;/ErrorBoundary&gt;
              </p>
            </div>
          </details>
        </div>
      </div>
      {/* ============test 01 - wrap +  FallbackComponent={comp}*/}
      <div className="practiceWrap">
        <p className="title">
          приклад <br />
          FallbackComponent=&#123;comp&#125;
        </p>
        <div>
          тут має бути : Hello #1 <WrapErrorTest01Component />
        </div>
        <div>
          тут має бути : Hello #2
          <ErrorFalseComponent />
        </div>

        <div className="code">
          <details>
            <summary>Code: </summary>
            <p>
              import &#123;ErrorBoundary&#125; from "react-error-boundary";
            </p>{" "}
            <br />
            <p>
              &lt;ErrorBoundary <mark>FallbackComponent</mark>
              =&#123;FallbackComponent&#125;&gt; <br />
              &lt; Component /&gt; <br />
              &lt;/ErrorBoundary&gt;
              <br />
            </p>
          </details>
        </div>
      </div>
      {/* ===========  fallbackRender={fallbackRender}= */}
      <div className="practiceWrap">
        <p className="title">
          приклад <br />
          fallbackRender=&#123;comp-fallbackRender&#125;
        </p>
        <div>
          тут має бути : Hello #1 <FallbackRenderWrap />
        </div>
        <div>
          тут має бути : Hello #2
          <ErrorFalseComponent />
        </div>

        <div className="code">
          <details>
            <summary>Code: </summary>

            <p>
              function fallbackRender(
              <mark>&#123; error, resetErrorBoundary &#125;</mark>) &#123;{" "}
              <br /> return &lt;&gt;
              <br />
              &#123;error.message&#125; <br />
              button &lt;/&gt;; <br />
              &#125; <br />
            </p>
            <br />
            <p>import &#123;ErrorBoundary&#125; from "react-error-boundary";</p>
            <br />
            <p>
              &lt;ErrorBoundary <mark>fallbackRender</mark>
              =&#123;fallbackRender&#125; <br />
              onReset&#123;(detail) =&gt; &#123;...&#125;&#125; &gt; <br />
              &lt; Component /&gt; <br />
              &lt;/ErrorBoundary&gt;
              <br />
            </p>
          </details>
        </div>
      </div>

      {/*  ==============приклад робити запит за ID */}
      <h2>Робити запит за ID, якщо не вийшло =&gt; змінити ID</h2>
      <p>
        в компоненті FallbackCompo (&#123; error, resetErrorBoundary&#125;){" "}
        <br />
        &#123; error.message&#125;-вивести помилки <br />
        onClick=&#123;<mark>resetErrorBoundary </mark>&#125;на кнопку Reset
      </p>
      <p>
        {" "}
        <mark>onReset=&#123;(details)</mark> =&gt; &#123; тут змінити State ){" "}
        <br />
        <mark>resetKeys=&#123;[</mark>userId]&#125; - відслідкувати і оновити
        ErrorBoundary
      </p>
      <div className="code">
        <details>
          <summary>*Синхронність</summary>
          <div>
            <p>
              Щоб ErrorBoundary працював, потрібно використовувати async/await
              всередині useEffect та кидати помилку синхронно: <br />
              const [error, setError] = useState(null) <br />
              if (error) throw Error
            </p>
            <p></p>
          </div>
        </details>
      </div>
      <User />
      <p> компонент з помилкою id(немає)--&gt; треба змінити id!</p>
      <div className="practiceWrap">
        <ErrorUserWrapper />
      </div>

      {/* ==================math random() > 0.5 */}
      <p>
        Math.random() &gt; 0.5 генерує число при оновленні - Від цого залежить
        буде похібка чи рендериться компонент
      </p>
      <div className="practiceWrap">
        <WrapMathRandomComponents />
      </div>

      {/* ===================form !=="user" */}
      <p>
        ErrorBoundary Не ловить помилки: <br /> Помилки в обробниках подій
        (onClick, onSubmit, onChange). <br /> Асинхронні помилки (наприклад,
        всередині setTimeout, fetch.then), <br /> якщо не обернути в try/catch
        або не прокинути у стан. <br />
        <mark>
          throw new Error всередині onSubmit не спрацює з ErrorBoundary
        </mark>
        , він просто кине помилку в консоль.
      </p>
      <div className="practiceWrap">
        <WrapErrorFormAdmin />
      </div>
      {/* =============log */}
      <div>
        <OnErrorComponent />
      </div>
    </div>
  );
}

export default ReactErrorBoundaryPage;
