'use client'

import { useAppContext } from '@/context/Context';
import React, { useEffect, useState } from 'react'

interface ITipButton {
  value: number
}

const TipButtonComponent = (props: ITipButton) => {

  const {tip, setTip, isCustom, setIsCustom} = useAppContext();

  const handleTip = () => {
    setIsCustom(false);    
    if (tip == props.value) {
      setTip(undefined);
    } else {
      setTip(props.value)
    }

  }

  const [myClassName, setMyClassName] = useState<string>('active:bg-ActiveButton active:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:text-VeryDarkCyan w-[100%] h-[40px] lg:h-[50px] cursor-pointer rounded font-SpaceMonoBold text-xl lg:text-2xl flex justify-center items-center bg-StrongCyan text-VeryDarkCyan');

  useEffect(() => {
    if (tip == props.value && !isCustom) {
    setMyClassName('active:bg-ActiveButton active:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:text-VeryDarkCyan w-[100%] h-[40px] lg:h-[50px] cursor-pointer rounded font-SpaceMonoBold text-xl lg:text-2xl flex justify-center items-center bg-StrongCyan text-VeryDarkCyan')
  } else {
    setMyClassName('active:bg-ActiveButton active:text-VeryDarkCyan hover:bg-LightGrayishCyan hover:text-VeryDarkCyan w-[100%] h-[40px] lg:h-[50px] cursor-pointer rounded font-SpaceMonoBold text-xl lg:text-2xl flex justify-center items-center bg-VeryDarkCyan text-VeryLightGrayishCyan')
  }    
  },[tip, isCustom])


  return (
    <div onClick={handleTip} className={myClassName}>{props.value}%</div>
  )
}

export default TipButtonComponent