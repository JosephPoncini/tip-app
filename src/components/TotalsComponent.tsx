'use client'

import React from 'react'

const TotalsComponent = () => {
  return (
    <div className=" bg-VeryDarkCyan rounded-2xl text-white p-10 flex flex-col justify-between">

      <div className='h-[50%] flex flex-col justify-between'>
        <div className='flex justify-between'>
          <div>
            <div className='text-sm'>Tip Amount</div>
            <div className='text-xs text-GrayishCyan'>/ person</div>
          </div>
          <div className='text-4xl text-StrongCyan'>$0.00</div>
        </div>

        <div className='flex justify-between'>
          <div>
            <div className='text-sm'>Total</div>
            <div className='text-xs text-GrayishCyan'>/ person</div>
          </div>
          <div className='text-4xl text-StrongCyan'>$0.00</div>
        </div>
      </div>

      <div className='w-[full] h-[50px] bg-[#0d686d] cursor-pointer flex justify-center items-center text-xl text-VeryDarkCyan'>
        RESET
      </div>


    </div>
  )
}

export default TotalsComponent