import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Layout"
import Home from "./Components/Home/home"
import About from "./Components/About/about"
import Blogs from "./Components/Blogs/blogs"
import Contact from "./Components/Contact/contact"
function App() {
  const router = createBrowserRouter([{
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
        path: "/blog",
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
