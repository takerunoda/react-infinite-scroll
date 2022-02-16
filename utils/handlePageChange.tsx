import { Dispatch, MutableRefObject, SetStateAction } from 'react'
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
        timeoutIdRef: MutableRefObject<any>
    }

        const handlePageChange = ({setLoading, 
            currentPage, 
            setCurrentPage, 
            totalPages, itemsLength, 
            setHasMore, 
            itemsPerPage, 
            items, 
            setItems, 
            hasMore, 
            timeoutIdRef} : FunctionProps) => {
            if(hasMore === false) return
            const x = () => {
                setLoading(true)
                const pageData = getItemsByPage({ currentPage: currentPage })
                const pageDataItems = pageData.currentItems
                const itemsSoFar = itemsPerPage * (currentPage - 1) + pageDataItems.length
                const itemsLeft = itemsLength - itemsSoFar
                const timeoutFunction = setTimeout(() => {
                    pageDataItems && 
                    setItems(prevState => {
                        return [...new Set([...prevState, ...pageDataItems])]
                                        .sort((a, b) => {
                                                const A = a.id
                                                const B = b.id
                                                return A - B })
                    })
                    setCurrentPage(prevePage => prevePage + 1)
                    setHasMore(itemsLeft > 0)
                    setLoading(false)
                }, 1000);
                clearTimeout(timeoutIdRef.current)
                timeoutIdRef.current = timeoutFunction
            }
            if(currentPage > totalPages) return
            (currentPage >= 3) && x()
        }

export default handlePageChange