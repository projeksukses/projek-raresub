import React from 'react'
import { ReactNode } from 'react'

interface CardProps{
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`border ${className} border-gray-200 bg-white shadow-xs p-6`}>
            {children}
        </div>
    )
}

export default Card
