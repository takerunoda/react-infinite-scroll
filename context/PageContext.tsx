import { createContext, Dispatch, SetStateAction, useCallback, useContext, useMemo, useRef, useState } from "react";
import getItemsByPage from "../utils/getItemsByPage";
import handlePageChange from "../utils/handlePageChange";
import handlePageChangeInitial from "../utils/handlePageChangeInitial";
import { ChildrenProps, DataProps } from "../utils/interface";

type PageContextType = {
    loading: boolean
    setLoading: Dispatch<SetStateAction<boolean>>
    isVisible: boolean
    setIsVisible: Dispatch<SetStateAction<boolean>>
    isVisibleInitial: boolean
    setIsVisibleInitial: Dispatch<SetStateAction<boolean>>
    hasMore: boolean
    setHasMore: Dispatch<SetStateAction<boolean>>
    items: DataProps[]
    setItems: Dispatch<SetStateAction<DataProps[]>>
    element: any
    setElement: Dispatch<SetStateAction<any>>
    elementInitial: any
    setElementInitial: Dispatch<SetStateAction<any>>
    currentPage: number
    setCurrentPage: Dispatch<SetStateAction<number>>
    totalPages: number
    setTotalPages: Dispatch<SetStateAction<number>>
    itemsLength: number
    setItemsLength: Dispatch<SetStateAction<number>>
    itemsPerPage: number
    setItemsPerPage: Dispatch<SetStateAction<number>>
    pageChange: any
    pageChangeInitial: any
    timeoutId: NodeJS.Timeout | null | undefined
    setTimeoutId: Dispatch<SetStateAction<NodeJS.Timeout | null | undefined>>
    timeoutIdInitial: NodeJS.Timeout | null | undefined
    setTimeoutIdInitial: Dispatch<SetStateAction<NodeJS.Timeout | null | undefined>>
}

const PageContext = createContext<PageContextType | undefined>(undefined,)

export function PageWrapper({ children } : ChildrenProps) {
    const [loading, setLoading] = useState<boolean>(false)
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const [isVisibleInitial, setIsVisibleInitial] = useState<boolean>(false)
    const [hasMore, setHasMore] = useState<boolean>(true)
    const [items, setItems] = useState<DataProps[]>([])
    const [element, setElement] = useState(null)
    const [elementInitial, setElementInitial] = useState(null)
    const [currentPage, setCurrentPage] = useState(2)
    const [itemsPerPage, setItemsPerPage] = useState(4)
    const pageOne = getItemsByPage({ currentPage: 1 })
    const [totalPages, setTotalPages] = useState(pageOne.totalPages)
    const [itemsLength, setItemsLength] = useState(pageOne.itemsLength)
    const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null | undefined>()
    const [timeoutIdInitial, setTimeoutIdInitial] = useState<NodeJS.Timeout | null | undefined>()

    const pageChange = useCallback(() => handlePageChange({setLoading, currentPage, setCurrentPage, totalPages, itemsLength, setHasMore, itemsPerPage, items, setItems, hasMore, timeoutId, setTimeoutId}), [currentPage, hasMore, items, itemsLength, itemsPerPage, totalPages, timeoutId, setTimeoutId])

    const pageChangeInitial = useCallback(() => handlePageChangeInitial({setLoading, currentPage, setCurrentPage, totalPages, itemsLength, setHasMore, itemsPerPage, items, setItems, hasMore, timeoutIdInitial, setTimeoutIdInitial}), [currentPage, hasMore, items, itemsLength, itemsPerPage, timeoutIdInitial, totalPages])

    const pageValue = useMemo(() => ({
        loading, setLoading,        
        isVisible, setIsVisible,        
        isVisibleInitial, setIsVisibleInitial,        
        hasMore, setHasMore,        
        items, setItems,        
        element, setElement,        
        elementInitial, setElementInitial,        
        currentPage, setCurrentPage,        
        itemsPerPage, setItemsPerPage, 
        totalPages, setTotalPages,
        itemsLength, setItemsLength,    
        pageChange,
        pageChangeInitial,
        timeoutId, setTimeoutId,
        timeoutIdInitial, setTimeoutIdInitial
    }), [
        loading, setLoading,        
        isVisible, setIsVisible,        
        isVisibleInitial, setIsVisibleInitial,        
        hasMore, setHasMore,        
        items, setItems,        
        element, setElement,        
        elementInitial, setElementInitial,        
        currentPage, setCurrentPage,        
        itemsPerPage, setItemsPerPage,    
        totalPages, setTotalPages,
        itemsLength, setItemsLength,    
        pageChange,
        pageChangeInitial,
        timeoutId, setTimeoutId,
        timeoutIdInitial, setTimeoutIdInitial,
    ])

    return ( 
        <PageContext.Provider value={pageValue}>
            {children}
        </PageContext.Provider>
    )
}

export function usePageContext() {
    const context = useContext(PageContext)
        if (context === undefined) {
            throw new Error('useContext(PageContext) is undefined')
        }
        return context
}
