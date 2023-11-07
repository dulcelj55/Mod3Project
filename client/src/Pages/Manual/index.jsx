import { useState} from 'react'
import WorkOutForm from '../../Components/WorkOutForm'
import Today from '../../Components/Today'
import "./index.css"

const Manual = () => {
const [progress, setProgress]= useState(false)
const handleChange= ()=>{
  setProgress(!progress);
  console.log(progress);
};

  return (
   
      <div id="center"
        id="image"
        style={{
          backgroundImage: `url(/src/assets/backgroundgym.avif)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        >
      <h1 id="h1">Manual Workout</h1>
       <br/>

        <WorkOutForm/>
        <br/>
        
        <button onClick={handleChange}>See Your Progress for Today</button>

       <> { progress ?  <Today/>: <></>} </>
       
        
        
    </div>
   
  )
}

export default Manual