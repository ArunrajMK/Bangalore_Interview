import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from '../redux/action'

function Flight() {

const [name, setName] = useState([]);
const [destinationCity, setDestinationCity] = useState([])

const data = useSelector((store)=>store.data.data)

const dispatch = useDispatch()

console.log("data",data)

console.log("OutF",name)

const handleClick = ()=>{
    console.log("inF", name)
    dispatch(getData({destinationCity,name}))
}

useEffect(()=>{
dispatch(getData({destinationCity,name}))
},[dispatch,destinationCity,name])

  return (
    <div>
        <h1>Filter</h1>
       
        <input onChange={(e)=>setName([e.target.value])} placeholder="Name" />
        <input onChange={(e)=>setDestinationCity([e.target.value])} placeholder="Destination" />
         <button onClick={handleClick}>Search</button>
         {/* {data.length===0 && <h1>No Flight with this filter</h1>} */}
        {data.map((item)=>(

            <div key={item.id}>
            <h2>{item.name}</h2>
            <h2>{item.destinationCit}</h2>

            </div>
        ))}
    </div>
  )
}

export default Flight