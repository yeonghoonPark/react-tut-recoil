import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Names from './pages/Names';
import Root from './pages/Root';
import Temp from './pages/Temp';
import Test from './pages/Test';
import TodoList from './pages/TodoList';
// 12345
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/todolist',
        element: <TodoList />,
      },
      {
        path: '/test',
        element: <Test />,
      },
      {
        path: '/temp',
        element: <Temp />,
      },
      {
        path: '/names',
        element: <Names />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
