'use client'
import React from 'react'

export default function ProjectCard({bg, title,episods,onClick,smallTittle }) {
  return (
    <div className="md:w-[352px] md:h-[165px] w-[300px] h-[120px] rounded-lg cursor-pointer flex gap-3  items-center border p-5 hover:shadow-lg " onClick={onClick}>
    <div className={`md:w-[120px] md:h-[110px] w-[60px] h-[60px]  rounded-lg  ${bg} flex justify-center items-center text-white md:text-[50px] text-[25px] font-bold`}>   <h1>{smallTittle} </h1></div>
       <div className="flex flex-col justify-between  ">
         <div className=" ">
           <h1 className={`text-primery text-[20px]`}>{title}</h1>
           <h3 className='text-[14px] '>{episods}Episods </h3>
         </div>
         <p className="text-[#999999]  text-[12px] ">Last edited a week ago</p>
       </div>
     </div>
  )
}
