import React from 'react'

const UpdateWorkout = () => {
  return (
   <>
   update work form
   </>
  )
}

export default UpdateWorkout









// import { useContext, useState } from 'react'
// import { primaryContext } from '../../context/primaryContext'
// import axios from 'axios';

// const UpdateForm= () => {
// const [workout, setWorkout, workoutToEdit, setWorkoutToEdit] =useState(null)
//     const { user, setUser} = useContext(primaryContext);
  
//     console.log(workoutToEdit);
        
//         const handleChange = (e) => {
//             const { workout, value } = e.target;
//             setWorkoutToEdit(formData => ({
//                 ...formData,
//                 [exercise]: value
//             }));
//         };


        
    
//         const handleSubmit = async (e) => {
//             e.preventDefault();
    
//             let response = await axios({
//                 method: "PUT",
//                 url: `/server/workout/${workoutToEdit._id}`,
//                 data: workoutToEdit // found in req.body
//             })
//             console.log(response);
    
//             let newWorkout = workout.map((workout) => {
//                 if (workout._id == workoutToEdit._id) {
//                     return response.data
//                 } else {
//                     return workout
//                 }
//               })
//               setWorkout(newWorkout);
//               setWorkoutToEdit(null)
    
//             // update fronted state as well!
//         }
    
   
    
//       return (
//         <></>
//     //     <form onSubmit={handleSubmit}>
//     //     <div styles= {{backgroundColor:'lightblue', width:'300px', minHeight:'200px'}}>
//     //         <label htmlFor="exercise">Exercise:</label>
//     //         <input
//     //             type="text"
//     //             id="exercise"
//     //             exercise="exercise"
//     //             value={workoutToEdit.exercise}
//     //             onChange={handleChange}
                
//     //         />
//     //     </div>
//     //     <div>
//     //         <label htmlFor="set">Set:</label>
//     //         <input
//     //             type="number"
//     //             id="set"
//     //             set="set"
//     //             value={workoutToEdit.set}
//     //             onChange={handleChange}
//     //         />
//     //     </div>
//     //     <div>
//     //         <label htmlFor="reps">Reps:</label>
//     //         <input
//     //             type="text"
//     //             id="reps"
//     //             reps="reps"
//     //             value={workoutToEdit.reps}
//     //             onChange={handleChange}
//     //         />
//     //     </div>
//     //     <div>
//     //         <label htmlFor="weight">Weight:</label>
//     //         <input
//     //             type="text"
//     //             id="weight"
//     //             weight="weight"
//     //             value={workoutToEdit.weight}
//     //             onChange={handleChange}
//     //         />
//     //     </div>
//     //     <div>
//     //         <label htmlFor="other">Other:</label>
//     //         <input
//     //             type="text"
//     //             id="other"
//     //             weight="other"
//     //             value={workoutToEdit.other}
//     //             onChange={handleChange}
//     //         />
//     //     </div>
//     //     <button type="submit">Submit updates</button>
//     // </form>
     
  
//   )
// }

// export default UpdateForm
