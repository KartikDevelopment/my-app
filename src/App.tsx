import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Navbar } from "./components/NavBar";
import { TextForm } from "./components/TextForm";
import { Home } from "./screens/Home";
import { About } from "./screens/About";
import {
  Router,
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/About",
      element: <About />,
    },
  ]);
  return (
    <div>
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
