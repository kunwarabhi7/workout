import Link from 'next/link'
import React from 'react'
import Equipment from '../../Equipment.json'

const index = () => {
  return (
    <div>
        {Equipment.map(data=>{
        return(
<div class="text-gray-600 body-font" key={data.id}>
<Link href={`Equipment/${data.name}`}>
  <div class="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
    <img class="lg:w-2/6 md:w-3/6 w-5/6 h-96 mb-10 object-cover object-center rounded" alt="hero" src={data.ImageURL} />
          <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {data.name}
  </span>
</button>
          </div>
</Link>
          </div>
        )
      })}
    </div>
  )
}

export default index