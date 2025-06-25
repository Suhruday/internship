import { useEffect, useState } from "react";
function Gmail() {
    const [mail, setTmail] = useState("");

    const Booking = async (event) => {
    event.preventDefault();

    const sdata = {
      mail:mail};

    try {
      const response = await fetch("http://localhost:4000/Booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sdata),
      });

      const msg = await response.text();
      alert("Server Response: " + msg);
    } catch (error) {
      console.error("Error submitting data:", error);
      alert("Failed to submit data.");
    }
  };

  return(
    <form onSubmit={Booking}>
        <div>
    Email: <input type="email" onChange={(e) => setTmail(e.target.value)} required /></div>
    <div>
          <input type="submit" value="Book Now" />
        </div>
    </form>
  )

}
export default Gmail;