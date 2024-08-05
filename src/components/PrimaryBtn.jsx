import React from 'react'

const PrimaryBtn = ({ onClick, label, width }) => {
    return (
        <button onClick={onClick} className={`${width || 'w-fit'} px-5 h-[46px] bg-[#DFAA5B] hover:bg-[#DFAA5B]/90 text-white text-sm rounded-lg`}>
            {label}
        </button>
    )
}

export default PrimaryBtn