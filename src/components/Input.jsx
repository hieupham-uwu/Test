import clsx from 'clsx';
import React, { useState } from 'react';

function Input() {
    const [isChecked, setIsChecked] = useState(false);
    const buttonStyle = clsx('dot top-1 absolute transition transition-all h-6 w-6 rounded-full bg-white transition', {
        ' left-1': !isChecked,
    });
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <>
            <label className="m-4 flex cursor-pointer select-none items-center">
                <div className="relative">
                    <input type="checkbox" checked={isChecked} onClick={handleCheckboxChange} className="sr-only" />
                    <div className="block h-8 w-14 rounded-full bg-[#E5E7EB]"></div>
                    <div className={isChecked ? `${buttonStyle} right-1` : buttonStyle}></div>
                </div>
            </label>
        </>
    );
}

export default Input;
