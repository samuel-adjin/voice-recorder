import React, { ReactNode } from 'react'

type WaveProps ={
    children?:ReactNode
}
const Wave = ({children}:WaveProps) => {
  return (
    <div className='bg-[#dff1ff] lg:h-[30vh] w-screen '>
        {children}
    </div>
  )
}

export default Wave