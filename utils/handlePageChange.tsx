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
        timeoutId: NodeJS.Timeout | null | undefined
        setTimeoutId: Dispatch<SetStateAction<NodeJS.Timeout | null | undefined>>
}

        const handlePageChange = ({setLoading, currentPage, setCurrentPage, totalPages, itemsLength, setHasMore, itemsPerPage, items, setItems, hasMore, timeoutId, setTimeoutId} : FunctionProps) => {
            if(hasMore === false) return
            const x = () => {
                setLoading(true)
                const pageData = getItemsByPage({ currentPage: currentPage })
                console.log(`pageData: ${JSON.stringify(pageData)}`)
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
                }, 2000);
                console.log(`timeoutId: ${timeoutId}`);
                timeoutId && clearTimeout(timeoutId)
                setTimeoutId(timeoutFunction)                    
            }

            if(currentPage > totalPages) return
            (currentPage >= 3) && x()
        }

export default handlePageChange