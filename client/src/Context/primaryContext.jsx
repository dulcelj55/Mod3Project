import { createContext, useState } from "react"

export const primaryContext = createContext()
const PrimaryProvider = (props) =>{
    const [user, setUser]= useState('')
    const [dateTime, setDateTime]= useState('')
    const [userImage, setUserImage]= useState('')
    const [isSubmitted, setIsSubmitted]= useState(false)
    const [workouts, setWorkouts]= useState('')
    const [workoutsToEdit, setWorkoutsToEdit]= useState('')
  return (
    <primaryContext.Provider value={
        {
            user,
            setUser,

            dateTime,
            setDateTime,

            userImage,
            setUserImage,

            isSubmitted,
            setIsSubmitted,

            workouts,
            setWorkouts,

            workoutsToEdit,
            setWorkoutsToEdit

        }
    }>
        {props.children}
    </primaryContext.Provider>
    
)
}
export default PrimaryProvider