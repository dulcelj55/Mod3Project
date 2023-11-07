import { Link } from "react-router-dom";
import { useContext } from "react";
import { primaryContext } from "../../Context/primaryContext";
import "./index.css";

const Home = () => {
  const { user, isSubmitted } = useContext(primaryContext);

  return (
    <>
      <div
        id="image"
        style={{
          backgroundImage: `url(./workout.jpeg)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
       {isSubmitted ? (
  `Logged in as ${user}`
) : (
  <Link to="/Login">Sign In</Link>
)}
      </div>
    </>
  )
}  

export default Home;
