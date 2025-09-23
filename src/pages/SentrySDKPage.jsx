function SentrySDKPage() {
  return (
    <div className="sentrySDKWrapper">
      {/* ----link */}
      <div>
        <a
          href="https://docs.sentry.io/platforms/javascript/guides/react/"
          target="_blank"
          className="linkBtn"
        >
          Sentry SDK
        </a>

        <a
          href="https://www.youtube.com/live/dWAIK367S7Q"
          className="linkBtn"
          target="_blank"
        >
          1.19.00
        </a>
      </div>
      <p> 1. npm install @sentry/browser @sentry/tracing</p>
      <div className="aboutCode">
        <div>
          Написати окремий файл, потім підключити в main.js <br /> <br /> 2.
          import * as Sentry from "@sentry/react"; <br />
          або. import * as Sentry from "@sentry/browser"; <br />
          <br />
          <mark>Sentry.init</mark>(&#123;
          <br />
          dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
          <br />
          //це ім'я сховища для повідомлень, на цей url шлють помилки
          <br />
          sendDefaultPii: true,
          <br />
          integrations: [<br />
          ],
          <br />
          &#125;);
        </div>

        <div>
          <p>
            в main.js додати код : <br />
            Для синхрон помилок- <br />
            windiw.addEventListener("<mark>error</mark>", (event) =&gt; &#123;{" "}
            <br />
            <mark> Sentry.captureException(event.error)</mark>; &#123;);
            <br />
            <br />
            Для глоб обробника, для неперехоплених промісів -
            windiw.addEventListener("<mark>unhandledrejection</mark>", (event)
            =&gt; &#123; <br />
            <mark>Sentry.captureException(event.reason)</mark>; &#123;);
          </p>
        </div>
      </div>
    </div>
  );
}

export default SentrySDKPage;
