'use client'

import React from 'react'
import TipButtonComponent from './TipButtonComponent';
import CustomButtonComponent from './CustomButtonComponent';

const TipComponent = () => {

  const tipArray = [5, 10, 15, 25, 50];

  return (
    <div className='text-[18px] font-SpaceMonoBold'>Select Tip %
      <div className='relative mt-2 font-SpaceMonoRegular  text-[20px] grid grid-cols-3 grid-rows-2 gap-4 '>
        {
          tipArray.map( x => {
            return(
              <TipButtonComponent value={x}/>
            )
          })
        }
        <CustomButtonComponent/>
      </div>
    </div>
  )
}

export default TipComponent