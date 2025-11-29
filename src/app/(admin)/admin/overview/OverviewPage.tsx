"use client"

import React from 'react'
import { Button } from '@/components'
import { Search } from 'lucide-react'
import { Icon } from "@iconify/react";
import IncomeCard from '@/components/admin/cards/IncomeCard';
import { overviewStats, earningsData, salesData, topSalesProductsData } from '@/mocks/overviewData';
import ChartView from '@/components/admin/ChartView';
import { earningsChartConfig, productsTableConf, salesAnalyticsConfig } from './config';
import Card from '@/components/admin/cards/Card';
import DataTable from '@/components/admin/table/Table';
import CustomersActivityChart from './CustomerActivityChart';

const OverviewPage = () => {
  return (
    <>
      <div className='flex justify-between items-center'>
        <h1 className='text-4xl font-semibold'>Overview</h1>
        <div className="flex items-center gap-x-4">
          <div className="flex items-center">
            <input type="text"
              className='bg-gray-100 relative rounded-l-lg p-3 pl-7 w-40 focus:outline-none'
              placeholder='Search'
            />
            <div className="flex items-center pr-4 py-3 rounded-r-lg justify-center bg-gray-100">
              <Search size={24} className='text-gray-400' />
            </div>
          </div>

          <button
            className='flex items-center justify-center cursor-pointer rounded-lg py-3 px-3 bg-gray-100 hover:bg-gray-200 transition-colors duration-100'
          >
            <Icon icon="tdesign:notification-filled" width="24" height="24" />
          </button>

          <Button
            variant='secondary'
            className='px-6 py-3'
            rounded='lg'
          >
            Share Insights
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-x-6 mt-10">
        <div className="col-span-3 flex flex-col gap-y-6">
          <div className="grid grid-cols-3 gap-x-4">
            {overviewStats.map((item, idx) => (
              <IncomeCard
                key={idx}
                title={item.title}
                icon={item.icon}
                data={item.data}
                bgColor={item.bgColor}
              />
            ))}
          </div>
          <Card className='rounded-lg'>
            <ChartView
              config={salesAnalyticsConfig}
              data={salesData}
              height={200}
            />

          </Card>
        </div>
        <Card className='h-full rounded-lg'>
          <ChartView
            config={earningsChartConfig}
            data={earningsData}
          />
        </Card>
      </div>

      <div className="grid grid-cols-4 gap-6 mt-6">
        <Card className='rounded-lg col-span-3'>
          <h2 className='font-semibold text-xl mb-2'>Top Selling Products</h2>
          <DataTable 
            config={{
                ...productsTableConf,
                columns: productsTableConf.columns.map((col) => {
                  if (col.key === "actions") {
                    return {
                      ...col,
                      render: (value, row) => {
                        return (
                          <div className="flex items-center justify-center gap-2">
                            <button
                            className='cursor-pointer'
                              // onClick={() => handleDetail(row)}
                            >
                              <Icon icon="lucide:more-horizontal" width="24" height="24" className='text-gray-500' />
                            </button>
                          </div>
                        );
                      },
                    };
                  }
                  return col;
                }),
              }}
            data={topSalesProductsData}
          />
        </Card>
        <CustomersActivityChart />
      </div>
    </>
  )
}

export default OverviewPage;
