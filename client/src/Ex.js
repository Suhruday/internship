import React,{useState} from 'react';

function Ex() {
    let records=["getDetails"]

// const [sname,setSname]=useState("");
const [srno,setSRno]=useState("");


const [msg, setMessage] = useState([]); // Make msg an array

const getDetails = async (event) => {
  event.preventDefault();
  const data = { rno: srno };

  const response = await fetch("http://localhost:4000/getDetails", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  const result = await response.json();
  setMessage(result); // Assuming result is an array

  // Example use of msg.map
  result.map((item) => {
    console.log("Item:", item);
    // You can add more logic here if needed
  });
};


  return (
    <div>
      <form onSubmit={getDetails}>

        {/* Sname:<input type="text" name="t1" onChange={(e)=>{setSname(e.target.value)}}></input> */}
        SRno:<input type="text" name="t2" onChange={(e)=>{setSRno(e.target.value)}}></input>
        <input type="submit" value="GetDetails"></input>
        
      </form>
      <div>
        <table>
            <tr>
                {records.map((result)=>(<tr>
                    {msg.map((result)=>(<td>{result}</td>))}</tr>))}
                    </tr>
        </table>
      </div>
    </div>
  );
}

export default Ex;      






// import React, { useState } from 'react';

// function NR() {
//   const [srno, setSRno] = useState('');
//   const [records, setRecords] = useState([]); // To store data from server

//   const getDetails = async (event) => {
//     event.preventDefault();

//     const data = { rno: srno };

//     try {
//       const response = await fetch("http://localhost:4000/getDetails", {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data),
//       });

//       const result = await response.json(); // Expecting server to return JSON
//       setRecords(Array.isArray(result) ? result : [result]); // Normalize to array
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to get details.");
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={getDetails}>
//         SRno:
//         <input
//           type="text"
//           name="t2"
//           onChange={(e) => setSRno(e.target.value)}
//           value={srno}
//           required
//         />
//         <input type="submit" value="Get Details" />
//       </form>

//       <div>
//         {records.length > 0 && (
//           <table border="1">
//             <thead>
//               <tr>
//                 {Object.keys(records[0]).map((key) => (
//                   <th key={key}>{key}</th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {records.map((record, index) => (
//                 <tr key={index}>
//                   {Object.values(record).map((value, idx) => (
//                     <td key={idx}>{value}</td>
//                   ))}
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         )}
//       </div>
//     </div>
//   );
// }

// export default NR;
