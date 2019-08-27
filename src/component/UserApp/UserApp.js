import React,{useState,useEffect} from 'react';
import UserList from '../UserList/UserList';
import UserDetail from '../UserDetail/UserDetail';
import { useGlobalState } from "../../useGlobalState";
import './UserApp.css'

function UserApp(props) {  
  const [state, dispatch] = useGlobalState();
  return (
    <div className="App">
        <UserList userList={state.userList} />
        <UserDetail ></UserDetail>
    </div>
  );
}

export default UserApp;
