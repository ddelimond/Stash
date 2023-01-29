import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'

const Categories = () => {



    return (

        <div className='container flex flex-row justify-between gap-x-6 p-5'>
            {categories.map((item) => <CategoryItem key={item.id} item={item} />)}
        </div>

    )
}
export default Categories