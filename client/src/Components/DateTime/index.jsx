import {primaryContext} from '../../Context/primaryContext'
import { useContext, useState } from 'react'


const DateTime = () => {
    const{dateTime, setDateTime}= useContext(primaryContext)
    
    const[startTime, setStartTime] = useState("")
    const[endTime, setEndTime]= useState('')

    const showInfo = (e) => {
        e.preventDefault();
        setStartTime(startTime)
        setEndTime(endTime);
       
       };


  return (
    <>
   <div>
         {dateTime}
          <form className="center" onSubmit={showInfo}>
            <input
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              placeholder="Start Time"
             
            ></input>
            <input
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              placeholder="End Time"
             
            ></input>
            <button>Submit</button>
          </form>
        </div>
    </>
   
  )
}

export default DateTime