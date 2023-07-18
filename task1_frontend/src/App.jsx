import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [data, setData] = useState([])
 
  const getAllData=()=>{
    axios.get("https://hack2skill-backend.onrender.com").then((res)=>{setData(res.data)})
    console.log(data)

  }

  useEffect(()=>{

  },[])
  

  return (
    <>
    <button onClick={getAllData}>Get Data</button>

        {
          data.length!=0?<>
          <table>
            <thead>
              <tr>
              <th>Team Name</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Number</th>
              <th>URL</th>
              </tr>
            </thead>
            
            <tbody>
              {data.map((e)=>{
                return(<>
                <tr>
                  <td>{e.data2[0].team_name}</td>
                  <td>{e.full_name}</td>
                  <td>{e.email}</td>
                  <td>{e.city}</td>
                  <td>{e.number}</td>
                  <td>{e.url}</td>
                  </tr>
                

                </>)
              })}
              </tbody>
              
            
          </table>
          </>
          :null
        }
      
    </>
  )
}

export default App
