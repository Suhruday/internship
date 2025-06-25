import {React,useState} from "react";
function Delf(){
     const [name,setName] = useState("");
        const [id,setid] = useState("");
        const [Depart,setDepart] =useState("");
        function Updatingname(event){
            setName(event.target.value);
      }
      function Updatingid(event){
            setid(event.target.value);
      }
      function UpdatingDepart(event){
        setDepart(event.target.value);
      }
    return(
        <div className="d">
            <table border='1' align="center">
                <tr>
            <th>faculty</th>
            <th>Empid</th>
            <th>Department</th>
            </tr>
            <tr>
                <td>{name}</td>
                <td>{id}</td>
                <td>{Depart}</td>
            </tr>
            </table>
            <form>
           <div>Faclty name:<input type="text" name="uname" onChange={Updatingname}></input></div>
                <div>Empid:<input type="text" name="funame" onChange={Updatingid}></input></div>
           <div>Department:<input type="text" name="depart" onChange={UpdatingDepart}></input></div>
           <div><input type="submit"></input></div>      
           </form>
        </div>
    );
}
export default Delf;