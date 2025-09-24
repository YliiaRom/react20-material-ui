const linksList = [
  {
    "Material UI": "https://mui.com/material-ui/",
  },
  {
    "MUI- безкоштовні шаблони":
      "https://mui.com/material-ui/getting-started/templates/",
  },
  {
    "throw new Error":
      "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw",
  },

  {
    "ErrorBoundary(9.07)":
      "https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary",
  },
  { Theory: "https://www.youtube.com/live/dWAIK367S7Q" },
  {
    "Стаття: ErrorBoundary":
      "https://www.brandondail.com/posts/fault-tolerance-react",
  },
  {
    "react-error-boundary /бібліотека (11.00)":
      "https://www.npmjs.com/package/react-error-boundary",
  },
  {
    "react-error-boundary + react DOC":
      "https://react.dev/reference/react/use#displaying-an-error-to-users-with-error-boundary",
  },
  { "axios.intercepter": "https://axios-http.com/ru/docs/interceptors" },

  { axios: "https://my-js.org/docs/cheatsheet/axios" },
  { "axios gitHub": "https://github.com/axios/axios" },
  {
    "RTK Query -error":
      "https://redux-toolkit.js.org/rtk-query/usage/error-handling",
  },
  {
    "RTK Query doc": "https://redux-toolkit.js.org/tutorials/rtk-query",
  },
  {
    unhandledrejection:
      "https://developer.mozilla.org/ru/docs/Web/API/Window/unhandledrejection_event",
  },
  {
    error:
      "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Error",
  },
  {
    "Sentry SDK (1.19.00)":
      "https://docs.sentry.io/platforms/javascript/guides/react/",
  },
];
function HomePage() {
  return (
    <div className="homePageWrapper">
      <h1>Material-UI</h1>
      <div className="descriptionGrid">
        <p>
          Базова одиниця вимірювання - 8px (spacing).
          <br />
          xs,sm,md,lg,xl - ширіна на рівні брейкпоінтов <br />
          Значення sm=&#123;3&#125; <br /> 1-12(бо сітка 12 колонок) <br />
          xs=&#123;12&#125; - 100% ширина на мобільному
        </p>
        <p>
          @mui/material - головний пакет, містить компоненти Material UI <br />
          @emotion/react - частиною стилістичної системи Emotion <br />
          @emotion/styled - для створення кастомних стилізованих компонентів
          <br /> @mui/icons-material - іконки Material Design @fontsource/roboto
          - шрифту Roboto <br />
          !!! react / react-dom до встановлення material-ui
        </p>
      </div>
      <h2>error boundary </h2>
      <div className="aboutCode">
        <div>
          Axios <br />
          axios.interceptors.response.use( <br />
          (response) =&gt;&#123;
          <br />
          return response
          <br />
          &#125;, <br /> <br /> (error) =&gt;&#123;
          <br />
          .....моя обробка return Promise.reject(error)
          <br />
          &#125;)
          <br />
        </div>
        <div>
          RTK Query- вбудована обробка помилок <br />
          const &#123;data, error, isError &#125; = useGetUsersQuery();
          <br />
          if(isError) &#123; return &#123; error.message&#125; || "не вдалось
          завант" &#125;
        </div>
      </div>
      <div className="aboutCode">
        <div>
          <p>
            unhandledrejection -глоб <br />
            (для асинхронних помилок) <br />
            відбувається тоді, коли Promise завершується з помилкою, але для
            цієї помилки не задано обробник
          </p>
          <br />

          <p>
            window.addEventListener("unhandledrejection", function (event)
            &#123;
            <br />
            console.warn(
            <br />
            "тут описуємо " +<br />
            event.reason,
            <br />
            );
            <br />
            &#125;);
          </p>
        </div>
        <div>
          <p>
            error <br /> спрацьовує на об'єкті window, <br />
            синтаксичні помилки, час виконання, великий спектор
          </p>
          <br />
          <p>
            window.addEventListener('error', (event) =&gt; &#123; <br />
            log("моє повідомлення...",event.message, event.error) <br />
            &#125; )
          </p>
        </div>
      </div>

      <ul>
        {linksList.map((obj, index) =>
          Object.entries(obj).map(([keyObj, value]) => (
            <li key={index + keyObj} className="linkBtn">
              <a href={value} target="_blank" rel="noreferrer">
                {keyObj}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default HomePage;
