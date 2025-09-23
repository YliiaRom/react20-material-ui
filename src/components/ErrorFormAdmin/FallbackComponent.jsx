function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <>
      <div className="practiceWrap">
        <p>error.message:{error.message}</p>
        <button onClick={resetErrorBoundary}>Reset/ Скинути і повторити</button>
      </div>
    </>
  );
}

export default FallbackComponent;
