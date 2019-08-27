import React,{useState,useEffect,useRef} from 'react';
import './UserDetail.css';
import { useGlobalState } from "../../useGlobalState";


function UserDetail(props) {
  const [state, dispatch] = useGlobalState();

  const [fName,updateFName]=useState(state.selectedUser.fName)
  const [lName,updateLName]=useState(state.selectedUser.lName)
  const [id,updateId]=useState(state.selectedUser.id)
  
  function update()
  {
    dispatch({ type: "UPDATE_SELECTED_USER", payload:{fName,lName,id} })
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
    updateFName(state.selectedUser.fName);
    updateLName(state.selectedUser.lName);
    updateId(state.selectedUser.id);
  },[state])

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
