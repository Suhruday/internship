import { useState } from "react";
import { BarChart, Bar, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";

function MTokyo() {
  const [sname, setSname] = useState("");
  const [pno, setPHno] = useState("");
  const [mail, setTmail] = useState("");
  const [date, setDate] = useState("");
  const [cls, setCls] = useState("");
  const [ada, setAda] = useState(null);
  const [pss, setPss] = useState(null); // store File object
  const [pla] = useState("TOKYO");
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
    formData.append("aadhaar", ada);
    formData.append("passport", pss); // field name must match Multer’s field

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
    { year: "2023", people: 320 },
    { year: "2024", people: 542 },
    { year: "2025", people: 304 },
  ];

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://www.japanrailpassnow.co.uk/wp-content/uploads/2016/09/Tokyo-Tower-Twilight.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px",
  };

  return (
    <div className="aa" style={backgroundStyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1><b><i>TOKYO</i></b></h1>
      </div>
      <p><i>
        Tokyo is a captivating global metropolis where futuristic skyscrapers stand side-by-side with ancient temples, offering a diverse and exciting experience for travelers. From vibrant neighborhoods like Harajuku and Shibuya, known for their unique fashion and culture, to the bustling Akihabara district with its anime and video game scene, there's something for everyone.
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
            multiple
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setAda(e.target.files[0])}
            required
          /><br />

          Passport:{" "}
          <input
            type="file"
            multiple
            accept=".jpg,.jpeg,.png"
            onChange={(e) => setPss(e.target.files[0])}
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

export default MTokyo;
