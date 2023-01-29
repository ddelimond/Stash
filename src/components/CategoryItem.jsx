import React from 'react'
import Card from '@material-ui/core/Card';

const CategoryItem = ({ item }) => {

    return (
        <div>
            <Card variant='outlined' className=' container relative h-[70vh] w-[31.5vw] p-4 grow'>
                <img src={item.img} alt="category image" className='w-full h-full object-cover' />
                <div className='Info absolute top-40 left-[34%] flex flex-col justify-center items-center'>
                    <h1 className='title font-bold text-2xl text-white'>{item.title}</h1>
                    <button className='bg-white hover:text-black transition-all ease-in-out duration-1500 text-gray-400 rounded-sm p-2 cursor-pointer '>SHOP NOW</button>
                </div>
            </Card>
        </div>
    )
}
export default CategoryItem