import ContextProvider from "./context";
import Navbar from "./Components/Navbar/navbar";
import SignIn from "./Pages/SignIn/signIn";
import SignUp from "./Pages/SignUp/signUp";
import Homepage from "./Pages/HomePage/home"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navbar />,
      children: [
        {
          path: "/",
          element: < Homepage/>,
          
        },
        {
          path: "signin",
          element: < SignIn/>,
          
        },
        {
          path: "signup",
          element: < SignUp/>,
          
        },
      ],
    },
  ]);
  return (
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  );
}

export default App;
