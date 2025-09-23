import { ErrorBoundary } from "react-error-boundary";
import MathRundomComponents from "./MathRundomComponents";
import FallbackComponents from "./FallbackComponents";

function WrapMathRandomComponents() {
  console.log(`_____render WrapMathRandomComponents`);
  return (
    <>
      <h2>оновлення робить resetErrorBoundary</h2>
      <p className="title">
        буде моє повідомлення з onReset=&#123;() якщо зломається (його викликає
        в FallbackComp: onClick=&#123;resetErrorBoundary&#125;)/
      </p>
      <div>
        <p>
          const inputRef = useRef("");
          <br />
          const dataRef = useRef("");
          <br />
          const handlerChange = () =&gt; &#123;
          <br />
          dataRef.current.innerText = "Hello " + inputRef.current.value;
          <br />
          &#125;;
        </p>
      </div>
      <ErrorBoundary
        FallbackComponent={FallbackComponents}
        onReset={() => {
          alert(`Моє повідомлення: працює  onReset={() => { alert()`);
        }}
      >
        <MathRundomComponents />
      </ErrorBoundary>
      <div className="code">
        <details>
          <summary>Code: </summary>
          <div>
            <p>
              працює ErrorBoundary: <br /> спочатку твій код onReset, потім
              внутрішній механізм ErrorBoundary перерендерює компонент.
            </p>

            <br />
            <p>
              function FallbackComponents(&#123;
              <mark> error, resetErrorBoundary </mark>&#125;) &#123; <br />
              return ( <br />
              &#123;error.message&#125; button&gt;
              <mark> onClick=&#123;resetErrorBoundary</mark>&#125;
            </p>
            <br />
            <br />
            <p>import &#123;ErrorBoundary&#125; from "react-error-boundary";</p>
            <br />
            <p>
              &lt;ErrorBoundary <mark>FallbackComponent</mark>
              =&#123;FallbackComponents&#125; <br />
              onReset&#123;(detail) =&gt; &#123; alert(...)&#125;&#125; &gt;{" "}
              <br />
              &lt; Component /&gt; <br />
              &lt;/ErrorBoundary&gt;
            </p>
          </div>
        </details>
      </div>
    </>
  );
}

export default WrapMathRandomComponents;
