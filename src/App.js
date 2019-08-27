import React,{useState,useEffect} from 'react';
import './App.css';
import UserList from './component/UserList/UserList'
import UserDetail from './component/UserDetail/UserDetail'

function App() {
  const userListDataArray=[
    {id: '1', fName:"Rishabh",lName:"Jaiswal"},
    {id: '2', fName:"Adarsh",lName:"Vidhate"},
    {id: '3', fName:"Yash",lName:"Mundada"},
    {id: '4', fName:"Silkesh",lName:"Harrison"}
  ]

  const [userListData,setUserListData]=useState(userListDataArray);
  const [selectedId,setSelectedId]=useState(1);
  const [selectedItem,setSelectedItem]=useState(userListData[0]);
  
  const updateUserList = (newValue) =>
  {
    setUserListData(userListData.map(user => (user.id === newValue.id ? newValue : user)));
  }

  const updateSelectedId=(newValue)=>{
    setSelectedId(newValue);
  }

  useEffect(()=>{
    setSelectedItem(userListData.find((ele)=>
    {
      if(ele.id==selectedId)
      {
        return ele;
      }
    }))
  },[selectedId,userListData])

  return (
    <div className="App">
      <UserList userList={userListData} selectId={updateSelectedId}/>
      <UserDetail selectedUser={selectedItem} onUpdate={updateUserList} ></UserDetail>
    </div>
  );
}

export default App;
