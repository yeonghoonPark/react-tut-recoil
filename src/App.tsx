import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Root from './pages/Root';
import Temp from './pages/Temp';
import Test from './pages/Test';
import TodoList from './pages/TodoList';

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
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
