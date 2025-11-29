import React from 'react'
import { Icon } from '@iconify/react';

interface IncomeCardProps {
    title: string;
    icon: string;
    data: number;
    bgColor: string;
}

const IncomeCard = ({
    title,
    icon,
    data,
    bgColor,
}: IncomeCardProps) => {
    return (
        <div className={`rounded-lg p-5 flex flex-col justify-center gap-y-4`}
            style={{
                backgroundColor: bgColor
            }}
        >
            <div className='flex items-center gap-x-3'>
                <div className="flex items-center justify-center bg-white rounded-md p-2">
                    <Icon icon={icon} width="28" height="28" className='text-black' />
                </div>
                <h4 className='font-semibold capitalize'>{title}</h4>
            </div>
            <div className="flex items-center justify-between">
                <h1 className='font-bold text-2xl'>
                    {data}
                </h1>
                <Icon icon="iconamoon:trend-up-light" width="28" height="28" className='text-black' />
            </div>
        </div>
    )
}

export default IncomeCard
