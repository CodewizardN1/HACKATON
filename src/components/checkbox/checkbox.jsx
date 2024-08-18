import React, { useState } from 'react'

const Checkbox = ({ text }) => {
    const [isChecked, setIsChecked] = useState(false);
    const handleToggle = () => {
        setIsChecked(!isChecked);
    };
    return (
        <div className='flex items-center gap-2'>
            <input type="checkbox" className="checkbox" checked={isChecked}
                onChange={handleToggle} />
            <h3 className='text-[12px] text-[#333333]'>{text}</h3>
        </div>
    )
}

export default Checkbox
