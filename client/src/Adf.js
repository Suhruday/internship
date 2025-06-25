import {React,useState } from "react";
function Adf(){
    const [name,setName] = useState("");
    const [id,setid] = useState("");
    const [Email,setEmail] =useState("");
    function Updatingname(event){
        setName(event.target.value);
  }
  function Updatingid(event){
        setid(event.target.value);
  }
  function UpdatingEmail(event){
       setEmail(event.target.value);
  }
  function UpdatingQualification(event){
    var value=event.target.value;
    var checked=event.target.checked;

  }
    return(
        <div className="d">
            <table border='1' align="center">
                <tr>
            <th>faculty</th>
            <th>Empid</th>
            <th>Email</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{id}</td>
                <td>{Email}</td>
            </tr>
            </table>
            <form>
               <div>Faclty name:<input type="text" name="uname" onChange={Updatingname}></input></div>
                <div>Empid:<input type="text" name="funame" onChange={Updatingid}></input></div>
                <div>Email<input type="email" name="femail" onChange={UpdatingEmail}></input></div>
                <div>Contact no:<input type="text"></input></div>
                <div>Qualifications:<br/>
                <input type="checkbox" name="s1" value="ssc"/>Ssc<br/>
                <input type="checkbox" name="s1" value="inter"/>Inter<br/>
                <input type="checkbox" name="s1" value="Btech"/>Btech
                </div>
                <div><input type="file"></input></div>
                <div><input type="submit"></input></div>
            </form>
        </div>
       
    );
}
export default Adf;