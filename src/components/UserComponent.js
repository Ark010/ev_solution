import React,{useState,useEffect} from 'react'
import axios from 'axios'

function UserComponent() {
    const [user,setUser] = useState([])
    const [refreshCounter,setRefreshCounter]= useState(1)
   
    useEffect(()=>{
        getuserData()
    },[refreshCounter])

    const getuserData = async ()=>{
        const url='https://randomuser.me/api'
        await axios.get(url)
        .then((response)=>{
              const  user_array = response.data.results
               setUser(()=>user_array) 
        })
        .catch((error)=>{
            console.log(JSON.stringify(error));
        })
    }
    
  return (
    
    <>
       
        <h1>Hi,please find the user details below</h1>
       <table className='tableClass'>
            <thead>
                <th>FullName</th>
                <th>Email</th>
            </thead>
            <tbody>
       {user.map(records=><tr key={records.id}>
        <td>{`${records.name.title}
            ${records.name.first}
            ${records.name.last}`}
        </td>
        <td>
            {records.email}
        </td>
        </tr>
        )}
        </tbody>
        </table><br/>  
        <button type="button" onClick={()=>{setRefreshCounter(refreshCounter+1)}}>Refresh</button>
    </>
  );
}

export default UserComponent