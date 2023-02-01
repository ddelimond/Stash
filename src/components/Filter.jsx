import React from 'react'

const Filter = () => {
    return (
        <div className='contianer flex justify-between items-center w-screen h-[20vh]'>
            <div className='filter'>
                <span className='filterText text-5 font-bold'>
                    Filter Products:
                </span>
                <select name="Filter" id="Sort" className='ml-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </div>

            <div className='filter'>
                <span className='filterText text-5 font-bold'>
                    Sort Products:
                </span>
                <select name="Sort" id="Sort" className='mr-10 p-2 w-[100px] focus:outline-none h-[40px] text-center border-2 border-solid border-black'>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>

            </div>

        </div>
    )
}

export default Filter