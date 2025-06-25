import {React,useState} from "react";
function Dels(){
    const [name1,setName1]=useState("");
        const [id1,setid1]=useState("");
        const[Branch,setBranch]=useState("");
        const [Year,setYear]=useState("");
        function Updatingname1(event){
            setName1(event.target.value);
        }
        function Updatingid1(event){
            setid1(event.target.value);
        }
        function UpdatingBranch(event){
            setBranch(event.target.value);
        }
        function UpdatingYear(event){
            setYear(event.target.value);
        }
    return(
        <div className="d">
            <table border='1' align="center">
                <tr>
                    <th>Student Name</th>
                    <th>Student Id</th>
                    <th>Student Email</th>
                    <th>Year</th>
                </tr>
                <tr>
                    <td>{name1}</td>
                    <td>{id1}</td>
                    <td>{Branch}</td>
                    <td>{Year}</td>
                </tr>
            </table>
            <form>
           <div>Student name:<input type="text" name="uname" onChange={Updatingname1}></input></div>
            <div>sid:<input type="text" onChange={Updatingid1}></input></div>
            <div>Branch<input type="text" onChange={UpdatingBranch}></input></div>
           <div>year:<input type="text"  onChange={UpdatingYear}></input></div>
           <div><input type="submit"></input></div>
           </form>
        </div>
    );
}
export default Dels;