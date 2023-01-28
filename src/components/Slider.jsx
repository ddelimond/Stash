import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { slider1, slider2, slider3 } from '../assets/index'
import { useState, useEffect } from 'react';


const { activeSlide, setActiveSlide } = useState('0')


const Slider = () => {
    return (
        <div className=" container w-screen max-w-full h-screen flex overflow-hidden relative">
            <div onClick={() => handleClick('left')} className="flex justify-center absolute  opacity-80 left-[1rem] z-10 cursor-pointer bottom-0 top-0 m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowBackIosIcon />
            </div>
            <div className='wrapper transition-transform m-0    translate-y-[0] flex h-full'>
                <div className='slide flex w-screen  bg-red-200  items-center  h-screen'>
                    <div className=' ImgContainer grow  flex justify-center h-full '>
                        <img className='h-[90%] ml-5' src={slider1} />
                    </div>
                    <div className=' InfoContainer grow bg-green-500  p-12 flex flex-col'>
                        <h1 className='text-[70px] font-bold'>SUMMER SALE</h1>
                        <p className='font-5 my-12 max-w-lg  tracking-[.3rem]'>DON'T COMPROMISE ON STYLE! GET 30% OFF ALL NEW ARRIVALS.</p>
                        <button className='cursor-pointer p-3 text-xl bg-transparent border-2 w-[150px] border-black  '>SHOP NOW</button>
                    </div>
                </div>
                <div className='slide flex w-screen items-center  h-screen'>
                    <div className=' ImgContainer  flex justify-center h-full '>
                        <img className='  h-[90%] ml-5' src={slider2} />
                    </div>
                    <div className=' InfoContainer p-12 flex flex-col'>
                        <h1 className='text-[70px] font-bold'>CLEARANCE SALE</h1>
                        <p className='font-5 my-12 tracking-[.3rem]'>DON'T COMPROMISE ON STYLE! GET 30% OFF ALL NEW ARRIVALS.</p>
                        <button className='cursor-pointer p-3 text-xl bg-transparent border-2 w-[150px] border-black  '>SHOP NOW</button>
                    </div>
                </div>
                <div className='slide flex w-screen bg-[#928DB5]  items-center  h-screen'>
                    <div className=' ImgContainer  flex justify-center h-full '>
                        <img className='h-[90%]  ml-5' src={slider3} />
                    </div>
                    <div className=' InfoContainer  p-12 flex flex-col'>
                        <h1 className='text-[70px] font-bold'>POPULAR SALE</h1>
                        <p className='font-5 my-12 tracking-[.3rem]'>DON'T COMPROMISE ON STYLE! GET 30% OFF ALL NEW ARRIVALS.</p>
                        <button className='cursor-pointer p-3 text-xl bg-transparent border-2 w-[150px] border-black  '>SHOP NOW</button>
                    </div>
                </div>
            </div>
            <div onClick={() => handleClick('right')} className="flex justify-center absolute  opacity-80 cursor-pointer z-10 bottom-0 top-0 right-[1rem] m-auto items-center h-12 w-12 bg-slate-50 rounded-3xl">
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default Slider