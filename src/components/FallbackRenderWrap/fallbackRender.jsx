function fallbackRender({ error, resetErrorBoundary }) {
  // Call resetErrorBoundary() to reset the error boundary and retry the render.

  return (
    <div className="error">
      <p>
        Тут повідомлення з fallbackRender(&#123;(error,
        resetErrorBoundary)&#125; =&gt;(...&#123;error.message&#125;))
      </p>
      <p style={{ border: "1px solid #999" }}>error.message: {error.message}</p>
      <button className="error">спробувати ще раз (Reset)</button>
    </div>
  );
}
export default fallbackRender;
