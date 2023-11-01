import "./index.css";
import { primaryContext } from '../../Context/primaryContext'
import {  useContext, useState } from "react";

const Login = () => {
 
const{user, setUser, userImage, setUserImage}= useContext(primaryContext)
 const [isSubmitted, setIsSubmitted]= useState(false)
  const showInfo = (e) => {
    e.preventDefault();
    setUser(user)
    setUserImage(userImage);
    setIsSubmitted(true);
   };

  const returnInputsOrTexts = () => {
    if (!isSubmitted) {
      return (
        <div>
          <h3 className="center">Please Enter your Name and an Image</h3>
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
        <div className="banner">
          <p className="center">{user}!</p>
         
        </div>
      );
    }
  };

  return <>
  {returnInputsOrTexts()}

 </>
};

export default Login;