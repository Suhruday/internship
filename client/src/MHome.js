import './App.css';
import React from "react";

const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0.7)), url("https://live.worldtourismforum.net/uploads/Global-Travel-and-Tourism-Set-for-Record-Breaking-2025.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    padding: "20px"
  };

function MHome(){
    return(
        <div className="wel" style={backgroundStyle}>
            <div><h1><b><i>WELCOME</i></b></h1></div>
            <div className='wl'><div><p>We’re thrilled to have you here as you begin your journey to explore some of the world’s most breathtaking destinations. Whether you're seeking cultural heritage, natural wonders, or unforgettable experiences, our platform is your perfect travel companion. From detailed guides and curated itineraries to easy booking options, we’re here to make your travel planning smooth and exciting. Let the adventure begin—your next unforgettable trip starts here!</p></div>
        </div>
        <div className='qu'><div><p>"The journey of a thousand miles begins with a single step."</p><br/>
        <p>"Jobs fill your pocket, but adventures fill your soul."</p><br/>
        <p>"Take only memories, leave only footprints."</p>
        </div></div>
        </div>
    )
}
export default MHome;