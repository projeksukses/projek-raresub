"use client";

import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "Mon", customers: 1200 },
  { day: "Tue", customers: 1700 },
  { day: "Wed", customers: 600 },
  { day: "Thu", customers: 900 },
  { day: "Fri", customers: 1889 },  // seperti gambar
  { day: "Sat", customers: 1600 },
  { day: "Sun", customers: 1100 },
];

export default function CustomersActivityChart() {
  return (
    <div className="bg-[#111] p-5 rounded-lg w-full max-w-sm text-white">
      <h2 className="text-xl font-semibold mb-4">Customers Activity</h2>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis 
            dataKey="day" 
            axisLine={false} 
            tickLine={false} 
            tick={{ fill: "#ccc" }} 
          />
          <Tooltip 
            cursor={{ fill: "transparent" }}
            contentStyle={{ background: "#222", borderRadius: "8px", border: "none" }}
            labelStyle={{ color: "#fff" }}
          />

          <Bar 
            dataKey="customers" 
            radius={[10,10,10,10]} 
            barSize={10} 
            fill="#c7b9ff"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
