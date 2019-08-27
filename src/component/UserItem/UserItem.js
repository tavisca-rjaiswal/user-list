import React from 'react';
import './UserItem.css';
import { useGlobalState } from "../../useGlobalState";

function UserItem(props) {
  const [state, dispatch] = useGlobalState();

  function selectItem()
  {
    dispatch({ type: "SET_USER_ID", payload:props.user.id })
  }
  return (
    <div className="item" onClick={selectItem}>
      <p>{props.user.fName}</p>
      <p> {props.user.lName}</p>
    </div>
  );
}

export default UserItem;
