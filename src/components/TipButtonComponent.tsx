'use client'

import React from 'react'

interface ITipButton {
    value: number
}

const TipButtonComponent = ( props:ITipButton) => {
  return (
    <div className=' bg-VeryDarkCyan w-[100%] h-[50px] cursor-pointer rounded text-VeryLightGrayishCyan font-SpaceMonoBold text-2xl flex justify-center items-center'>{props.value}%</div>
  )
}

export default TipButtonComponent