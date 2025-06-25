// import { useEffect, useState } from "react";
// import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

// function MAg() {
//   const [sname, setSname] = useState("");
//   const [pno, setPHno] = useState("");
//   const [mail, setTmail] = useState("");
//   const [date, setDate] = useState("");
//   const [cls, setCls] = useState("");
//   const [ada, setAda] = useState("");
//   const [pla, setPla] = useState("AGRA");

//   const Booking = async (event) => {
//     event.preventDefault();

//     const sdata = {
//       pla,name: sname,no: pno,mail:mail,date:date,cls:cls,ada:ada,};

//     try {
//       const response = await fetch("http://localhost:4000/Booking", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(sdata),
//       });

//       const msg = await response.text();
//       alert("Server Response: " + msg);
//     } catch (error) {
//       console.error("Error submitting data:", error);
//       alert("Failed to submit data.");
//     }
//   };

//   const visiters = [
//     { year: "2023", people: 500 },
//     { year: "2024", people: 650 },
//     { year: "2025", people: 250 },
//   ];


//   const backgroundStyle = {
//     backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2023-07-21-13-58-37-64ba41b586366-Agra-The-Glimpse-of-Mughal-Kingdom.jpg")`,
//     backgroundSize: "cover",
//     backgroundRepeat: "no-repeat",
//     backgroundPosition: "center",
//     minHeight: "100vh",
//     padding: "20px"
//   };


//   return (
//     <div className="aa" style={backgroundStyle}>
//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <h1><b><i>AGRA</i></b></h1>
//       </div>
//       <p><i>
//         Agra, the city of timeless beauty, is home to the iconic Taj Mahal, a UNESCO World Heritage Site and a symbol of eternal love...
//       </i></p>

//       <div style={{ display: "flex", justifyContent: "center" }}>
//         <BarChart width={300} height={300} data={visiters}>
//           <CartesianGrid stroke="red" />
//           <XAxis dataKey="year" />
//           <YAxis />
//           <Tooltip />
//           <Bar dataKey="people" fill="#8884d8" />
//         </BarChart>
//       </div>

//       <form onSubmit={Booking}>
//         <input type="hidden" value={pla} />

//         <div>
//           Name: <input type="text" onChange={(e) => setSname(e.target.value)} required /><br />
//           Phone No: <input type="text" onChange={(e) => setPHno(e.target.value)} required /><br />
//           Email: <input type="email" onChange={(e) => setTmail(e.target.value)} required /><br />
//           Date of Journey: <input type="date" onChange={(e) => setDate(e.target.value)} required /><br />

//           <b>Traveling Class:</b><br />
//           <input type="radio" id="first" name="s1" value="1st class" onChange={(e) => setCls(e.target.value)} required />
//           <label htmlFor="first">1st class (25000rs)</label><br />
//           <input type="radio" id="second" name="s1" value="2nd class" onChange={(e) => setCls(e.target.value)} />
//           <label htmlFor="second">2nd class (2000rs)</label><br />
//           <input type="radio" id="general" name="s1" value="General" onChange={(e) => setCls(e.target.value)} />
//           <label htmlFor="general">General (15000rs)</label><br />

//           Aadhaar File Name: <input type="file" placeholder="aadhaar.png" onChange={(e) => setAda(e.target.value)} required />
//         </div>

//         <div>
//           <input type="submit" value="Book Now" />
//         </div>
//       </form>
//     </div>
//   );
// }

// export default MAg;


import { useState } from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

function MAg() {
  const [sname, setSname] = useState("");
  const [pno, setPHno] = useState("");
  const [mail, setTmail] = useState("");
  const [date, setDate] = useState("");
  const [cls, setCls] = useState("");
  const [ada, setAda] = useState(null); // store File object
  const [pla] = useState("AGRA");
  const [imageUrl, setImageUrl] = useState(null);

  const Booking = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("pla", pla);
    formData.append("name", sname);
    formData.append("no", pno);
    formData.append("mail", mail);
    formData.append("date", date);
    formData.append("cls", cls);
    formData.append("aadhaar", ada); // field name must match Multer’s field

    try {
      const response = await fetch("http://localhost:4000/Booking", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      alert("Server Response: " + result.message);

      if (result.aadharImageUrl) {
        setImageUrl(result.aadharImageUrl);
      }
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };

  const visiters = [
    { year: "2023", people: 500 },
    { year: "2024", people: 650 },
    { year: "2025", people: 250 },
  ];

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://boutindia.s3.us-east-2.amazonaws.com/images/blog/images/2023-07-21-13-58-37-64ba41b586366-Agra-The-Glimpse-of-Mughal-Kingdom.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div className="aa" style={backgroundStyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1><b><i>AGRA</i></b></h1>
      </div>
      <p><i>
        Agra, the city of timeless beauty, is home to the iconic Taj Mahal, a UNESCO World Heritage Site and a symbol of eternal love...
      </i></p>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <BarChart width={300} height={300} data={visiters}>
          <CartesianGrid stroke="red" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="people" fill="#8884d8" />
        </BarChart>
      </div>

      <form onSubmit={Booking} encType="multipart/form-data">
        <div>
          Name: <input type="text" value={sname} onChange={(e) => setSname(e.target.value)} required /><br />
          Phone No: <input type="text" value={pno} onChange={(e) => setPHno(e.target.value)} required /><br />
          Email: <input type="email" value={mail} onChange={(e) => setTmail(e.target.value)} required /><br />
          Date of Journey: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required /><br />

          <b>Traveling Class:</b><br />
          <input type="radio" id="first" name="s1" value="1st class" onChange={(e) => setCls(e.target.value)} required />
          <label htmlFor="first">1st class (25000rs)</label><br />
          <input type="radio" id="second" name="s1" value="2nd class" onChange={(e) => setCls(e.target.value)} />
          <label htmlFor="second">2nd class (2000rs)</label><br />
          <input type="radio" id="general" name="s1" value="General" onChange={(e) => setCls(e.target.value)} />
          <label htmlFor="general">General (15000rs)</label><br />

          Aadhaar File:{" "}
          <input
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setAda(e.target.files[0])}
            required
          /><br />
        </div>

        <div>
          <input type="submit" value="Book Now" />
        </div>
      </form>

      {/* {imageUrl && (
        <div style={{ marginTop: "20px" }}>
          <h4>Uploaded Aadhaar Preview:</h4>
          <img src={imageUrl} alt="Aadhaar" width="200" />
        </div>
      )} */}
    </div>
  );
}

export default MAg;
