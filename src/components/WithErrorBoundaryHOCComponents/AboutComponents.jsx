function AboutComponents() {
  return (
    <>
      <div className="aboutCode">
        {/* ========comp */}
        <div>
          <h3>📄Component</h3>
          <p> е компонент що може не відрендериться</p>
        </div>
        {/* ========FallbackComp */}
        <div>
          <h3>📄ErrorFallback.jsx</h3>

          <br />
          <p>
            function ErrorFallback(&#123;<mark> error, resetErrorBounder </mark>
            &#125;) &#123;{" "}
          </p>
          <br />
          <p>
            return (&lt;&gt; <br />
            &#123; <mark>error.message</mark>&#125; <br />
            &lt;button onClick=&#123; <mark>resetErrorBounder</mark> &#125;&gt;
            Reset &lt;button&gt; ...
          </p>
        </div>
        {/* ===wrap */}
        <div>
          <h3>📄Wrap.jsx</h3>

          <br />
          <p>
            import &#123;<mark>withErrorBoundary</mark>&#125; from
            'react-error-boundary'
          </p>
          <br />
          <p>
            ... <br />
            const <mark>C</mark>omponentWithErrorBoundary =
            <mark> withErrorBoundary</mark>(<mark>Component</mark>, &#123;{" "}
            <br />
            <br />
            FallbackComponent=<mark> ErrorFallback,</mark> <br />
            <br />
            onError(error, info)&#123; <br /> clg() &#125;, <br />
            <br />
            onReset()&#123;...&#125; <br />
            <br />
            resetKeys:[key] <br />
            <br />
            return &lt;&gt;
            <br />
            &lt;<mark>C</mark>omponentWithErrorBoundary id=&#123;x&#125; якщо
            треба в обгортку передамо пропси /&gt;
          </p>
        </div>
      </div>
    </>
  );
}

export default AboutComponents;
