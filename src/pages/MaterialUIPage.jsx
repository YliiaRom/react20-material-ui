import MaterialUiComponent from "@/components/MaterialUi/MaterialUiComponent";

function MaterialUIPage() {
  return (
    <div className="materialUiPageWrapper">
      <MaterialUiComponent />
      {/* ----link */}
      <div>
        <a
          href="https://mui.com/material-ui/"
          target="_blank"
          className="linkBtn"
        >
          material-ui
        </a>
        <a
          href="https://mui.com/material-ui/getting-started/templates/"
          target="_blank"
          className="linkBtn"
        >
          templates
        </a>
        <a
          href="https://www.youtube.com/live/dWAIK367S7Q"
          className="linkBtn"
          target="_blank"
        >
          1.23.00
        </a>
      </div>
      <h2>Style</h2>
      <a
        href="https://mui.com/material-ui/api/typography/"
        target="_blank"
        className="linkBtn"
      >
        typography
      </a>

      <a
        href="https://mui.com/system/getting-started/the-sx-prop/"
        target="_blank"
        className="linkBtn"
      >
        style #1/ sx
      </a>

      <a
        href="https://mui.com/system/styled/"
        target="_blank"
        className="linkBtn"
      >
        style #2/ props
      </a>
      <a
        href="https://mui.com/material-ui/customization/theme-components/#variants"
        target="_blank"
        className="linkBtn"
      >
        style #01/ variants
      </a>
      <a
        href="https://mui.com/system/getting-started/usage/"
        target="_blank"
        className="linkBtn"
      >
        style #02/ MUI System
      </a>

      <a
        href="https://mui.com/material-ui/experimental-api/pigment-css/"
        target="_blank"
        className="linkBtn"
      >
        style #03/ pigment
      </a>
      <a
        href="https://mui.com/material-ui/customization/theme-components/#theme-style-overrides"
        target="_blank"
        className="linkBtn"
      >
        style #3/ перевизначити зовнішній вид
      </a>
      <a
        href="https://www.youtube.com/live/dWAIK367S7Q"
        className="linkBtn"
        target="_blank"
      >
        1.23.00
      </a>
    </div>
  );
}

export default MaterialUIPage;
