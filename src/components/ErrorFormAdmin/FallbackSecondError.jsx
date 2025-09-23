function FallbackErrorSecondError({ error, resetErrorBoundary }) {
  return (
    <>
      <div>
        працює компонент Fallback (якщо помилка) <br /> на кнопці
        resetErrorBoundary - робить перерендер; <br />
        <p>error.message:{error.message}</p>
        <button onClick={resetErrorBoundary}>Reset / Оновити</button>
        <p>оновивши можно дати можливість запонити форму заново</p>
      </div>
    </>
  );
}

export default FallbackErrorSecondError;
