import { useState, useEffect, ReactNode } from 'react'
import { createPortal } from 'react-dom'

/**
 * Render children into a different part of the DOM. This component is safe to use for client side
 * rendering (CSR) and server side rendering (SSR).
 */
const Portal = ({ children, domNode }: PortalProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    return isMounted ? createPortal(children, domNode || document.body) : null
}

export interface PortalProps {
    /**
     * The content of the component.
     */
    children: ReactNode
    /**
     * Optional DOM node. If no DOM node is passed into the component, the portal will be appended to
     * the `document.body` DOM node.
     */
    domNode?: Element | DocumentFragment
}

export default Portal
