import Home from './pages/Home';
import Login from './pages/Login';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/pages/Home",
    element: <Home/>
  }, {
    path: "/pages/Login",
    element: <Login/>
  },
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
