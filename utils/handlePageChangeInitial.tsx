import { Dispatch, SetStateAction } from 'react'
import getItemsByPage from './getItemsByPage'
import { DataProps } from './interface'

interface FunctionProps {
        setLoading: Dispatch<SetStateAction<boolean>>
        totalPages: number
        currentPage: number
        setCurrentPage: Dispatch<SetStateAction<number>>
        itemsLength: number
        itemsPerPage: number
        setHasMore: Dispatch<SetStateAction<boolean>>
        items: DataProps[]
        setItems: Dispatch<SetStateAction<DataProps[]>>
        hasMore: boolean
        timeoutIdInitial: any
        setTimeoutIdInitial: Dispatch<SetStateAction<any>>
    }

        const handlePageChangeInitial = ({setLoading, currentPage, setCurrentPage, totalPages, itemsLength, setHasMore, itemsPerPage, items, setItems,  hasMore, timeoutIdInitial, setTimeoutIdInitial} : FunctionProps) => {
            const x = () => {
                setLoading(true)
                const pageTwo = getItemsByPage({ currentPage: 2 })
                const pageTwoItems = pageTwo.currentItems
                const itemsSoFar = itemsPerPage + pageTwoItems.length
                const itemsLeft = itemsLength - itemsSoFar
                const timeoutFunction = setTimeout(() => {
                    pageTwoItems && setItems(pageTwoItems)
                    //itemsSoFar = page 1 + page 2
                    setCurrentPage(prevePage => prevePage + 1)
                    console.log(`currentPage: ${currentPage}`)
                    setHasMore(itemsLeft > 0)
                    setLoading(false)
                }, 2000);
                clearTimeout(timeoutIdInitial)
                setTimeoutIdInitial(timeoutFunction)                    
            }
            if(currentPage > totalPages) return
            (currentPage === 2) && x()
        }

export default handlePageChangeInitial