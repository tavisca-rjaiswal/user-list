import React,{useState,useEffect,useRef} from 'react';
import './UserDetail.css';

function UserDetail(props) {
  const [fName,updateFName]=useState(props.selectedUser.fName)
  const [lName,updateLName]=useState(props.selectedUser.lName)
  const [id,updateId]=useState(props.selectedUser.id)
  
  function update()
  {
    props.onUpdate({fName,lName,id});
    console.log(iref.current.value)
  }
  function changeFName(e)
  {
    updateFName(e.target.value);
  }
  function changeLName(e)
  {
    updateLName(e.target.value);
  }
  useEffect(()=>{
    updateFName(props.selectedUser.fName);
    updateLName(props.selectedUser.lName);
    updateId(props.selectedUser.id);
  },[props])

  const iref=useRef();

  return (
    <div className="detail">
      <input value={fName} onChange={changeFName} name="fName" ref={iref}></input>
      <input value={lName} onChange={changeLName} name="lName"></input>
      <button onClick={update}>Update</button>
    </div>
  );
}

export default UserDetail;
