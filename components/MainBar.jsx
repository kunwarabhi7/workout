import Link from 'next/link'
import React from 'react'
import Data from '../Data.json'
const MainBar = () => {
  return (

    
  
    <div className="">
      {Data.map(data=>{
        return(
<Link href={`/${data.name}`}>
          <div key={data.id}>
          <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {data.name}
  </span>
</button>
          </div>
</Link>
        )
      })}
    
 

    </div>
  )
}

export default MainBar