import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Maiin from "./Maiin"
import Home from "./Home"
import Login from "./Login"
import Resistration from "./Resistration"


function App() {
 const router =createBrowserRouter([
  {
    path:'/',
    element:<Maiin></Maiin>,
    children:([
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'Login',
        element:<Login></Login>
      },
      {
        path:'Resistration',
        element:<Resistration></Resistration>
      }
    ])
  }
 ])

  return (
  <RouterProvider router={router}></RouterProvider>
  )
}

export default App
