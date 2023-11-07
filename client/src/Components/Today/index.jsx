import { useState, useEffect } from "react";
import axios from "axios";
import "./index.css";

const Today = () => {
  
  const [newExercise, setNewExercise] = useState("");
  const [newSet, setNewSet] = useState("");
  const [newReps, setNewReps] = useState("");
  const [newWeight, setNewWeight] = useState("");
  const [newOther, setNewOther] = useState("");
  const [workouts, setWorkouts] = useState([]);
  const [show, setShow] = useState("");

  //DISPLAY WORKOUTS OF THAT DAY
  useEffect(() => {
    axios({
      method: "GET",
      url: "/server/workout",
    }).then((res) => {
      console.log(res.data);
      setWorkouts(res.data);
    });
  }, []);

  //DELETE
  const handleDelete = async (workoutId) => {
    try{ 
      let response = await axios({
      method: "DELETE",
      url: `/server/workout/${workoutId}`,
    });
    setWorkouts(response.data)
    }
    catch{
console.log("unable to get new data after delete")
    }
   
  };

  const handleEdit = (exerciseId) => {
  setShow(exerciseId);
    console.log(show);
  
  };

  //UPDATE
  const handleUpdate = async(exercise) =>{
   
    console.log("handleSUBMIT")
    try{ 
      let response = await axios({
      method: "PUT",
      url: `/server/workout/${exercise._id}`,
      data: {
        exercise: newExercise || exercise.exercise,
        set: newSet || exercise.set,
        reps:newReps || exercise.reps,
        weight: newWeight || exercise.weight,
        other: newOther|| exercise.other,
  
  }});
      console.log(response)
    setWorkouts(response.data)
    }
    catch(err) {
console.log("unable to get new data after update" + err)
    }

  }
 
  

  return (
    <>
      <div>
        <div>
          {" "}
          Today's Work:
          <br />
          {workouts.map((exercise) => {
            return (
              <div key={JSON.stringify(exercise)}>
             
                <br />
                Exercise: {exercise.exercise}
                <br />
                Sets: {exercise.set}
                <br />
                Reps: {exercise.reps}
                <br />
                Weight: {exercise.weight}
                <br />
                {exercise.other}
                <br />
                <button onClick={() => handleDelete (exercise._id)}>Delete</button>
                <button onClick={() => handleEdit (exercise._id)}>Edit</button>
                <br />
                {show === exercise._id ? (
            <form onSubmit={(e) => e.preventDefault()}>
              <input
              placeholder="exercise"
                value={newExercise}
                onChange={(e) => setNewExercise(e.target.value)}
              />
              <input
              placeholder="set"
                value={newSet}
                onChange={(e) => setNewSet(e.target.value)}
              />
              <input
              placeholder="reps"
                value={newReps}
                onChange={(e) => setNewReps(e.target.value)}
              />
              <input
              placeholder="weight"
                value={newWeight}
                onChange={(e) => setNewWeight(e.target.value)}
              />
              <input
              placeholder="other"
                value={newOther}
                onChange={(e) => setNewOther(e.target.value)}
              />
              <button onClick={() => handleUpdate(exercise)}>
                Update this Event
              </button>
            </form>
          ) : (
            <></>
          )}
                <br />
              </div>
            );
          })}
          
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Today;
