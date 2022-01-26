import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Card01 from './components/Card01';


function App() {
  const [users,setUsers] = useState();
  const [input, setInput] = useState({})
  const [error,setError] = useState(null);


  useEffect(() => {
    const fetchData=async()=>{
      try{
        const {data:{data}}=await axios.get("https://reqres.in/api/users?page=2")
        setUsers(data)
      }catch(err){
        setError(err)

      }
    }
    fetchData();
    
  }, []);
  console.log(users&&users.map(el=>el.first_name))
  return (
    <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
     {users&&users.map(el=><Card01 avatar={el.avatar} email={el.email} name={el.first_name}/>)}
     <div style={{margin:'5%'}}>
        <input onChange={(e)=>setInput(e.target.value)} type='text'/>
        <button onClick={()=>setUsers([...users,{first_name:input}])}> submit </button>
        </div>
      
    </div>
  );
}

export default App;
