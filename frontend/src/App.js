import { useEffect, useState } from "react";
import parseBlogPosts from "./util/parseBlogPosts";

import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Outlet />
  )
}

export default App;