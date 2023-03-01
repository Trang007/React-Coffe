import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword';
import Introduce from './pages/Introduce';
import Product from './pages/Product';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  }, 
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/Register",
    element: <Register/>
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword/>
  },
  {
    path: "/Introduce",
    element: <Introduce/>
  },
  {
    path: "/Product",
    element: <Product/>
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
