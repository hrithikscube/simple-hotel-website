import React, { useState } from 'react'
import Input from './Input'
import PrimaryBtn from './PrimaryBtn'

const Filters = () => {

    const [params, setParams] = useState({
        city: '',
        check_in: '',
        check_out: '',
    })

    const handleChange = (e) => {
        let { name, value } = e.target
        setParams({
            ...params,
            [name]: value
        })
    }

    return (
        <div className='min-h-20 bg-[#111111] w-full flex items-center justify-center lg:py-10 py-8 lg:gap-3 gap-2'>


            <Input
                type="text"
                name="city"
                value={params.city}
                handleChange={handleChange}
                label="Select a City"
                width="lg:w-[180px] w-full"
            />

            <Input
                type="date"
                name="check_in"
                value={params.check_in}
                handleChange={handleChange}
                label="Check in"
                width="lg:w-[180px] w-full"
            />

            <Input
                type="date"
                name="check_out"
                value={params.check_out}
                handleChange={handleChange}
                label="Check out"
                width="lg:w-[180px] w-full"
            />

            <PrimaryBtn
                label="Check Availablity"
            />

        </div>
    )
}

export default Filters