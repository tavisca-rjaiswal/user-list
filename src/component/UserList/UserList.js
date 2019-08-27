import React,{useState,useEffect} from 'react';
import UserItem from '../UserItem/UserItem';

function UserList(props) {

  let UserItemList=props.userList.map((user,i)=>
    <UserItem user={user} key={i} selectId={props.selectId}></UserItem>
  )

  return (
    <div>
      {UserItemList}
    </div>
  );
}

export default UserList;
