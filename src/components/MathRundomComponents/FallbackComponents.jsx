function FallbackComponents({ error, resetErrorBoundary }) {
  return (
    <div>
      <div className="practiceWrap">
        <p className="error">error.message: {error.message}</p>
        <button onClick={resetErrorBoundary} className="error">
          Reset (оновити рендер)
        </button>
      </div>
    </div>
  );
}

export default FallbackComponents;
