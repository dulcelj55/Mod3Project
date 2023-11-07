import { useState } from "react";
import axios from "axios";
import "./index.css"

const WorkOutForm = () => {
    const [formData, setFormData] = useState({
        exercise: '',
        set: '',
        reps: '',
        weight: '',
        other: ''
      });
   const [workout, setWorkout] = useState([])

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
          })
         
       
    };
      const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle the submission logic here
        console.log(formData);
    
        try {
            let response = await axios({
                method: "POST",
                url: "/server/workout",
                data: formData // found in req.body
              })
              console.log(response); // response.data is the new workout
              setWorkout([...workout, response.data]);
              setFormData({
                exercise: '',
                reps: '',
                set: '',
                weight: '',
                other: ''
            })
        } catch (err) {
            // set some errors state letting them know there was an issue
        }
    };
    
    
  return (
    <form onSubmit={handleSubmit}>
       
        <div className="textcolor">
            <label id="exercise">Exercise:</label>
            <input
                type="text"
                id="exercise"
                name="exercise"
                value={formData.exercise}
                onChange={handleChange}
            />
        </div>
        <div className="textcolor">
            <label id="set">Sets:</label>
            <input
                type="number"
                id="set"
                name="set"
                value={formData.set}
                onChange={handleChange}
            />
        </div>
        <div className="textcolor">
            <label id="reps">Reps:</label>
            <input
                type="number"
                id="reps"
                name="reps"
                value={formData.reps}
                onChange={handleChange}
            />
        </div>
        <div className="textcolor">
            <label id="weight">Weight:</label>
            <input
                type="number"
                id="weight"
                name="weight"
                value={formData.weight}
                onChange={handleChange}
            />
        </div>
        <div className="textcolor">
            <label id="other">Other:</label>
            <input
                type="text"
                id="other"
                name="other"
                value={formData.other}
                onChange={handleChange}
            />
        </div>
        <button type="submit">Record Exercise</button>
    </form>
  )
}

export default WorkOutForm
