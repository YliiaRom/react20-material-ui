function FallbackComponent() {
  return (
    <div className="error">
      <p>
        тут рендерю компонент Fallback, якщо буде помилка - є можливість
        ініціювати заново процес
      </p>
      <button onClick={() => window.location.reload()}>Reload</button>
    </div>
  );
}

export default FallbackComponent;
