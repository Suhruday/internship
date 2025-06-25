import {React,useState} from "react";
function Ads(){
    const [name1,setName]=useState("");
    const [id1,setid]=useState("");
    const[email1,setemail]=useState("");
    function Updatingname1(event){
        setName(event.target.value);
    }
    function Updatingid1(event){
        setid(event.target.value);
    }
    function UpdatingEmail1(event){
        setemail(event.target.value);
    }
    return(
        <div className="d">
            <table border='1' align="center">
                <tr>
                    <th>Student Name</th>
                    <th>Student Id</th>
                    <th>Student Email</th>
                </tr>
                <tr>
                    <td>{name1}</td>
                    <td>{id1}</td>
                    <td>{email1}</td>
                </tr>
            </table>
            <form>
               <div>Student name:<input type="text" name="uname" onChange={Updatingname1}></input></div>
                <div>sid:<input type="text" onChange={Updatingid1}></input></div>
                <div>Email<input type="email" onChange={UpdatingEmail1}></input></div>
                <div>Contact no:<input type="text"></input></div>
                <div>Qualifications:<br/>
                <input type="checkbox" name="s1" value="ssc"/>Ssc<br/>
                <input type="checkbox" name="s1" value="inter"/>Inter<br/>
                </div>
                <div><input type="file"></input></div>
                <div><input type="submit"></input></div>
            </form>
        </div>
    );
}
export default Ads;