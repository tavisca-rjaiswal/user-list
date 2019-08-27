import React from 'react';
import './UserItem.css';

function UserItem(props) {
  function selectItem()
  {
    props.selectId(props.user.id);
  }
  return (
    <div className="item" onClick={selectItem}>
      <p>{props.user.fName}</p>
      <p> {props.user.lName}</p>
    </div>
  );
}

export default UserItem;
