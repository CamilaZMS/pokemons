import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/login/index.js";
import PokeList from "../pages/pokelist/index.js";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/pokemons", element: <PokeList /> },
];

const router = createBrowserRouter(routes);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
