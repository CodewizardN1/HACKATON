import React from 'react'
import Wrapper from '../../layout/wrapper'
import { logo, logotext } from '../../assets'

const Navbar = () => {
  return (
    <div>
      <Wrapper >
        <div>
          <div className='flex align-middle gap-[1px] h-[57px]'>
            <img src={logo} alt="" />
            <div className='pt-[13px]'>
              <img src={logotext} alt="" />
              <h4 className='text-[10px] text-[#494949]'>ХОЗТОВАРЫ С ДОСТАВКОЙ</h4>
            </div>
          </div>
          <div>
            <button className='flex align-middle gap-[3] text-white btn bg-[#E24C55] w-[200px] h-[40px] rounded-none'><svg xmlns="http://www.w3.org/2000/svg" width="25" height="15" viewBox="0 0 25 15" fill="none">
              <line y1="1" x2="25" y2="1" stroke="white" stroke-width="2" />
              <line y1="7.5" x2="25" y2="7.5" stroke="white" stroke-width="2" />
              <line y1="14" x2="25" y2="14" stroke="white" stroke-width="2" />
            </svg>
            
            Каталог товаров</button>
            <label className="input  flex items-center gap-2">
  <input type="text" className="grow" placeholder="Search" />
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="currentColor"
    className="h-4 w-4 opacity-70">
    <path
      fillRule="evenodd"
      d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
      clipRule="evenodd" />
  </svg>
</label>

            {/* <div className='w-[318px] h-[40px]'>

            </div> */}
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default Navbar