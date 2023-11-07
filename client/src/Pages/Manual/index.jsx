import { useState} from 'react'
import WorkOutForm from '../../Components/WorkOutForm'
import Today from '../../Components/Today'
import UpdateForm from '../../Components/UpdateForm'

const Manual = () => {
const [progress, setProgress]= useState(false)
const handleChange= ()=>{
  setProgress(!progress);
  console.log(progress);
};

  return (
    <div>Manual Workout 
        <WorkOutForm/>
        <br/>
        
        <button onClick={handleChange}>See Your Progress for Today</button>

        { progress ?  <Today/>: <></>}
       
        
        
    </div>
  )
}

export default Manual