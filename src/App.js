import React,{useState,useEffect} from 'react';
import './App.css';
import UserApp from './component/UserApp/UserApp'
import { Provider } from "./useGlobalState";

function reducer(state, action) {

  switch (action.type) {
    case "SET_USER_ID":
      let selectedUser=state.userList.find((ele)=>
      {
        if(ele.id==action.payload)
        {
          return ele;
        }
      })
    return {...state,selectedUser,selectedId:action.payload};

    case "UPDATE_SELECTED_USER":
      return {...state, userList:state.userList.map(user => (user.id === action.payload.id ? action.payload : user)),selectedUser:action.payload};
    
    default:
      return state;
  }
}

const userListDataArray=[
  {id: '1', fName:"Rishabh",lName:"Jaiswal"},
  {id: '2', fName:"Adarsh",lName:"Vidhate"},
  {id: '3', fName:"Yash",lName:"Mundada"},
  {id: '4', fName:"Silkesh",lName:"Harrison"}
]

const initialState = {fname:"",lname:"",userList:userListDataArray,selectedId:userListDataArray[0].id, selectedUser:userListDataArray[0]};

function App() {

  return (
    <Provider reducer={reducer} initialState={initialState}>
      <UserApp></UserApp>
    </Provider>
  );
}

export default App;
