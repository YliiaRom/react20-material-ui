function InterceptorsPage() {
  return (
    <div className="interceptorsPageWrapper">
      {/* ----link */}
      <div>
        <a
          href="https://axios-http.com/ru/docs/interceptors"
          target="_blank"
          className="linkBtn"
        >
          axios.interceptor (Doc)
        </a>
        <a
          href="https://my-js.org/docs/cheatsheet/axios"
          target="_blank"
          className="linkBtn"
        >
          axios
        </a>
        <a
          href="https://www.youtube.com/live/dWAIK367S7Q"
          className="linkBtn"
          target="_blank"
        >
          1.16.40
        </a>
      </div>

      <div className="aboutCode">
        <div>
          <p>
            // перехоплення відповідей
            <br />
            <mark> axios.interceptors.response.use</mark>( <br />
            <mark> function (response)</mark>
            &#123;
            <br />
            // Будь-який код стану, що знаходиться в діапазоні 2xx, викликає
            спрацювання цієї функції
            <br />
            // Тут можна зробити щось із відповіддю
            <br />
            return response;
            <br />
            &#125;, <br /> <mark>function (error) </mark>&#123;
            <br />
            // Будь-які коди стану, що виходять за межі діапазону 2xx,
            викликають спрацювання цієї функції
            <br />
            // Тут можна зробити щось із помилкою відповіді
            <br />
            <mark>return Promise.reject(error)</mark>;
            <br />
            &#125;);
          </p>
        </div>
        <div>
          <mark> axios.interceptors.response.use</mark>( <br />
          <mark>response</mark>=&gt; response, <br />
          <mark> error</mark> =&gt; &#123; <br />
          if(!error.response) &#123; showToast("тут опис повідомлення") <br />
          &#125; else &#123; <br />
          logError(error) ; <br />
          &#125; <br />
          <mark> return Promise.reject(error)</mark> &#125; ) //ми передаємо
          помилку далі, щоб її можна було обробити в try/catch або у .catch(...)
          після запиту
        </div>
      </div>
    </div>
  );
}

export default InterceptorsPage;
