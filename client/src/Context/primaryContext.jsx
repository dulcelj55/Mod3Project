import { createContext, useState } from "react"

export const primaryContext = createContext()
const PrimaryProvider = (props) =>{
    const [user, setUser]= useState('')
    const [dateTime, setDateTime]= useState('')
    const [userImage, setUserImage]= useState('')
    const [isSubmitted, setIsSubmitted]= useState(false)
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
            setIsSubmitted
        }
    }>
        {props.children}
    </primaryContext.Provider>
    
)
}
export default PrimaryProvider