import React, { useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { logo, product } from '../../assets';
const Card = ({text}) => {
  const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
  return (
   
    <div className=" w-[229px] h-[240px] bg-white rounded-[8px] relative">
    <div className="px-[0px] pt-3 flex justify-between items-center absolute z-50 w-[100%]">
        <div className="pl-[10px] text-[10px] text-white font-[500]">
          <p>Артикул: 515314</p>
          <p className='text-[12px] font-[400]'>Сковороды</p>
        </div>
        <div className='pr-5'>
            <button onClick={handleClick} className='bg-transparent border-none hover:bg-transparent'>
                {show ? 
                <FaHeart color='red' size={'30px'} /> :
            <CiHeart color='white' size={'30px'} />
                    }
            </button>
            
        </div>
    </div>

    <div className='flex justify-center relative z-10 '>
        <img src={product} alt='img' />
    </div>

    <div className='bg-white'>
    <div className='flex flex-col justify-center w-[90%] m-auto '>
            
            <h1 className='text-center text-[14px] font-[500]'>{text} Казан 4,5 л - ТД Карс</h1>
        <div className='flex justify-between items-center'>
           <div className='w-[60px] h-[20px] bg-[#E24C55] text-[13px] font-[600] text-white text-center'>-30%</div>
           <p className='text-[16px] font-[600] ' style={{textDecoration: "line-through", textDecorationColor :"red"}}>3 250</p>
           <p className='text-[18px] font-[700]'>2 250</p>
        </div>
       
    </div>
    </div>
</div>
  )
}

export default Card
