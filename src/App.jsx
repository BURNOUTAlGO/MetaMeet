import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Room from "./components/Room";
import JoinRoom from "./components/JoinRoom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar />
          <Home />
        </div>
      ),
    },
    {
      path: "/joinroom",
      element: (
        <div>
          <Navbar />
          <JoinRoom />
        </div>
      ),
    },
    {
      path: "/room/:roomId",
      element: (
        <div>
          <Room />
        </div>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
