import React from 'react'

const Input = ({ width, type, name, value, handleChange, label }) => {
    return (
        <div className={`${width}`}>
            <input
                type={type}
                name={name}
                value={value}
                onChange={handleChange}
                placeholder={label}
                className={`h-[46px] px-3 w-full outline-none bg-white rounded-lg text-sm placeholder:text-[#808080]`}
            />
        </div>
    )
}

export default Input