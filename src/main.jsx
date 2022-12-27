import React from "react";
import ReactDOM from "react-dom/client";
//Routes
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
//pages
import Home from "./pages/Home";
import Users from "./pages/users/Users";
import Posts from "./pages/posts/Post";
import { UsersDetails } from "./pages/users/UsersDetails";
import { PostsDetails } from "./pages/posts/PostsDetails";
import { AddUser } from "./pages/users/AddUser";
import { EditUser } from "./pages/users/EditUser";
import { AddPost } from "./pages/posts/AddPost";
import { EditPost } from "./pages/posts/EditPost";
//css

//components

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/users/:id",
    element: <UsersDetails />,
  },
  {
    path: "/users/:id/posts",
    element: <PostsDetails />,
  },
  {
    path: "/adduser",
    element: <AddUser />,
  },
  {
    path: "users/:id/edituser",
    element: <EditUser />,
  },
  {
    path: "/posts",
    element: <Posts />,
  },
  {
    path: "/posts/:id",
    element: <PostsDetails />,
  },
  {
    path: "/posts/:id/users",
    element: <UsersDetails />,
  },
  {
    path: "/addpost",
    element: <AddPost />,
  },
  {
    path: "posts/:id/editpost",
    element: <EditPost />,
  },
  {
    path: "*",
    element: "Error 404, esta pagina no existe",
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
