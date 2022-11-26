import { useState,useEffect } from "react";
import { useRouter } from "next/router";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ce4bc40d29msh2e1202fb5cd78c2p135054jsn28cdcf6cdac1',
		'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	}
};

const detail = () => {
  const router = useRouter()
  const {detail} = router.query ; 
    const [gym,setGym] = useState([])


    const getExcersise = () => {

        fetch(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${detail}`, options)
        .then(response => response.json())
        .then(response => setGym(response))
        .catch(err => console.error(err));
    }

    useEffect(()=>{
getExcersise()
    }, [])

  return (
    <div>
      {gym.map((item)=>{
        return (

            <div key={item.id}>
         <img src={item.gifUrl} alt={item.name} />
         <h1>{item.bodyPart}</h1>
         <h1>{item.target}</h1>
         <h1>{item.name}</h1>
         
         <h1>{item.equipment}</h1>



         </div>
             )
      })}
         </div>
  )
}

export default detail