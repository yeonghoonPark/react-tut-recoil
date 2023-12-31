import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AtomFamilyPage from "./pages/AtomFamilyPage";
import Home from "./pages/Home";
import Names from "./pages/Names";
import Root from "./pages/Root";
import SelectorFamilyPage from "./pages/SelectorFamilyPage";
import Temp from "./pages/Temp";
import Test from "./pages/Test";
import TodoList from "./pages/TodoList";
// 12345
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/todolist",
        element: <TodoList />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/temp",
        element: <Temp />,
      },
      {
        path: "/names",
        element: <Names />,
      },
      {
        path: "/atomfamilypage",
        element: <AtomFamilyPage />,
      },
      {
        path: "/selectorfamilypage",
        element: <SelectorFamilyPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
