import ErrorAdminForm from "@/features/admin/ErrorAdminForm";
import { ErrorBoundary } from "react-error-boundary";
import FallbackComponent from "./FallbackComponent";
import { useState } from "react";

function OnErrorComponent() {
  const [keyError, setKeyError] = useState(0);
  return (
    <>
      <p>
        {" "}
        &lt;ErrorBoundary <br />
        fallbackRender=&#123;FallbackComponent&#125; <br />
        <mark> onError = &#123;</mark>() =&gt; &#125; - Логуванння
      </p>
      <div className="practiceWrap">
        <p className="title">
          &lt;ErrorBoundary <br />
          fallbackRender=&#123;FallbackComponent&#125;
          <br />
          onError=&#123;(error,info =&gt; <br />
          clg(`...`,error) ; <br />
          clg('...', info) )
        </p>
        <ErrorBoundary
          fallbackRender={FallbackComponent}
          onError={(error, info) => {
            console.error(
              "Помилка зловлена в ErrorBoundary За допомогою onError:",
              error
            );
            console.log(`моє повідомлення в onError> info: `, info);
          }}
          onReset={() => {
            setKeyError((v) => v + 1);
          }}
          resetKeys={[keyError]}
        >
          <ErrorAdminForm />
        </ErrorBoundary>
      </div>
    </>
  );
}

export default OnErrorComponent;
