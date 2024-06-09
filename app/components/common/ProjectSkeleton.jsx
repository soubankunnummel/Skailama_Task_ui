'use client'
import React from 'react'

export default function ProjectCardSkeleton() {
  return (
    <div className="w-[352px] h-[165px] rounded-lg flex gap-3 items-center border p-5 hover:shadow-lg animate-pulse">
      <div className="w-[120px] h-[110px] rounded-lg bg-gray-300"></div>
      <div className="flex flex-col justify-between flex-1">
        <div className="space-y-3">
          <div className="w-3/4 h-5 bg-gray-300 rounded"></div>
          <div className="w-1/2 h-4 bg-gray-300 rounded"></div>
        </div>
        <div className="w-1/3 h-4 bg-gray-300 rounded mt-2"></div>
      </div>
    </div>
  );
}
