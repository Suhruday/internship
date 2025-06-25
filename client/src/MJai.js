import { useState } from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

function MHampi() {
  const [sname, setSname] = useState("");
  const [pno, setPHno] = useState("");
  const [mail, setTmail] = useState("");
  const [date, setDate] = useState("");
  const [cls, setCls] = useState("");
  const [ada, setAda] = useState(null); // store File object
  const [pla] = useState("JAIPUR");
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
    { year: "2023", people: 484 },
    { year: "2024", people: 495 },
    { year: "2025", people: 263 },
  ];

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://vardhmanvacations.com/blog/wp-content/uploads/2024/11/jaipur-tourist-attractions.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div className="aa" style={backgroundStyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1><b><i>JAIPUR</i></b></h1>
      </div>
      <p><i>
        Jaipur, known as the "Pink City," is a vibrant and captivating destination in India. It's a blend of rich history, stunning architecture, and a lively cultural scene.
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

export default MHampi;
