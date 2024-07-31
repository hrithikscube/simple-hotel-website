import React, { Fragment } from 'react'
import { Inter } from "next/font/google";
import Header from '@/components/Header';

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  // update landing page from figma here
  return (
    <Fragment>
      <Header />
      <div className={`${inter.className} flex flex-col items-center justify-center w-full h-screen`}>
        <h1 className='lg:text-base text-sm'>Hotel Landing Page</h1>
      </div>
    </Fragment>
  )
}

export default Home