import React,{useState} from 'react';

function NR() {

// const [sname,setSname]=useState("");
const [srno,setSRno]=useState("");


const [msg,setMessage]=useState("");
const getDetails=async(event)=>
{
  event.preventDefault();
  const sdata={rno:srno}
  try {
      const response = await fetch("http://localhost:4000/getDetails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sdata)
      });

      const msg = await response.text();
      alert("Server Response: " + msg);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
}

  return (
    <div>
      <form onSubmit={getDetails}>

        {/* Sname:<input type="text" name="t1" onChange={(e)=>{setSname(e.target.value)}}></input> */}
        SRno:<input type="text" name="t2" onChange={(e)=>{setSRno(e.target.value)}}></input>
        <input type="submit" value="GetDetails"></input>
        
      </form>
    </div>
  );
}

export default NR;
