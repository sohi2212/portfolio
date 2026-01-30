import { useEffect, useRef, useState } from "react"

export const useOnScreen = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
        },
            {
                threshold: 0.1
            })

        const node = ref.current
        if (!node) return

        observer.observe(node)

        return () => {
            observer.unobserve(node)
        }
    }, [])

    return {
        ref,
        isVisible
    }
}