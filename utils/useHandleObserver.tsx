import { useEffect, useRef } from 'react'
import { usePageContext } from '../context/PageContext'

// interface FunctionProps {
//     element: any
// }

export const useHandleObserver = () => {
        const pageContext = usePageContext()
        const { setIsVisible, loading, pageChange, element, elementRef, items  } = pageContext
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
            if(!items || items.length < 1) return
            if(typeof window === "undefined") return
            const currentElement = elementRef.current
            // const currentElement = element
            const currentObserver = observer.current
        
            
            if(currentElement){
                console.log(currentElement);                
                currentObserver && currentObserver.observe(currentElement)
            }
            return () => {
                if(currentElement){
                    currentObserver && currentObserver.unobserve(currentElement)
                }
            }
        }, [elementRef, items])
    }