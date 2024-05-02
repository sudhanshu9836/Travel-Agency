import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Layout"
import { Home, About, Blogs, Contact} from "./Components"
function App() {
  const router = createBrowserRouter([{ //Creating router variable
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "/about",
        element: <About/>
      },
      {
        path: "/blogs",
        element: <Blogs/>
      },
      {
        path: "/contact",
        element: <Contact/>
      }
    ]
  }])
  return (
    <>
      <RouterProvider router = {router}/>
    </>
  )
}

export default App
