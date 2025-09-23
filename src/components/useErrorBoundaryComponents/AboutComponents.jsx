function AboutComponents() {
  return (
    <>
      <div className="aboutCode">
        {/* =====form */}
        <div>
          <h3>📄Form</h3>
          <div>
            <p>
              import &#123;<mark> useErrorBoundary </mark>&#125; from
              "react-error-boundary";
            </p>
            <br />
            <p>
              <br />
              function Component() &#123;
              <br />
              const &#123; <mark>showBoundary</mark> &#125; =
              useErrorBoundary();
              <br />
              <br />
              useEffect(() =&gt; &#123;
              <br />
              const fetchFn = async() =&gt; &#123; <br />
              try&#123; .....
              <br />
              Якщо повернеться пустий об'ект обов'язково згенерувати помилку{" "}
              <br />
              if (!response.ok) &#123; <mark>throw new Error</mark>('опис
              помилки')
              <br />
              if (!data.name) &#123; <mark>throw new Error</mark>('опис
              помилки')
              <br />
              <br />
              catch(<mark>error</mark>) &#123; <br />
              <mark> showBoundary(error)</mark>;
              <br />
              &#125;
              <br />
              fetchFn() <br />, [x]);
              <br />
              &#125;);
              <br />
              <br />
              return RENDER ..DATA....
            </p>
          </div>
        </div>
        {/* ====fallback */}
        <div>
          <h3>📄ErrorFallback.jsx</h3>
          <p>
            import &#123;<mark>useErrorBoundary</mark>&#125; from
            "react-error-boundary";
          </p>
          <br />
          <p>
            function ErrorFallback(&#123;<mark> error </mark>&#125;) &#123;{" "}
            <br /> const &#123;<mark> resetBoundary</mark> &#125; =
            useErrorBoundary();
          </p>
          <p>
            {" "}
            <br />
            return (&lt;&gt; <br />
            &#123; error.message&#125; <br />
            &lt;button onClick=&#123; <mark>resetBoundary</mark> &#125;&gt;
            Reset &lt;button&gt; ...
          </p>
        </div>
        {/* ==wrapper */}
        <div>
          <h3>📄 Wrapper</h3>
          <div>
            <p>
              import &#123;<mark>ErrorBoundary</mark>&#125; from
              "react-error-boundary";
            </p>
            <br />
            <p>
              function WrapComponent() &#123;
              <br />
              <br />
              return (<br />
              &lt;&gt;
              <br />
              &lt;<mark>ErrorBoundary</mark>
              <br />
              <mark> FallbackComponent</mark>=&#123;ErrorFallback&#125;
              <br />
              <mark>onError</mark>=&#123;(<mark>error</mark>) =&gt;
              <br />
              console.log(`тут я логую ...`, <mark>error</mark>)
              <br />
              &#125;
              <br />
              &gt;
              <br />
              &lt;UseErrorBoundaryComponent /&gt;
              <br />
              &lt;/ErrorBoundary&gt;
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutComponents;
