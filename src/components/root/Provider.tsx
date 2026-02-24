'use client'
import React, { useEffect, useState } from 'react'

const Provider = ({children}:{children:React.ReactNode}) => {
    const [maunt,setMaunt] = useState(false)


    useEffect(()=>{
        setTimeout(() => {
            setMaunt(true)
        }, 300);
    },[])

    if(!maunt) return null
  return (
    <>
      {children}
    </>
  )
}

export default Provider
