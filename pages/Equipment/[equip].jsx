import { useRouter } from 'next/router';
import React,{useState,useEffect} from 'react'

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};



const equip = () => {
    const router = useRouter()
    const {equip} = router.query;
    const [equipment,setEquipment] = useState([])
const getEquipped = () => {
    fetch(  `https://exercisedb.p.rapidapi.com/exercises/equipment/${equip}`, options)
	.then(response => response.json())
	.then(response => setEquipment(response))
	.catch(err => console.error(err));
}

useEffect(()=>{
getEquipped()
},[])

  return (
    <div> <div className="w-full lg:mx-48">
    {equipment.map((item)=>{
      return (
      <div key={item.id} className="text-gray-600 body-font">
<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
  <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
    <img className="object-cover object-center rounded" alt="hero" src={item.gifUrl} />
  </div>
  <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{item.bodyPart}
      <br className="hidden lg:inline-block" />{item.target}
    </h1>
    <p className="mb-8 leading-relaxed">{item.name}</p>
    <div className="flex justify-center">
      <button className="inline-flex w-full text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">{item.equipment}</button>
    </div>
  </div>
</div>
</div>
           )
    })}
       </div>
       </div>
  )
}

export default equip;