import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'
import ForgotPassword from './pages/ForgotPassword';

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
]);
function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
