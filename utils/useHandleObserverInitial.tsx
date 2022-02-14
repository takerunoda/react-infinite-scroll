import { useEffect, useRef } from 'react'
import { usePageContext } from '../context/PageContext'

interface FunctionProps {
    elementInitial: any
}

export const useHandleObserverInitial = ({ 
            elementInitial
    } : FunctionProps) => {
        const pageContext = usePageContext()
        const { setIsVisibleInitial, pageChangeInitial } = pageContext
        const handlePageChangeInitialRef = useRef(pageChangeInitial)
        const callback = (entries: any) => {
            const firstOne = entries[0]
            setIsVisibleInitial(firstOne.isIntersecting)
            if(firstOne.isIntersecting){
                setIsVisibleInitial(firstOne.isIntersecting)
                handlePageChangeInitialRef.current()
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
                handlePageChangeInitialRef.current = pageChangeInitial;
            }, [pageChangeInitial]);

        useEffect(() => {
            if(typeof window === "undefined") return
            const currentElement = elementInitial
            const currentObserver = observer.current

            if(currentElement){
                currentObserver && currentObserver.observe(currentElement)
            }
            return () => {
                if(currentElement){
                    currentObserver && currentObserver.unobserve(currentElement)
                }
            }
        }, [elementInitial])
    }