import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import React from 'react'

const Card = ({title, value, icon, showIcon = true, change, changeText, changeType}) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-sm flex justify-between items-center w-full sm:w-auto">
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h2 className="text-2xl font-bold">{value}</h2>
        <div className={`text-sm flex items-center mt-1 ${changeType === "up" ? "text-green-600" : changeType === "down" ? "text-yellow-600" : "text-blue-600"}`}>
        {showIcon && (
          <>
            {changeType === "up" ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          </>
        )}
          <span className="ml-1">{changeText}</span>
        </div>
      </div>
      <div className="text-gray-400">
        {icon}
      </div>
    </div>
  )
}

export default Card