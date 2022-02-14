// import React from 'react'
import { data } from './data'
import { DataProps } from './interface';

interface FunctionProps {
    currentPage: number;   
}

const getItemsByPage = ({ currentPage } : FunctionProps) => {
    const itemsPerPage = 4
    const allItems = data
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - (itemsPerPage);
    const currentItems: DataProps[] = allItems.slice(indexOfFirstItem, indexOfLastItem);
    const itemsLength: number = allItems.length
    const totalPages = Math.ceil(itemsLength / itemsPerPage)

    return {
        currentItems: currentItems, 
        itemsLength: itemsLength,
        totalPages,
    }
}

export default getItemsByPage