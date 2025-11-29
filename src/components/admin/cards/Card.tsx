import React from 'react'
import { ReactNode } from 'react'

interface CardProps{
    children: ReactNode;
    className?: string;
}

const Card = ({ children, className }: CardProps) => {
    return (
        <div className={`border ${className} border-gray-200 bg-white shadow-sm p-4`}>
            {children}
        </div>
    )
}

export default Card
