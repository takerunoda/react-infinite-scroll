import { useEffect, useRef } from 'react'
import { usePageContext } from '../context/PageContext'

interface FunctionProps {
    element: any
}

export const useHandleObserver = ({ element } : FunctionProps) => {
        const pageContext = usePageContext()
        const { setIsVisible, loading, pageChange  } = pageContext
        const handlePageChangeRef = useRef(pageChange)
        const callback = (entries: any) => {
            if(loading) return
            const firstOne = entries[0]
            setIsVisible(firstOne.isIntersecting)
            if(firstOne.isIntersecting){
                handlePageChangeRef.current()
            }
        }
        const options = { 
            root: null,
            rootMargin: "0px",
            threshold: 1
        }
        const interSection = (typeof window === "undefined") ? null : new IntersectionObserver(callback, options)
        const observer = useRef(interSection)
        useEffect(() => {
                handlePageChangeRef.current = pageChange;
            }, [pageChange]);

        useEffect(() => {
            if(typeof window === "undefined") return
            const currentElement = element
            const currentObserver = observer.current
            if(currentElement){
                currentObserver && currentObserver.observe(currentElement)
            }
            return () => {
                if(currentElement){
                    currentObserver && currentObserver.unobserve(currentElement)
                }
            }
        }, [element])
    }