import { Link } from "react-router-dom"
import NavBar from '../../Components/NavBar'



const Home = () => {
  return (
    <>
   
    <h1>Choose Your Workout</h1>
    <div>
        <Link to = "/manual"><button>Manual</button></Link>
        <Link to = "/cardio"><button>Cardio</button></Link>
        <Link to = "/five"><button>5xs A Week</button></Link>
        <Link to = "/four"><button>4xs A week</button></Link>
        <Link to = "/everyday"><button>Everyday</button></Link>
        <Link to = "/progress"><button>Progress</button></Link>
    </div>
    <br/>
    <button>Check your Progress</button>
    
    
    </>
  )
}

export default Home