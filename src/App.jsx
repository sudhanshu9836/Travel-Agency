import { RouterProvider, createBrowserRouter } from "react-router-dom"
import Layout from "../Layout"

import Header from "./Components/Header/header"
import Home from "./Components/Home/home"
import About from "./About/about"
import Footer from "./Components/Footer/footer"
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
