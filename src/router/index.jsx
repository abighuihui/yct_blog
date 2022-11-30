import { createBrowserRouter, RouterPovider } from "react-router-dom";
import LoginForm from "../components/loginForm";
import Movie from "../components/movie";
import New from "../components/newMovie";

const router = createBrowserRouter([
  {
    path: "/movies",
    element: <Movie />,
  },
  {
    path: "/login",
    element: <LoginForm />,
  },
  {
    path: "/new",
    element: <New />,
  },
]);

export default router;
