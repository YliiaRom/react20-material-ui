const libraryList = [
  "@mui/material - головний пакет, містить компоненти Material UI",
  "@emotion/react - частиною стилістичної системи Emotion",
  "@emotion/styled - для створення кастомних стилізованих компонентів",
  "@mui/icons-material - іконки Material Design",
  "@fontsource/roboto - шрифту Roboto",
];

function MaterialUiComponent() {
  return (
    <>
      <h1>Material UI (MUI) - популярна бібліотека компонентів для React</h1>
      <p>
        Вона надає готові до використання UI-компоненти (такі як кнопки, поля
        введення, картки, меню),
      </p>
      <h2>
        npm install @mui/material @emotion/react @emotion/styled
        @mui/icons-material
      </h2>
      <div>
        <ul>
          {libraryList.map((el, index) => (
            <li key={index}>{el}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default MaterialUiComponent;
