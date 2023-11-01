import { createContext, useState } from "react"

export const primaryContext = createContext()
const PrimaryProvider = (props) =>{
    const [user, setUser]= useState('')
    const [dateTime, setDateTime]= useState('')
    const [userImage, setUserImage]= useState('')
  return (
    <primaryContext.Provider value={
        {
            user,
            setUser,
            dateTime,
            setDateTime,
            userImage,
            setUserImage
        }
    }>
        {props.children}
    </primaryContext.Provider>
    
)
}
export default PrimaryProvider