import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./pages/Root";
import TodoList from "./pages/TodoList";

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
                path: "/todo",
                element: <TodoList />,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
