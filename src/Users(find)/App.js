import React, { useEffect, useState } from 'react';
import './index.scss';
import { Success } from './components/Success';
import { Users } from './components/Users';



function App() {

  const[users,setUsers] = useState([]);
  const [isLoading,setisLoading] = useState(true)
  const [searchValue,setSearchValue] = useState('');
  const [invites,setInvites] = useState([]);
  const [success,setSuccess] = useState(false);




  useEffect(()=>{
    fetch(` https://reqres.in/api/users`)
    .then((res)=>res.json())
    .then((json)=>{
      setUsers(json.data)
    }).catch((err)=>{
      console.warn(err);
      alert('Ошибка при получении пользователей');

    }).finally(()=>{
      setisLoading(false)
    })
  },[])


  const onChangeSearchValue = (event)=>{
   
    setSearchValue(event.target.value)

  }

  // console.log(searchValue);
 

  const onClickInvite = (id)=>{
    
    if(invites.includes(id)){

     setInvites(prev => prev.filter(_id=>_id !== id))

    }else{
      setInvites(prev=>[...prev,id])
    }
 

  }


  const onClickSendInvites = ()=>{

   setSuccess(true)

  };




  return (
    <div className="App">

      { success ? <Success count = {invites.length}/>

                :  <Users onClickSendInvites={onClickSendInvites} invites={invites} onClickInvite={onClickInvite} onChangeSearchValue={onChangeSearchValue} searchValue = {searchValue} items={users} />
    

}
    </div>
  );
}

export default App;
