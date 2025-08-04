
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Room from './components/Room'
import JoinRoom from './components/JoinRoom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';



function App() {

  const router  =  createBrowserRouter([
    {
      path: "/",
      element: (
        <div>
          <Navbar/>
          <Home/>
          <About/>
          <Contact/>
        </div>

      ),
    },
    {
      path: "/joinroom",
      element:(
        <div>
          <Navbar/>
          <JoinRoom/>
        </div>
      )

    },
    {
      path: "/room",
      element:(
        <Room/>
      ),
    }
  ]);
 

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
