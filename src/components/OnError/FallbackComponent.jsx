function FallbackComponent({ error, resetErrorBoundary }) {
  return (
    <>
      <div className="practiceWrap">
        <div>error.message: {error.message}</div>
      </div>
      <button onClick={resetErrorBoundary}>Reset/ Оновити</button>
    </>
  );
}

export default FallbackComponent;
