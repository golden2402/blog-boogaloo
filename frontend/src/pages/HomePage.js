import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to blog-boogaloo!</h1>
      <p>This is a temporary splash page to help with user navigation.</p>

      <NavLink to="/blogs">
        <h2>Click here to go to /blogs!</h2>
      </NavLink>
    </div>
  )
}

export default HomePage;