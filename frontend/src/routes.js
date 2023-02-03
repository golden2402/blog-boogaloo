import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";

import App from "./App";

import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import BlogPreviewPage from "./pages/BlogPreviewPage";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<HomePage />} />

      <Route path="/blogs" element={<BlogPreviewPage />} />
      <Route path="/blogs/:id" element={<BlogPage />} />
    </Route>
  )
)

export default routes;