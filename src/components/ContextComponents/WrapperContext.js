import React, { createContext, useState } from 'react'

export const AlertProvider = createContext()

export default function WrapperContext({children}) {

    const [alert, setAlert] = useState('')
    const [toggle, setToggle] = useState(false)

    const show = () => {setToggle(prev=>!prev)}


  return (
    <AlertProvider.Provider value={{
        alert,
        toggle,
        setAlert,
        show
    }}>
        {children}
    </AlertProvider.Provider>
  )
}
