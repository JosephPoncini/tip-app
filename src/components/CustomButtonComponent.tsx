'use client'

import { useAppContext } from '@/context/Context'
import React, { useEffect, useState } from 'react'


const CustomButtonComponent = () => {

  const {tip, setTip, setIsCustom, isCustom} = useAppContext();

  const [value, setValue] = useState<string | undefined>()

  const handleClick = () => {
    setIsCustom(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (!isNaN(Number(e.target.value))) {
      setTip(Number(e.target.value));
    }else{
      if(isCustom){
        (tip != undefined) ? setValue(String(tip)) : setValue("");
      }
    }
  };

  useEffect(() => {
    if(isCustom){
      (tip != undefined) ? setValue(value) : setValue("");
    }else{
      setValue("");
    }
  },[isCustom, tip])

  return (
    <input 
    className='bg-VeryLightGrayishCyan w-[100%] h=[40px] lg:h-[50px] cursor-pointer rounded text-VeryDarkCyan font-SpaceMonoBold text-2xl flex justify-end text-end p-2 items-center placeholder:text-center placeholder:text-GrayishCyan focus:outline-none focus:ring-2 focus:ring-StrongCyan hover:ring-2 hover:ring-StrongCyan' 
    placeholder='Custom'
    onChange={handleChange}
    onClick={handleClick}
    value={value}
    />
  )
}

export default CustomButtonComponent