import { Link } from "react-router-dom"
import { useContext } from "react"
import { primaryContext } from "../../Context/primaryContext";




const Home = () => {
  const { user, isSubmitted} = useContext(primaryContext)
  return (
    <>
   <img src="/Users/dulcejaramil/src/assets/workout.jpeg" alt="React Image" />
   { isSubmitted? `Logged in as ${user}` : <Link to="/Login">Login</Link>}
   
   
   
    
    
    </>
  )
}

export default Home