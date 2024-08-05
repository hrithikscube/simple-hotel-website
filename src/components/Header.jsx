import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

const header_links = [
    {
        name: 'Our Hotel',
        link: '/our-hotel'
    },
    {
        name: 'Rooms & Rates',
        link: '/rooms-and-rates'
    },
    {
        name: 'Facilities',
        link: '/facilities'
    },
    {
        name: 'Contact Us',
        link: '/contact-us'
    },
]

// add header implementation here
const Header = () => {

    const Router = useRouter()

    return (
        <div className='w-full flex flex-col lg:gap-10 gap-6 items-center justify-center lg:px-10 px-5 bg-white lg:py-8 py-6'>

            <div>
                <Image width={151} height={101} src="/logo.svg" alt="logo" className='w-[151px] h-[101px]' />
            </div>


            <div className='flex items-center justify-center lg:gap-7 gap-4'>
                {
                    header_links.map(item => (
                        <button onClick={() => Router.push(item.link)} className='text-[#957554] font-medium lg:text-base text-sm'>{item.name}</button>
                    ))
                }

                <button>
                    <Image width={16} height={16} src="/icons/search.svg" alt="search" />
                </button>

            </div>



        </div>
    )
}

export default Header