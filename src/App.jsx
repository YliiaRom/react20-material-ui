import { RouterProvider } from "react-router";
import "./App.css";
import router from "./shared/config/routes/routes.jsx";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
