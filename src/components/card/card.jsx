import React, { useEffect, useState } from 'react'
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { logo, product } from '../../assets';
import axios from 'axios';
const Card = ({text, img}) => {
  const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const [data, setData] =useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
      axios.get("https://full-api.onrender.com/api/product/get").then((res) => {
        setLoading(false)
        setData(res.data.data)
      })
    })
    console.log(data);
  return (
   
   <div className='flex justify-between flex-wrap items-center  z-[20] relative'>
    {loading? <span className="loading flex justify-center items-center loading-spinner loading-lg"></span> :
    <div className='flex justify-start flex-wrap gap-7 items-center'>
      {data.map((item, i) => (
      <div key={i}>
      <div className=" w-[229px] h-[240px] bg-white rounded-[8px] relative">
 <div className="px-[0px] pt-3 flex justify-between items-center absolute z-50 w-[100%]">
     <div className="pl-[10px] text-[10px] text-white font-[500]">
       <p className='w-[100px]'>{item.name}</p>
       {/* <p className='text-[12px] font-[400]'>Сковороды</p> */}
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
     <img src={item.url} alt='img' />
 </div>

 <div className='bg-white'>
 <div className='flex flex-col justify-center w-[90%] m-auto '>
         
         <h1 className='text-center text-[14px] font-[500]'>{item.info}</h1>
     <div className='flex justify-between items-center'>
        <div className='w-[60px] h-[20px] bg-[#E24C55] text-[13px] font-[600] text-white text-center'>-{item.seil}%</div>
        <p className='text-[16px] font-[600] ' style={{textDecoration: "line-through", textDecorationColor :"red"}}>{item.oldPrice}</p>
        <p className='text-[18px] font-[700]'>{item.newPrice}</p>
     </div>
    
 </div>
 </div>
</div>
   </div>
    ))}
    </div>
    }
   </div>
  )
}

export default Card
