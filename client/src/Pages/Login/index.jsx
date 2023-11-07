import "./index.css";
import { primaryContext } from "../../Context/primaryContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    user,
    setUser,
    userImage,
    setUserImage,
    isSubmitted,
    setIsSubmitted,
  } = useContext(primaryContext);

  const showInfo = (e) => {
    e.preventDefault();
    setUser(user);
    setUserImage(userImage);
    setIsSubmitted(true);
  };

  const signIn = () => {
    if (!isSubmitted) {
      return (
        <div>
          <h3 className="center">Please Enter your Name and Profile Pic</h3>
          <form className="center" onSubmit={showInfo}>
            <input
              value={user}
              onChange={(e) => setUser(e.target.value)}
              placeholder="User Name"
            ></input>
            <input
              value={userImage}
              onChange={(e) => setUserImage(e.target.value)}
              placeholder="User Image"
            ></input>
            <button>Submit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className="topbar">
          <p className="center">{user}</p>
          <div>
            <h1>Choose your Workout</h1>
            <Link to="/manual">
              <button>Manual</button>
            </Link>
            <Link to="/cardio">
              <button>Cardio</button>
            </Link>
            <Link to="/five">
              <button>5xs A Week</button>
            </Link>
            <Link to="/four">
              <button>4xs A week</button>
            </Link>
            <Link to="/everyday">
              <button>Everyday</button>
            </Link>
            <br/>
            <Link to="/progress">
              <button>Check Your Progress</button>
            </Link>
            <br />
            
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <div
        id="image"
        style={{
          backgroundImage: `url(/src/assets/workout-logging.webp)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {signIn()}
      </div>
    </>
  );
};

export default Login;
