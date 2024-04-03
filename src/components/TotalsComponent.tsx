'use client'

import { useAppContext } from "@/context/Context"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";


const TotalsComponent = () => {

  const data = useAppContext();

  const [tipAmount, setTipAmount] = useState<number>(0);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [className, setClassName] = useState<string>('w-[full] h-[45px] bg-[#0d686d] cursor-pointer flex justify-center items-center text-xl text-VeryDarkCyan active:bg-ActiveButton hover:bg-ActiveButton')

  const clickHandle = () => {
    data.setBill(0);
    data.setGroupSize(0);
    data.setTip(undefined);
    data.setIsCustom(false);
  }


  useEffect(() => {
    if ((data.tip != undefined) || (data.bill != 0) || (data.groupSize != 0)) {
      setClassName('w-[full] h-[45px] bg-StrongCyan cursor-pointer flex justify-center items-center text-xl text-VeryDarkCyan active:bg-ActiveButton hover:bg-ActiveButton')
    } else {
      setClassName('w-[full] h-[45px] bg-[#0d686d] cursor-pointer flex justify-center items-center text-xl text-VeryDarkCyan active:bg-ActiveButton hover:bg-ActiveButton')
    }


    if ((data.tip != undefined) && (data.bill != 0) && (data.groupSize != 0)) {
      const theTip = data.tip * data.bill / 100;
      setTipAmount(theTip / data.groupSize)
      setTotalAmount((data.bill + theTip ) / data.groupSize)
    } else {
      setTipAmount(0)
      setTotalAmount(0);
    }
  }, [data.tip, data.bill, data.groupSize])



  return (

    <div className=" bg-VeryDarkCyan rounded-2xl text-white py-10 px-5 lg:p-10 flex flex-col justify-between">

      <div className='h-[50%] flex flex-col justify-between'>
        <div className='flex justify-between mb-5'>
          <div>
            <div className='text-sm'>Tip Amount</div>
            <div className='text-xs text-GrayishCyan'>/ person</div>
          </div>
          <div className='text-3xl lg:text-4xl text-StrongCyan'>${tipAmount.toFixed(2)}</div>
        </div>

        <div className='flex justify-between mb-5'>
          <div>
            <div className='text-sm'>Total</div>
            <div className='text-xs text-GrayishCyan'>/ person</div>
          </div>
          <div className='text-3xl lg:text-4xl text-StrongCyan'>${totalAmount.toFixed(2)}</div>
        </div>
      </div>

      <div className={className}
        onClick={clickHandle}
      >
        RESET
      </div>


    </div>
  )
}

export default TotalsComponent