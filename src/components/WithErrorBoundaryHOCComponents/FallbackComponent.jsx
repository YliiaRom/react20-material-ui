function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <div className="practiceWrap error">
      <p> error.message{error.message}</p>
      <button onClick={resetErrorBoundary}>Reset/ Перерендер комп</button>
    </div>
  );
}

export default FallbackComponent;
